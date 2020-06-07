/* eslint-disable */
function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

import React, { useLayoutEffect, useState } from 'react';
import classNames from 'classnames';

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

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var useDebounceRipple = function (props) {
    var count = props.count, duration = props.duration, cleanup = props.cleanup;
    useLayoutEffect(function () {
        var debounce = null;
        if (count > 0) {
            clearTimeout(debounce);
            debounce = setTimeout(function () {
                cleanup();
                clearTimeout(debounce);
            }, duration * 4);
        }
        return function () { return clearTimeout(debounce); };
    }, [props]);
};

function declareNewProps(allowedProps, currentProps) {
    var newProps = {};
    for (var item in currentProps) {
        if (allowedProps.indexOf(item) < 0) {
            newProps[item] = currentProps[item];
        }
    }
    return newProps;
}

___$insertStyle("@keyframes ripple-animated {\n  to {\n    opacity: 0;\n    transform: scale(2);\n  }\n}\n.btn {\n  outline: none;\n  border: none;\n  position: relative;\n  cursor: pointer;\n  padding: 7px 12px;\n  background-color: maroon;\n}\n.btn.btn-radius {\n  border-radius: 3px;\n}\n.btn .btn-label {\n  font-weight: 500;\n}\n.btn .ripple-container {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.btn .ripple-container .in-ripple-animated {\n  border-radius: 100%;\n  transform: scale(0);\n  opacity: 0.65;\n  position: absolute;\n  background-color: #ffffff;\n  animation-name: ripple-animated;\n  animation-duration: 750ms;\n}");

var customProps = [
    'rippleDuration',
    'label',
    'withRadius',
    'block',
    'disabled',
    'variant',
    'className'
];
var Button = function (props) {
    var _a;
    var _b = useState([]), ripples = _b[0], set = _b[1];
    var rippleDuration = props.rippleDuration, label = props.label, withRadius = props.withRadius, block = props.block, disabled = props.disabled, variant = props.variant, className = props.className; // eslint-disable-line
    var restProps = declareNewProps(customProps, props);
    var cleanupRipple = function () { return set([]); };
    useDebounceRipple({ count: ripples.length, duration: rippleDuration || 750, cleanup: cleanupRipple });
    var buttonContainer = classNames('btn', (_a = {
            'btn-radius': withRadius
        },
        _a["btn-" + variant] = variant,
        _a), className);
    function buildEffectRipple(event) {
        var x = event.pageX;
        var y = event.pageY;
        var currentTarget = event.currentTarget;
        var rippleElement = currentTarget.getBoundingClientRect();
        var size = rippleElement.width > rippleElement.height
            ? rippleElement.width
            : rippleElement.height;
        var pageX = x - rippleElement.x - size / 2;
        var pageY = y - rippleElement.y - size / 2;
        var newRipple = { size: size, pageX: pageX, pageY: pageY };
        set(function (prevState) { return __spreadArrays(prevState, [newRipple]); });
    }
    return (React.createElement("button", __assign({ className: buttonContainer }, restProps),
        (!!label || !!props.children) && (React.createElement("span", null, label || props.children)),
        !disabled && (React.createElement("div", { className: "ripple-container", onMouseDown: buildEffectRipple }, ripples.length > 0 && ripples.map(function (item, index) { return (React.createElement("span", { key: index, id: "ripple-effect-id-" + index, className: "in-ripple-animated", style: {
                top: item.pageY,
                left: item.pageX,
                height: item.size,
                width: item.size,
                animationDuration: rippleDuration + "ms"
            } })); })))));
};

var ButtonIcon = function () { return React.createElement("div", null, "Button Icon"); };

export { Button, ButtonIcon };
