import React, { useState } from "react";
import module from "../style/Colorpicker.module.css";

export default function Colorpicker() {
  // States and Data
  const [color, setColor] = useState("#e6e6ad");

  // Different Functions of the component
  const handleChange = (event) => {
    setColor(event.target.value);
  };

  // Dom Content of the Component
  return (
    <div>
      <div className={module.container}>
        <h1 className={module.header}>Color Picker</h1>
        <div
          className={module.color_display}
          style={{ backgroundColor: color }}
        >
          Color Picked: <em> {color}</em>
        </div>
        <label className={module.label}> Select a color:</label>
        <input
          type="color"
          value={color}
          className={module.color_choose}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
