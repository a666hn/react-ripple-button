import React from 'react';
import { IRippleButton } from './button.type';
import './button.scss';
declare const Button: (props: IRippleButton & React.HTMLProps<HTMLButtonElement>) => JSX.Element;
export default Button;
