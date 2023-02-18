import { useEffect, useState } from "react";
import Web3 from "web3";
const apiUrl = "https://livepeer.studio/api/asset";
const apiKey = "e6a35ac2-f26b-474a-a390-33bcd8af05c6";

const contractAddress = 0xb8a54a3793d0093b479a8e7ceff1043af06f27c0;

export default function ApiTest() {
  const [account, setAccount] = useState("");
  useEffect(() => {
    const web3 = new Web3(Web3.givenProvider);
    console.log(process.env.REACT_APP_LIVEPEER_API_KEY);
    web3.eth.requestAccounts().then((accounts) => {
      console.log(accounts);
      let headers = new Headers();
      headers.append("Content-Type", "application/json");
      headers.append("Accept", "application/json");
      headers.append("Authorization", `Bearer ${process.env.REACT_APP_LIVEPEER_API_KEY}`);
      fetch(apiUrl, {
        mode: "cors",
        method: "GET",
        headers: headers,
      })
        .then((resp) => resp.json())
        .then((data) => {
          data.forEach((dat) => {
            let id = dat.id;
            let name = dat.name;
            let description =
              "This hit that ice cold Michelle Pffefier that white gold";
            let catgory = "Some category";
            let createdAt = String(dat.createdAt);
            let author = dat.userId;
            console.log(dat);
          });
        });
    });
  }, []);

  return <div></div>;
}
