import React from 'react';
export interface IButtonRippleEffect {
    [key: string]: any;
    label?: string;
    withRadius?: boolean;
    block?: boolean;
}
export declare type PropsObject = {
    [key: string]: string;
};
declare const Button: (props: IButtonRippleEffect & React.HTMLProps<HTMLButtonElement>) => JSX.Element;
export default Button;
