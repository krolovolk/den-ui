import clsx from "clsx";
import "./styles.css";
import { Button, ButtonProps } from "../Button";
import { ButtonGroupProps } from "./types";

export type { ButtonGroupProps };

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
