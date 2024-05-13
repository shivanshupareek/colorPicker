import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#004743");
  return (
    <>
      <div>
        <h1>Color Picker</h1>
      </div>
      <div className="card">
        <p className="colorImage" style={{ backgroundColor: color }}></p>
        <div>
          <p className="text">{color}</p>
        </div>
        <div>
          <label className="label"> Pick a color: </label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default ColorPicker;
