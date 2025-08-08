import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div>
        <p className="syn">Synonyms:</p>
        <div className="Synonyms">
          {props.synonyms.map(function (synonym, index) {
            return (
              <button className="synonym-btn" key={index}>
                {synonym}
              </button>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;

    //     return (
    //       <div>
    //         Synonyms:
    //         <ul className="Synonyms">
    //           {props.synonyms.map(function (synonym, index) {
    //             return (
    //               <div className="row">
    //                 <div className="col-4">
    //                   <li key={index}>{synonym}</li>
    //                 </div>
    //               </div>
    //             );
    //           })}
    //         </ul>
    //       </div>
    //     );
    //   } else {
    //     return null;
  }
}
