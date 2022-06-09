import React from "react";
import { FiCheck, FiMinus } from "react-icons/fi";

interface Props {
  value: boolean;
}
const RenderStatus: React.FC<Props> = ({ value }) => {
  return (
    <div
      className={`inline-flex h-6 items-center border ${
        value ? "border-green-500" : "border-red-500"
      }  rounded-sm`}
    >
      <div
        className={`flex justify-center items-center h-6 w-6 text-gray-100 ${
          value ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {value ? <FiCheck /> : <FiMinus />}
      </div>
      <span className={`mx-2 text-sm ${value ? "text-green-500" : "text-red-500"}`}>{value ? "Active" : "In Active"}</span>
    </div>
  );
};

export default RenderStatus;
