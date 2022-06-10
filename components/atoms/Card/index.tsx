import React from "react";

interface Props {
  title?: string;
  children: React.ReactNode;
  bordered?: boolean;
}
const Card: React.FC<Props> = ({ title, children, bordered }) => {
  return (
    <div
      className={`${
        bordered ? "border border-gray-300 p-4 shadow-sm rounded-md" : ""
      } `}
    >
      {title && (
        <h5 className="text-xl font-semibold mb-4 border-b pb-2 border-gray-300">
          {title}
        </h5>
      )}
      <div className="">{children}</div>
    </div>
  );
};

export default Card;
