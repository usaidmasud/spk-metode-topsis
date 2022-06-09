import React from "react";
import { FiToggleLeft, FiToggleRight } from "react-icons/fi";

interface Props {
  value: boolean;
}
const RenderStatus: React.FC<Props> = ({ value }) => {
  return (
    <span className={`text-2xl ${value ? "text-green-600" : "text-red-600"}`}>
      {value ? <FiToggleRight /> : <FiToggleLeft />}
    </span>
  );
};

export default RenderStatus;
