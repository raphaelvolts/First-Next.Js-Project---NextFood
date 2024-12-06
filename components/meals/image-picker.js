"use client";

import { useRef, useState } from "react";
import Image from "next/image";

import classes from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();

  const imageInput = useRef();

  function handlePickedImage(e) {
    const file = e.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  function handleImagePicker() {
    imageInput.current.click();
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name} className={classes.input}>
        {label}
      </label>
      <div className={classes.controls}>
        {pickedImage && (
          <div className={classes.preview}>
            <Image src={pickedImage} alt="Image picked by user" fill />
          </div>
        )}
        <input
          className={classes.input}
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          ref={imageInput}
          onChange={handlePickedImage}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handleImagePicker}
        >
          {label}
        </button>
      </div>
    </div>
  );
}
