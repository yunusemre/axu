import React from "react";

const Languages = languages => {
  return (
    <select>
      {languages.map(res => (
        <option key={res} value={res}>
          {res}
        </option>
      ))}
    </select>
  );
};

export default Languages;
