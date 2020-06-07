export interface IDebounceRipple {
    cleanup: () => void;
    duration: number;
    count: number;
}
declare const useDebounceRipple: (props: IDebounceRipple) => void;
export default useDebounceRipple;
