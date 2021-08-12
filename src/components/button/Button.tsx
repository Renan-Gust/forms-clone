import { ButtonHTMLAttributes } from 'react';

import './button.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <button type="submit" {...rest}>
    {children}
  </button>
)