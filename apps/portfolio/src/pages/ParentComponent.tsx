// ParentComponent.js
import React, { ReactNode, useState } from "react";
import PixiComponent from "./PixiComponent";

interface ParentComponentProps {
  children: ReactNode;
}

const ParentComponent = (props: ParentComponentProps) => {
  const { children } = props;
  const [showPixi, setShowPixi] = useState(true);

  const handleTogglePixi = () => {
    setShowPixi(!showPixi);
  };

  return (
    <div>
      <button onClick={handleTogglePixi}>Toggle Pixi</button>
      {showPixi && <>{children}</>}
    </div>
  );
};

export default ParentComponent;
