import React, { use, useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [word, setWord] = useState("");
  let [results, setResults] = useState(null);

  function displaySearch(response) {
    setResults(response.data);
    //   phonetic: response.data.phonetic,
    //   word: response.data.word,
    //   meaning: response.data.meanings[0].definition,
    //   type: response.data.meaning[0].partOfSpeech,
  }

  function search(event) {
    event.preventDefault();
    if (!word.trim()) return;
    // alert(word);
    let apiKey = "t07aaefccae3394of62526e7dc0c0bad";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    axios.get(apiUrl).then(displaySearch);
  }
  function handleWordChange(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary theme">
      <section>
        {" "}
        <h1>📙 A Court of Words</h1>
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Whisper a word into the night..."
            onChange={handleWordChange}
          ></input>
          <button className="form-btn" type="submit">
            Reveal
          </button>
        </form>
        <br />
      </section>
      <section>
        {" "}
        <Results results={results} />
      </section>
    </div>
  );
}
