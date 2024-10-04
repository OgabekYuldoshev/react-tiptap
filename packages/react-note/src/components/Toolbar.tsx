import type React from "react";
import type { PropsWithChildren } from "react";

interface ToolbarProps extends PropsWithChildren {}

const Toolbar: React.FC<ToolbarProps> = ({ children }) => {
  return (
    <div className="rn-w-full rn-inline-flex rn-border-b rn-px-4 rn-py-2">
      {children}
    </div>
  );
};

Toolbar.displayName = "ReactNoteToolbar";

export default Toolbar;
