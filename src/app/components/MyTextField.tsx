import React from "react";

const FileInput = ({ onChange }:any) => {
  const handleChange = (event:any) => {
    const files = event.target.files;
    if (files.length > 0 && files[0].name.endsWith(".txt")) {
      onChange(files[0]);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
    </div>
  );
};

export default FileInput;