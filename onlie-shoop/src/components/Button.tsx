import { ComponentProps } from "react";

type Button = ComponentProps <Button>;

function Button({ children , ...rest }: Button) {
  return <button {...rest}>{children}</button>
}

export default Button;
