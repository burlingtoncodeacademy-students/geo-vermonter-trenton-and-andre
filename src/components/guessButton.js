import React from "react";

function guessButton(props) {
  return (
    <button onClick={props.guess} disabled={true}>
      GUESS
    </button>
  );
}

export default guessButton;
