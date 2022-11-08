import React, { ButtonHTMLAttributes, FC } from "react";
import { Channel, ChannelList, SendBirdProvider } from "sendbird-uikit";

interface Params {
  appId: string;
  userId: string;
  nickName: string;
  accessToken: string;
  channelUrl: string;
}

const CommunicationWindow: FC<Params> = ({ ...props }): JSX.Element => {
  return (
    <SendBirdProvider
      userId={props.userId}
      appId={props.appId}
      nickname={props.nickName}
      accessToken={props.accessToken}
      colorSet={{}}
    >
      <ChannelList />
      <Channel channelUrl={props.channelUrl} />
    </SendBirdProvider>
  );
};

interface ButtonParams extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const TestButton: FC<ButtonParams> = ({ ...props }): JSX.Element => {
  return (
    <button
      {...props}
      style={{
        width: 200,
        height: 60,
        color: "magenta",
        backgroundColor: "#FFFFFF",
        border: "2px solid magenta",
        borderRadius: 9,
      }}
    >
      {props.label}
    </button>
  );
};

export { CommunicationWindow, TestButton };
