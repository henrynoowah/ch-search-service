var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import { Channel, ChannelList, SendBirdProvider } from "sendbird-uikit";
var CommunicationWindow = function (_a) {
    var props = __rest(_a, []);
    return (React.createElement(SendBirdProvider, { userId: props.userId, appId: props.appId, nickname: props.nickName, accessToken: props.accessToken, colorSet: {} },
        React.createElement(ChannelList, null),
        React.createElement(Channel, { channelUrl: props.channelUrl })));
};
var TestButton = function (_a) {
    var props = __rest(_a, []);
    return (React.createElement("button", __assign({}, props, { style: {
            width: 200,
            height: 60,
            color: "magenta",
            backgroundColor: "#FFFFFF",
            border: "2px solid magenta",
            borderRadius: 9,
        } }), props.label));
};
export { CommunicationWindow, TestButton };
