import React, { Component } from 'react';
import { Player } from 'video-react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import video from'../../Images/s.mp4'
import './css/opening2.css'
const { player } = this.player.getState();
console.log(player.currentTime); // print current time

const Opening2 = () => {
    return (
      <div>
        <Player ref={(player) => { this.player = player }}>
  <source src={video}/>
</Player>
<h1 className="hello">Hello World</h1>
<h1 className="hello">Hello World</h1>
<h1 className="hello">Hello World</h1>
<h1 className="hello">Hello World</h1>
<h1 className="hello">Hello World</h1>
        </div>
    );
  }
  export default Opening2;