import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

import { Bold } from "lucide-react";
import { useNote } from "../context";
import { cn } from "../lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  active?: boolean;
}

const ActionButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, active = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          "rn-inline-flex rn-items-center rn-justify-center rn-whitespace-nowrap rn-rounded-md rn-text-sm rn-font-medium rn-transition-colors rn-focus-visible:outline-none rn-focus-visible:ring-1 rn-focus-visible:ring-ring rn-disabled:pointer-events-none rn-disabled:opacity-50 rn-h-9 rn-w-9 rn-hover:bg-accent rn-hover:text-accent-foreground",
          active && "rn-text-accent-foreground rn-bg-accent",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

ActionButton.displayName = "Button";

interface CreateActioProps {
  label: string;
  active?: { name: string; attributes?: Record<string, any> | string };
  isDisabled?: (editor: any) => boolean;
  operation: { name: string; attributes?: Record<string, any> | string };
}
export function createAction({
  label,
  active,
  operation,
  isDisabled,
}: CreateActioProps) {
  const Action = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (props, ref) => {
      const { editor } = useNote();
      return (
        <ActionButton
          {...props}
          ref={ref}
          aria-label={label}
          title={label}
          active={
            active?.name
              ? editor?.isActive(active.name, active.attributes)
              : false
          }
          onClick={() =>
            (editor as any)
              ?.chain()
              .focus()
              [operation.name](operation.attributes)
              .run()
          }
          disabled={isDisabled?.(editor) || false}
        >
          <Bold />
        </ActionButton>
      );
    }
  );

  Action.displayName = `Action${label}`;

  return Action;
}

export default ActionButton;
