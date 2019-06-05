import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Swipeable } from 'react-touch'

function showSwipe(){
  console.log("lorem got swiped")
  let synth = window.speechSynthesis;
  let voices = synth.getVoices()
  let text = new SpeechSynthesisUtterance("Swiped left")
  synth.speak(text);
}

function App() {
  return (
    <div>
      <Swipeable onSwipeLeft={showSwipe}>
        <div className="swipe"> lorem ipsum doler motor </div>
      </Swipeable>
    </div>
  );
}

export default App;
