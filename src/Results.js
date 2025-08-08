import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    console.log(props.results);
    return (
      <div className="Results">
        <section>
          {" "}
          <h2 className="word-title">{props.results.word}</h2>
          <Phonetics word={props.results.word} />
        </section>{" "}
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              {" "}
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
