"use client";
import Peer from "peerjs";

export default function Home() {

  var peer = new Peer('red12hat');

  peer.on('open', function(id) {
    console.log('My peer ID is: ' + id);
    });

    peer.on("connection", (conn) => {
      conn.on("data", (data) => {
        // Will print 'hi!'
        console.log(data);
      });
      conn.on("open", () => {
        conn.send("hello!");
        console.log(conn);
      });
      conn.on('error',function(){
        console.log('error')
      })
      conn.on('iceStateChanged',()=>{console.log(conn)})
    });

  return (
    <>Connected Peers</>
  )
}
