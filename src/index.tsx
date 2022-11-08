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
    <button {...props} className="w-[200px] h-[60px] bg-red-500 text-white">
      {props.label}
    </button>
  );
};

export { CommunicationWindow, TestButton };
