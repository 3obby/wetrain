"use client";
import Peer from "peerjs";

export default function Home() {

  var peer = new Peer('blueheron34');

  peer.on('open', function(id) {
    console.log('My peer ID is: ' + id);
    });

    var conn = peer.connect('red12hat');

    console.log(conn);

    conn.on('open',function(){
      console.log('connected...')
    })

    conn.on('error',function(){
      console.log('error...')
    })

  return (
    <>Client</>
  )
}
