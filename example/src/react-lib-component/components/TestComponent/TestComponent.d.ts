import React from 'react';
export interface ITestComponent {
    message?: string;
}
declare const TestComponent: (props: ITestComponent & React.HTMLProps<HTMLDivElement>) => JSX.Element;
export default TestComponent;
