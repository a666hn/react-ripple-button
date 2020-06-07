/// <reference types="react" />
import './button.style.scss';
interface IButtonRippleEffect {
    withRadius?: boolean;
}
declare const Button: (props: IButtonRippleEffect) => JSX.Element;
export default Button;
