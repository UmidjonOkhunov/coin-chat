import React, { useStates } from "react";
// import { Box } from "@mui/material";
import "./Compose.css";

export default function Compose(props) {
  // const [text, setText] = useStates("");
  // const handleSubmit = () => {
  //   console.log("submit");
  // };
  return (
    <div className="compose">
      {/* <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ width: "100%" }}
      > */}
      <input
        type="text"
        className="compose-input"
        placeholder="Type a message, @name"
        // onSubmit={handleSubmit}
      />

      {props.rightItems}
      {/* </Box> */}
    </div>
  );
}
