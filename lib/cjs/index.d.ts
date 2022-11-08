import { ButtonHTMLAttributes, FC } from "react";
interface Params {
    appId: string;
    userId: string;
    nickName: string;
    accessToken: string;
    channelUrl: string;
}
declare const CommunicationWindow: FC<Params>;
interface ButtonParams extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
}
declare const TestButton: FC<ButtonParams>;
export { CommunicationWindow, TestButton };
