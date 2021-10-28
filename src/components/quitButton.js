import React from "react";

function QuitButton(props) {
  return (
    <button onClick={props.quit} disabled={true}>
      QUIT
    </button>
  );
}

export default QuitButton;
