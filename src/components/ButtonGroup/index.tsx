import clsx from "clsx";
import "./styles.css";
import { Button } from "../Button";
import { ButtonGroupProps } from "./types";
import { Container } from "./styles";

export type { ButtonGroupProps };

export const ButtonGroup = ({
  className,
  buttons = [],
  ...props
}: ButtonGroupProps) => {
  return (
    <Container className={clsx("ButtonGroup", className)}>
      {buttons.map(({ label, ...buttonProps }) => (
        <Button label={label} {...buttonProps}></Button>
      ))}
    </Container>
  );
};
