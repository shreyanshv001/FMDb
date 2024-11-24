import React from "react";

function Dropdown({ title, option, func }) {
  return (
    <div className="select  ">
      <select
        defaultValue="0"
        onChange={func}
        name="format"
        id="format"
        className="bg-zinc-700 w-[10rem] ml-5 px-4 py-2 rounded-lg"
      >
        <option value="0" disabled>
          {title}
        </option>
        {option.map((o, i) => (
          <option key={i} value={o}>
            {o.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
