import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Photos.css";

export default function Photos(props) {
  let [photos, setPhotos] = useState(null);

  function displayImage(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }
  useEffect(
    function () {
      if (props.word) {
        const apiKey = "t07aaefccae3394of62526e7dc0c0bad";
        const imgApiUrl = `https://api.shecodes.io/images/v1/search?query=${props.word}&key=${apiKey}`;
        axios.get(imgApiUrl).then(displayImage);
      }
    },
    [props.word]
  );

  if (photos) {
    return (
      <div className="row">
        {photos.map(function (photo, index) {
          return (
            <div className="col-4" key={index}>
              <img
                src={photo.src.landscape}
                alt="word-image"
                className="img-fluid"
              />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
