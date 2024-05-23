import React from "react";
import "./input.css";
export default function FormInput({ placeholderText, labelText }) {
  return (
    <>
      <label className="label">{labelText}</label>
      <input className="input" placeholder={placeholderText} />
    </>
  );
}
