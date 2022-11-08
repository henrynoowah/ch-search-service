import { FC } from "react";
interface Params {
    appId: string;
    userId: string;
    nickName: string;
    accessToken: string;
    channelUrl: string;
}
declare const CommunicationWindow: FC<Params>;
export { CommunicationWindow };
