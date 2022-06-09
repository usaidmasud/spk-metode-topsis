import React from "react";

const RenderButtonAction = () => {
  return (
    <div className="flex gap-1">
      <button className="bg-green-600 text-sm bg-opacity-80 hover:bg-opacity-100 text-white py-1 px-2 rounded">
        Edit
      </button>
      <button className="bg-red-600 text-sm bg-opacity-80 hover:bg-opacity-100 text-white py-1 px-2 rounded">
        Delete
      </button>
    </div>
  );
};

export default RenderButtonAction;
