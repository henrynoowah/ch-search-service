import React, { FC } from "react";
import { SendBirdProvider, ChannelList, Channel } from "sendbird-uikit";

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

export { CommunicationWindow };
