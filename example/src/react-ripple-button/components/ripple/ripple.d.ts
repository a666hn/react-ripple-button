import React from 'react';
import './ripple.scss';
declare const defaultProps: {
    duration: number;
};
export declare type RippleType = {
    duration?: number;
    rippleColor?: string;
} & typeof defaultProps;
export declare type RippleClientType = {
    pageX?: number;
    pageY?: number;
    size?: number;
}[];
declare const Ripple: {
    (props: {
        duration?: number | undefined;
        rippleColor?: string | undefined;
    } & {
        duration: number;
    } & React.HTMLProps<HTMLDivElement>): JSX.Element;
    defaultProps: {
        duration: number;
    };
};
export default Ripple;
