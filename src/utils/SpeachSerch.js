import React, { useEffect, useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Link ,useNavigate } from 'react-router-dom';

function SpeachSearch() {
    const navigate = useNavigate();

    const commands = [
        {
          command: 'Go movie',
          callback: () => navigate('/movies'),
          matchInterim: true
        },
      ]
      const { transcript } = useSpeechRecognition({ commands })
  
    console.log(transcript);
    return (
      <div>
        <h3>Hello World!</h3>
        <p>{transcript ? transcript : 'Start listening for transcript'}</p>

        <button onClick={SpeechRecognition.startListening}>Start listening</button>
        &nbsp;
        <button onClick={SpeechRecognition.stopListening}>Stop listening</button>
      </div>
    );
}

export default SpeachSearch;