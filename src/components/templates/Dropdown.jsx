import React from "react";

function Dropdown({ title, option }) {
  return (
    <div className="flex items-center justify-center gap-8 ">
      <label htmlFor="dropdown-select"></label>

      <select
        name="dropdown"
        id="dropdown-select"
        className="bg-zinc-700 text-white px-5 py-2 rounded-md outline-none "
      >
        {/* <option value="" className="bg-zinc-500 text-white">
          {title}
        </option> */}
        {option &&
          option.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
      </select>
    </div>
  );
}

export default Dropdown;
