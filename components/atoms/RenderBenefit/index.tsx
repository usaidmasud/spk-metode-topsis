import React from "react";
import { FiPlus } from "react-icons/fi";
import { toTitleCase } from "../../../config/traits";
import { TCriteriaType } from "../../../utils/interfaces";

interface Props {
  type: TCriteriaType;
}
const RenderBenefit: React.FC<Props> = ({ type }) => {
  return (
    <div className="inline-flex items-center gap-1 text-gray-700">
      <div className={`p-[2px] rounded-full border border-gray-300 bg-gray-200 ${type === 'benefit' ? " text-green-600" : " text-red-600"}`}>
        <FiPlus className={`text-sm`} />
      </div>
      <span className="text-sm">{toTitleCase(type)}</span>
    </div>
  );
};

export default RenderBenefit;
