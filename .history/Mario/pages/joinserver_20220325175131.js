import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import { color } from "@mui/system";
import Link from "next/link";

//ngrok kelly
//ngrok authtoken 26Uzdo9S9C6KlJmma4J1Vu3ntoX_3aXoRtujUeRK4zGvPurcz

// to connect
//http://3d0e-2604-3d08-4a85-d700-9cac-5070-b3ab-1046.ngrok.io

export default function Sockets() {
  const [mySoc, setMySoc] = useState(null);
  const [msgs, setMsgs] = useState([]);

  const [mousePos, setMousePos] = useState({
    left:0,
    top:0
  })

  const [users, setUsers] = useState({});

  const [inputPin, setInputPin] = useState("");

  useEffect(()=>{
    // const socket = io("ws://example.com/my-namespace", {
    //   reconnectionDelayMax: 10000,
    //   auth: {
    //     token: "123"
    //   },
    //   query: {
    //     "my-key": "my-value"
    //   }
    // });
    
    const socket = io(`http://localhost:8888`);

    socket.on("user_connected", (users)=>{
      setUsers(users);
      })

    socket.on("change", (id)=>{
      // alert(`${id} has connected`)

      //messages
      setMsgs((prev)=>[
        ...prev,
        `${id} has joined the server`
      ])
    });

    socket.on("update_mouse", (x, y, id)=>{
      // setMousePos({
      //   left:x,
      //   top:y
      // })
      setUsers((prev)=>({
        ...prev,
        [id]:{left:x, top:y}
      }))
    })

    setMySoc(socket)
  }, [])

  const SendToIO = async () => {
    mySoc.emit("alert_all", inputPin)
  }

  const MouseMoveUpdate = async (x, y) => {
    mySoc.emit("mouse_moved", x, y)
  }
  
  const colors = ["green", "yellow", "blue", "red", "purple"]
  return (
    <div onMouseMove={(e)=>MouseMoveUpdate(e.clientX, e.clientY)}>

      <input type='text' onChange={(e)=>setInputPin(e.target.value)}/>
      <button onClick={SendToIO}>Join</button>
      {msgs.map((o,i)=><div style={{background:"red", padding:10}}>
        {o}
        </div>)}
      <Link href="/body">
      <button>Start</button>
      </Link>
    </div>
  )
}
