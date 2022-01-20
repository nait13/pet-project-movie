import React, { useEffect, useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Link ,useNavigate } from 'react-router-dom';
import micro from '../assets/img/micro1.gif'
import preloder from '../assets/img/preloder2.gif'
import './SpeachSerch.scss'


function SpeachSearch(props) {

  const commands = [
    {
      command: 'Go movie',
      callback: () => navigate('/movies'),
      matchInterim: true
    },
  ]

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition({ commands });

  const navigate = useNavigate();



  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      alert("Ups, your browser is not supported!");
    }  
  }, [])
    
  // const { transcript } = useSpeechRecognition({ commands })
  

  console.log(transcript);
  return (
    <div className='wrapper-micro'>
      <div className='search-micro'>
        <img src={preloder} alt='preloder.gif'/>
      </div>
      {/* <h3>Распознование....</h3> */}
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <p>{transcript ? transcript : 'Распознование.....'}</p>
      <button onClick={SpeechRecognition.startListening}>Start listening</button>
      {/* &nbsp; */}
      {/* <button onClick={SpeechRecognition.stopListening}>Stop listening</button> */}
      <div className='search-micro'>
        <img src={micro} alt='micro.img'/>
      </div>    
    </div>
  );
}

export default SpeachSearch;