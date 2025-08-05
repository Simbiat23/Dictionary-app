import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [word, setWord] = useState("");
  let [meaning, setMeaning] = useState({});
  function search(event) {
    event.preventDefault();
    // alert(word);
  }
  function handleWordChange(event) {
    setWord(event.target.value);
  }
  function displaySearch(response) {
    console.log(response.data.meanings);
    setMeaning({
      phonetic: response.data.phonetic,
      word: response.data.word,
      meaning: response.data.meanings,
    });
  }

  let apiKey = "t07aaefccae3394of62526e7dc0c0bad";
  let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
  axios.get(apiUrl).then(displaySearch);
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search a word"
          onChange={handleWordChange}
        ></input>
      </form>
    </div>
  );
}
