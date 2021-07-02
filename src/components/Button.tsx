import { ButtonHTMLAttributes } from 'react';

import { ButtonStyle } from '../styles/button';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
  return (
    <ButtonStyle {...props}/>
  )
}