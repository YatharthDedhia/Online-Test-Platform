import React, { Component } from 'react';
import { Player } from 'video-react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import video from '../../Images/s.mp4'
import './css/opening2.css'
import { Helmet } from 'react-helmet';
// const { player } = Player.getState();
// console.log(player.currentTime); // print current time
class Opening2 extends React.Component {
  componentDidMount = () => {
    this.playVideo();
  };

  componentWillUnmount = () => {
    this.pauseVideo();
  };


  playVideo = () => {
    // You can use the play method as normal on your video ref
    this.refs.vidRef.play();
  };

  pauseVideo = () => {
    // Pause as well
    this.refs.vidRef.pause();
  };
  render = () => {
    return (
      <div className='backg'>
        <meta http-equiv="refresh" content="10; url = /landing" />
        <div className="videoc">
          <video width="800" height="600" autoplay loop
            ref="vidRef"
            src={video}
            type="video/mp4"
          />
        </div>
      </div>
    );
  };
}
export default Opening2;