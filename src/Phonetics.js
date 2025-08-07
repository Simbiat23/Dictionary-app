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

  if (audio) {
    return (
      <div className="Phonetics">
        <audio controls src={audio}>
          audio not supported
        </audio>

        <p>{text}</p>
      </div>
    );
  } else {
    return null;
  }
}
