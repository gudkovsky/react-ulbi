import React, { useState } from "react";

export default function Input() {
  const [value, setValue] = useState("state");

  return (
    <input
      onChange={(e) => setValue(e.target.value)}
      value={value}
    ></input>
  );
}
