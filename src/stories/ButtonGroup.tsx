import clsx from "clsx";
import { Button, ButtonProps } from "./Button";
import "./buttonGroup.css";

interface ButtonGroupProps {
  className?: string;
  buttons: ButtonProps[];
}

export const ButtonGroup = ({
  className,
  buttons = [],
  ...props
}: ButtonGroupProps) => {
  return (
    <div className={clsx("ButtonGroup", className)}>
      {buttons.map((button: ButtonProps) => (
        <Button label={button.label}></Button>
      ))}
    </div>
  );
};
