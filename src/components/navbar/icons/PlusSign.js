import React from "react";

function PlusSign(props) {
  return (
    <svg className={props.className} fill={props.fill} viewBox="0 0 24 24">
      <path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z" />
    </svg>
  );
}

export default PlusSign;
