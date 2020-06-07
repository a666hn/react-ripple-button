export interface NewProps {
    [key: string]: any;
}
export declare function declareNewProps<A extends Array<string>, C extends Object>(allowedProps: A, currentProps: C): NewProps;
