import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Phonetics(props) {
  const [audio, setAudio] = useState(null);
  const [text, setText] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setAudio(response.data[0].phonetics[0].audio);
    setText(response.data[0].phonetics[0].text);
  }

  useEffect(
    function () {
      if (props.word) {
        const audioApiuRL = `https://api.dictionaryapi.dev/api/v2/entries/en/${props.word}`;
        axios.get(audioApiuRL).then(handleResponse);
      }
    },
    [props.word]
  );

  function playAudio() {
    let sound = new Audio(audio);
    sound.play();
  }

  if (audio) {
    return (
      <div className="Phonetics">
        <p className="phonetic">{text}</p>
        <button onClick={playAudio}>
          <img
            src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/50/000000/external-speaker-ux-and-ui-flatart-icons-lineal-color-flatarticons.png"
            alt="speakers"
          ></img>
          {/* audio not supported */}
        </button>
      </div>
    );
  } else {
    return null;
  }
}
