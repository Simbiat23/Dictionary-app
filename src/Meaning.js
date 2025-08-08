import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  //   console.log(props.meaning);
  return (
    <div>
      <h3 className="pos">{props.meaning.partOfSpeech}</h3>
      <p className="def">
        {" "}
        <strong>Definition: </strong>
        {props.meaning.definition}
        <br />
        <strong>Example: </strong>
        <em className="example">{props.meaning.example}</em>
        <br />
      </p>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
