import React from "react";

export default function MySelect({ options, defaultValue, value, onChange }) {
  return (
    <div>
      <hr />
      <select
        name="posts"
        id="posts"
        style={{ margin: "15px 5px" }}
        // value={value}
        onChange={(e) => onChange(e.target.value)}
        defaultValue={defaultValue}
      >
        <option
          disabled
          value={defaultValue}
        >
          {defaultValue}
        </option>
        {options.map((item) => {
          return (
            <option
              value={item.value}
              key={item.value}
            >
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
