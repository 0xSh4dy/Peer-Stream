import Layout from "./Layout/index";
import {
  Divider,
  Avatar,
  Box,
  List,
  ListItemAvatar,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import { padding } from "@mui/system";

export default function LiveStream() {
  let link = "https://lp-playback.com/hls/dfe1aanz93atxi4f/video";
  const messageExamples = [
    {
      name: "Brunch this week?",
      message:
        "I'll be in the neighbourhood this week. Let's grab a bite to eat",
      person: "/static/images/avatar/5.jpg",
    },
    {
      name: "Birthday Gift",
      message: `Do you have a suggestion for a good present for John on his work
            anniversary. I am really confused & would love your thoughts on it.`,
      person: "/static/images/avatar/1.jpg",
    },
    {
      name: "Recipe to try",
      message:
        "I am try out this new BBQ recipe, I think this might be amazing",
      person: "/static/images/avatar/2.jpg",
    },
    {
      name: "Yes!",
      message: "I have the tickets to the ReactConf for this year.",
      person: "/static/images/avatar/3.jpg",
    },
    {
      name: "Doctor's Appointment",
      message:
        "My appointment for the doctor was rescheduled for next Saturday.",
      person: "/static/images/avatar/4.jpg",
    },
    {
      name: "Discussion",
      message: `Menus that are generated by the bottom app bar (such as a bottom
            navigation drawer or overflow menu) open as bottom sheets at a higher elevation
            than the bar.`,
      person: "/static/images/avatar/5.jpg",
    },
    {
      name: "Summer BBQ",
      message: `Who wants to have a cookout this weekend? I just got some furniture
            for my backyard and would love to fire up the grill.`,
      person: "/static/images/avatar/1.jpg",
    },
    {
      name: "Summer BBQ",
      message: `Who wants to have a cookout this weekend? I just got some furniture
              for my backyard and would love to fire up the grill.`,
      person: "/static/images/avatar/1.jpg",
    },
    {
      name: "Summer BBQ",
      message: `Who wants to have a cookout this weekend? I just got some furniture
              for my backyard and would love to fire up the grill.`,
      person: "/static/images/avatar/1.jpg",
    },
    {
      name: "Summer BBQ",
      message: `Who wants to have a cookout this weekend? I just got some furniture
              for my backyard and would love to fire up the grill.`,
      person: "/static/images/avatar/1.jpg",
    },
    {
      name: "Summer BBQ",
      message: `Who wants to have a cookout this weekend? I just got some furniture
              for my backyard and would love to fire up the grill.`,
      person: "/static/images/avatar/1.jpg",
    },
    {
      name: "Summer BBQ",
      message: `Who wants to have a cookout this weekend? I just got some furniture
              for my backyard and would love to fire up the grill.`,
      person: "/static/images/avatar/1.jpg",
    },
    {
      name: "Summer BBQ",
      message: `Who wants to have a cookout this weekend? I just got some furniture
              for my backyard and would love to fire up the grill.`,
      person: "/static/images/avatar/1.jpg",
    },
    {
      name: "Summer BBQ",
      message: `Who wants to have a cookout this weekend? I just got some furniture
              for my backyard and would love to fire up the grill.`,
      person: "/static/images/avatar/1.jpg",
    },
    {
      name: "Summer BBQ",
      message: `Who wants to have a cookout this weekend? I just got some furniture
              for my backyard and would love to fire up the grill.`,
      person: "/static/images/avatar/1.jpg",
    },
    {
      name: "Summer BBQ",
      message: `Who wants to have a cookout this weekend? I just got some furniture
              for my backyard and would love to fire up the grill.`,
      person: "/static/images/avatar/1.jpg",
    },
    {
      name: "Summer BBQ",
      message: `Who wants to have a cookout this weekend? I just got some furniture
              for my backyard and would love to fire up the grill.`,
      person: "/static/images/avatar/1.jpg",
    },
    {
      name: "Summer BBQ",
      message: `Who wants to have a cookout this weekend? I just got some furniture
              for my backyard and would love to fire up the grill.`,
      person: "/static/images/avatar/1.jpg",
    },
  ];
  return (
    <Layout>
      <div className="flex w-screen h-screen">
        <div className="flex flex-col w-fit p-4 mt-16">
          <iframe src={link} width={800} height={500}></iframe>
          <hr />
          <div className="flex flex-row pt-8 w-full justify-between">
            <div className="flex ">
              <Avatar
                alt="Avatar"
                src="https://www.animesoulking.com/wp-content/uploads/2021/02/mushoku-tensei-740x414.jpg"
              />
              <div className="pl-4 text-sm">
                <p className="video-title text-base font-bold text-slate-50">
                  The most sensual video of all time
                </p>
                <p className="channel mt-2 text-sm text-slate-300">
                  Rias Gremory <br />
                  100K views • 2 months ago{" "}
                </p>
              </div>
            </div>
            <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-red-700 w-30 rounded h-10 w-28">
              Subscribe
            </button>
          </div>
          <div className="flex">
            <p className="channel mt-2 text-sm text-slate-300">Lorem impsum</p>
          </div>
        </div>
        <div className="flex flex-col mt-16">
          <List sx={{overflow:"auto",borderBottom:1}}>
            {messageExamples.map(({ name, message, person }, index) => (
              <ListItem key={index + person}>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={person} />
                </ListItemAvatar>
                <ListItemText primary={name} secondary={message} />
              </ListItem>
            ))}
          </List>
          <div className="flex w-full">
            <FormControl sx={{ padding: 4 , bottom:0, display:"flex"}} full >
                <InputLabel htmlFor="my-input" >Live Chat</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
          </div>
        </div>
      </div>
    </Layout>
  );
}
