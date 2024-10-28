import { ComponentProps } from "react";

type Variant = 'primary' | 'secondary' | 'danger' | 'warning' | 'success';

type Button = ComponentProps <'button'> & {
    variant?: Variant;
}

function Button({ children , variant, style ,...rest }: Button) {

  return <button {...rest} style={{borderRadius:'.5rem', ...style, ...checkVariant(variant)}}>{children}</button>
}

export default Button;

function checkVariant(variant?: Variant) {

    if (variant === 'primary') {
      return {backgroundColor: 'blue',color: 'white',};
    } else if (variant === 'secondary') {
      return {backgroundColor: 'gray',color: 'white',};
    } else if (variant === 'danger') {
      return {backgroundColor: 'red',color: 'white',};
    } else if (variant === 'warning') {
      return {backgroundColor: 'orange',color: 'white',};
    } else if (variant === 'success') {
      return {backgroundColor: 'green',color: 'white',};
    } else {
      return {backgroundColor: 'blue',color: 'white',};
    }
}
    