import React from 'react';
export interface IShouldRender {
    renderIf?: boolean;
    children?: React.ReactNode;
}
declare const ShouldRender: (props: IShouldRender) => any;
export default ShouldRender;
