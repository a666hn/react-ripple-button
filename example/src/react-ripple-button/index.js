/* eslint-disable */
import React from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function declareNewProps(allowedProps, currentProps) {
    var newProps = {};
    for (var item in currentProps) {
        if (allowedProps.indexOf(item) < 0)
            newProps[item] = currentProps[item];
    }
    return newProps;
}

var Button = function (props) {
    var customProps = ['label', 'withRadius', 'block']; // eslint-disable-line
    var newProps = declareNewProps(customProps, props);
    return React.createElement("button", __assign({}, newProps), props.label || props.children);
};

var ButtonIcon = function () { return React.createElement("div", null, "Button Icon"); };

export { Button, ButtonIcon };
