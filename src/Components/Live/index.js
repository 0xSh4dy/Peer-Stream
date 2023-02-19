import {
  Avatar,
  List,
  ListItemAvatar,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Button } from "react-ui";
import Layout from "../Layout";
import io from "socket.io-client";
import { useEffect, useRef, useState } from "react";
import CopyToClipboardButton from "../CopyToClipboardButton";
// import Chat from "../Chat";

const auto_grow = (element) => {
  element.style.height = "5px";
  element.style.height = element.scrollHeight + "px";
};


export default function LiveStream( {address} ) {
  let link = "https://lp-playback.com/hls/dfe1aanz93atxi4f/video";
  
  
  const [socket, setSocket] = useState({ nsp: "null" });
  const [messages,setMessages] = useState([])
  
  const handleSend = (msg) => {
      console.log(msg)
      socket.emit('message', {link:link, name:'0x62783f623f865f263f6823f86f23f23432f', message:msg});
      setMessages(messages => [...messages, {name:'0x627..432f',message:msg,person:"https://stonegatesl.com/wp-content/uploads/2021/01/avatar-300x300.jpg"}])
      console.log(messages)
      let chatBox = document.getElementById('chatBox'); 
      let xH = chatBox.scrollHeight+72;

      chatBox.scrollTo(0, xH);
  };

  const inputRef = useRef(null);

useEffect(()=>{
  if(socket.nsp !== "null"){
      socket.on('data', (data) => {
          data.map(({ name, message, person }, index)=>{
              setMessages(messages => [...messages, {name:name,message:message,person:person}])
          })
      });

      socket.on('message',({ name, message, person })=>{
          setMessages(messages => [...messages, {name:name,message:message,person:person}])
      })
  }
},[socket])

useEffect(() => {
  const listener = (event) => {
    if (event.code === "Enter" || event.code === "NumpadEnter") {
      event.preventDefault();
      if (inputRef.current.value.trim() !== "") {
        handleSend(inputRef.current.value);
        inputRef.current.value = "";
        event.target.style.height = "5px";
        event.target.style.height = event.target.scrollHeight + "px";

      }
    }
  };
  document.addEventListener("keydown", listener);    
  return () => {
    document.removeEventListener("keydown", listener);
  };
}, [handleSend]);


useEffect(() => {
  const newSocket = io("54.215.206.6:3939/public");
  setSocket(newSocket);
  newSocket.emit("connection",link);
  return () => newSocket.close();
}, [setSocket]);


return (
  <Layout>
    <div className="flex w-screen h-screen">
      <div className="flex ml-8 flex-col h-fit w-fit p-4 mt-20 ">
        <iframe src={link} width={880} height={480}></iframe>
        <hr className="bg-slate-500 my-4" />
        <p className="video-title text-xl  text-slate-50">
          The most sensual video of all time
        </p>
        <div className="flex flex-row pt-8">
          <Avatar
            alt="Avatar"
            src="https://www.animesoulking.com/wp-content/uploads/2021/02/mushoku-tensei-740x414.jpg"
          />
          <div className="pl-4 text-sm">
            <p className="channel mt-2 text-sm text-slate-300">
              Rias Gremory <br />
              100K views • 2 months ago{" "}
            </p>
          </div>
          <div className="ml-[340px] space-x-4">
            <Button
              className="bg-gray-700 h-10 w-30 pl-4 rounded-md right-0"
              variant="contained"
            >
              Copy Link <CopyToClipboardButton />{" "}
            </Button>
            <Button
              className="bg-blue-600 h-10 w-30 px-4 rounded-md right-0"
              variant="contained"
            >
              Subscribe
            </Button>
          </div>
        </div>
        <div className="mt-8">
          <p className="channel mt-2 text-sm text-slate-300">Lorem impsum</p>
        </div>
      </div>
      <div className="flex flex-col mt-16 w-[500px]">
        <List  id='chatBox' sx={{ overflow: "auto", borderBottom: 1 }}>
          {messages.map(({ name, message, person }, index) => (
            <ListItem key={index + person}>
              <ListItemAvatar>
                <Avatar alt="Profile Picture" src={person} />
              </ListItemAvatar>
              <ListItemText primary={name} secondary={message} />
            </ListItem>
          ))}
        </List>
        {/* <div className="flex w-full"> */}
          <div className="sticky bottom-0 backdrop-blur-lg  pb-4">
            <textarea
              ref={inputRef}
              onInput={(e) => auto_grow(e.target)}
              placeholder="Type your message here"
              className="resize-none bg-[#121212] overflow-hidden h-[56px] placeholder:text-primary/[0.40] w-full border rounded-md p-4 border-primary/20 active:border-primary/50 focus:border-primary/50 focus:outline-none text-white"
            />
              <p className="text-xs text-primary">Press return to send</p>
          </div>
        </div>
    </div>
  </Layout>
);
}