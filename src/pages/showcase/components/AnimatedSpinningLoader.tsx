import { css } from "@emotion/react";
import styled from "@emotion/styled";
import type { FC } from "react";

const baseCss = css`
  & line {
    transform-origin: center center;
    transform-box: fill-box;
  }
`;

type TRootStyled = {
  sizeCss?: any;
};
const Root = styled.svg<TRootStyled>`
  ${baseCss}
  ${({ sizeCss }) => sizeCss}
`;

type TProps = TRootStyled;
export const AnimatedSpinningLoader: FC<TProps> = ({ sizeCss }) => (
  <Root
    sizeCss={sizeCss}
    width="224"
    height="224"
    viewBox="0 0 750 750"
  >
    <line
      x1="0"
      y1="0"
      x2="400"
      y2="0"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="300"
      transform="translate(363.83557568774194,617.7050983124842) rotate(-36) scale(0.1)"
    >
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="scale"
        additive="sum"
        values="1.6;1.7236067977499792;1.8351141009169893;1.9236067977499791;1.9804226065180615;2;1.9804226065180615;1.9236067977499791;1.8351141009169893;1.7236067977499792;1.6"
        keyTimes="0;0.1;0.2;0.3;0.4;0.5;0.6;0.7;0.8;0.9;1"
        dur="1s"
        repeatCount="indefinite"
        begin="0.10s"
      ></animateTransform>
      <animate
        attributeName="opacity"
        values="0.25;0.4045084971874737;0.5438926261462366;0.6545084971874737;0.7255282581475768;0.75;0.7255282581475768;0.6545084971874737;0.5438926261462367;0.4045084971874737;0.25000000000000006"
        keyTimes="0;0.1;0.2;0.3;0.4;0.5;0.6;0.7;0.8;0.9;1"
        dur="1s"
        repeatCount="indefinite"
        begin="0.10s"
      ></animate>
    </line>
    <line
      x1="0"
      y1="0"
      x2="400"
      y2="0"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="300"
      transform="translate(472.81695488854604,467.7050983124842) rotate(-72) scale(0.1)"
    >
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="scale"
        additive="sum"
        values="1.6;1.7236067977499792;1.8351141009169893;1.9236067977499791;1.9804226065180615;2;1.9804226065180615;1.9236067977499791;1.8351141009169893;1.7236067977499792;1.6"
        keyTimes="0;0.1;0.2;0.3;0.4;0.5;0.6;0.7;0.8;0.9;1"
        dur="1s"
        repeatCount="indefinite"
        begin="0.9s"
      ></animateTransform>
      <animate
        attributeName="opacity"
        values="0.25;0.4045084971874737;0.5438926261462366;0.6545084971874737;0.7255282581475768;0.75;0.7255282581475768;0.6545084971874737;0.5438926261462367;0.4045084971874737;0.25000000000000006"
        keyTimes="0;0.1;0.2;0.3;0.4;0.5;0.6;0.7;0.8;0.9;1"
        dur="1s"
        repeatCount="indefinite"
        begin="0.9s"
      ></animate>
    </line>
    <line
      x1="0"
      y1="0"
      x2="400"
      y2="0"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="300"
      transform="translate(472.8169548885461,282.2949016875158) rotate(-108) scale(0.1)"
    >
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="scale"
        additive="sum"
        values="1.6;1.7236067977499792;1.8351141009169893;1.9236067977499791;1.9804226065180615;2;1.9804226065180615;1.9236067977499791;1.8351141009169893;1.7236067977499792;1.6"
        keyTimes="0;0.1;0.2;0.3;0.4;0.5;0.6;0.7;0.8;0.9;1"
        dur="1s"
        repeatCount="indefinite"
        begin="0.8s"
      ></animateTransform>
      <animate
        attributeName="opacity"
        values="0.25;0.4045084971874737;0.5438926261462366;0.6545084971874737;0.7255282581475768;0.75;0.7255282581475768;0.6545084971874737;0.5438926261462367;0.4045084971874737;0.25000000000000006"
        keyTimes="0;0.1;0.2;0.3;0.4;0.5;0.6;0.7;0.8;0.9;1"
        dur="1s"
        repeatCount="indefinite"
        begin="0.8s"
      ></animate>
    </line>
    <line
      x1="0"
      y1="0"
      x2="400"
      y2="0"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="300"
      transform="translate(363.835575687742,132.2949016875158) rotate(-144) scale(0.1)"
    >
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="scale"
        additive="sum"
        values="1.6;1.7236067977499792;1.8351141009169893;1.9236067977499791;1.9804226065180615;2;1.9804226065180615;1.9236067977499791;1.8351141009169893;1.7236067977499792;1.6"
        keyTimes="0;0.1;0.2;0.3;0.4;0.5;0.6;0.7;0.8;0.9;1"
        dur="1s"
        repeatCount="indefinite"
        begin="0.7s"
      ></animateTransform>
      <animate
        attributeName="opacity"
        values="0.25;0.4045084971874737;0.5438926261462366;0.6545084971874737;0.7255282581475768;0.75;0.7255282581475768;0.6545084971874737;0.5438926261462367;0.4045084971874737;0.25000000000000006"
        keyTimes="0;0.1;0.2;0.3;0.4;0.5;0.6;0.7;0.8;0.9;1"
        dur="1s"
        repeatCount="indefinite"
        begin="0.7s"
      ></animate>
    </line>
    <line
      x1="0"
      y1="0"
      x2="400"
      y2="0"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="300"
      transform="translate(187.50000000000003,75) rotate(-180) scale(0.1)"
    >
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="scale"
        additive="sum"
        values="1.6;1.7236067977499792;1.8351141009169893;1.9236067977499791;1.9804226065180615;2;1.9804226065180615;1.9236067977499791;1.8351141009169893;1.7236067977499792;1.6"
        keyTimes="0;0.1;0.2;0.3;0.4;0.5;0.6;0.7;0.8;0.9;1"
        dur="1s"
        repeatCount="indefinite"
        begin="0.6s"
      ></animateTransform>
      <animate
        attributeName="opacity"
        values="0.25;0.4045084971874737;0.5438926261462366;0.6545084971874737;0.7255282581475768;0.75;0.7255282581475768;0.6545084971874737;0.5438926261462367;0.4045084971874737;0.25000000000000006"
        keyTimes="0;0.1;0.2;0.3;0.4;0.5;0.6;0.7;0.8;0.9;1"
        dur="1s"
        repeatCount="indefinite"
        begin="0.6s"
      ></animate>
    </line>
    <line
      x1="0"
      y1="0"
      x2="400"
      y2="0"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="300"
      transform="translate(11.164424312258092,132.29490168751576) rotate(-216) scale(0.1)"
    >
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="scale"
        additive="sum"
        values="1.6;1.7236067977499792;1.8351141009169893;1.9236067977499791;1.9804226065180615;2;1.9804226065180615;1.9236067977499791;1.8351141009169893;1.7236067977499792;1.6"
        keyTimes="0;0.1;0.2;0.3;0.4;0.5;0.6;0.7;0.8;0.9;1"
        dur="1s"
        repeatCount="indefinite"
        begin="0.5s"
      ></animateTransform>
      <animate
        attributeName="opacity"
        values="0.25;0.4045084971874737;0.5438926261462366;0.6545084971874737;0.7255282581475768;0.75;0.7255282581475768;0.6545084971874737;0.5438926261462367;0.4045084971874737;0.25000000000000006"
        keyTimes="0;0.1;0.2;0.3;0.4;0.5;0.6;0.7;0.8;0.9;1"
        dur="1s"
        repeatCount="indefinite"
        begin="0.5s"
      ></animate>
    </line>
    <line
      x1="0"
      y1="0"
      x2="400"
      y2="0"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="300"
      transform="translate(-97.81695488854604,282.29490168751573) rotate(-251.99999999999997) scale(0.1)"
    >
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="scale"
        additive="sum"
        values="1.6;1.7236067977499792;1.8351141009169893;1.9236067977499791;1.9804226065180615;2;1.9804226065180615;1.9236067977499791;1.8351141009169893;1.7236067977499792;1.6"
        keyTimes="0;0.1;0.2;0.3;0.4;0.5;0.6;0.7;0.8;0.9;1"
        dur="1s"
        repeatCount="indefinite"
        begin="0.4s"
      ></animateTransform>
      <animate
        attributeName="opacity"
        values="0.25;0.4045084971874737;0.5438926261462366;0.6545084971874737;0.7255282581475768;0.75;0.7255282581475768;0.6545084971874737;0.5438926261462367;0.4045084971874737;0.25000000000000006"
        keyTimes="0;0.1;0.2;0.3;0.4;0.5;0.6;0.7;0.8;0.9;1"
        dur="1s"
        repeatCount="indefinite"
        begin="0.4s"
      ></animate>
    </line>
    <line
      x1="0"
      y1="0"
      x2="400"
      y2="0"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="300"
      transform="translate(-97.81695488854609,467.70509831248415) rotate(-288) scale(0.1)"
    >
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="scale"
        additive="sum"
        values="1.6;1.7236067977499792;1.8351141009169893;1.9236067977499791;1.9804226065180615;2;1.9804226065180615;1.9236067977499791;1.8351141009169893;1.7236067977499792;1.6"
        keyTimes="0;0.1;0.2;0.3;0.4;0.5;0.6;0.7;0.8;0.9;1"
        dur="1s"
        repeatCount="indefinite"
        begin="0.3s"
      ></animateTransform>
      <animate
        attributeName="opacity"
        values="0.25;0.4045084971874737;0.5438926261462366;0.6545084971874737;0.7255282581475768;0.75;0.7255282581475768;0.6545084971874737;0.5438926261462367;0.4045084971874737;0.25000000000000006"
        keyTimes="0;0.1;0.2;0.3;0.4;0.5;0.6;0.7;0.8;0.9;1"
        dur="1s"
        repeatCount="indefinite"
        begin="0.3s"
      ></animate>
    </line>
    <line
      x1="0"
      y1="0"
      x2="400"
      y2="0"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="300"
      transform="translate(11.164424312258006,617.7050983124842) rotate(-324) scale(0.1)"
    >
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="scale"
        additive="sum"
        values="1.6;1.7236067977499792;1.8351141009169893;1.9236067977499791;1.9804226065180615;2;1.9804226065180615;1.9236067977499791;1.8351141009169893;1.7236067977499792;1.6"
        keyTimes="0;0.1;0.2;0.3;0.4;0.5;0.6;0.7;0.8;0.9;1"
        dur="1s"
        repeatCount="indefinite"
        begin="0.2s"
      ></animateTransform>
      <animate
        attributeName="opacity"
        values="0.25;0.4045084971874737;0.5438926261462366;0.6545084971874737;0.7255282581475768;0.75;0.7255282581475768;0.6545084971874737;0.5438926261462367;0.4045084971874737;0.25000000000000006"
        keyTimes="0;0.1;0.2;0.3;0.4;0.5;0.6;0.7;0.8;0.9;1"
        dur="1s"
        repeatCount="indefinite"
        begin="0.2s"
      ></animate>
    </line>
    <line
      x1="0"
      y1="0"
      x2="400"
      y2="0"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="300"
      transform="translate(187.49999999999991,675) rotate(-360) scale(0.1)"
    >
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="scale"
        additive="sum"
        values="1.6;1.7236067977499792;1.8351141009169893;1.9236067977499791;1.9804226065180615;2;1.9804226065180615;1.9236067977499791;1.8351141009169893;1.7236067977499792;1.6"
        keyTimes="0;0.1;0.2;0.3;0.4;0.5;0.6;0.7;0.8;0.9;1"
        dur="1s"
        repeatCount="indefinite"
        begin="0.1s"
      ></animateTransform>
      <animate
        attributeName="opacity"
        values="0.25;0.4045084971874737;0.5438926261462366;0.6545084971874737;0.7255282581475768;0.75;0.7255282581475768;0.6545084971874737;0.5438926261462367;0.4045084971874737;0.25000000000000006"
        keyTimes="0;0.1;0.2;0.3;0.4;0.5;0.6;0.7;0.8;0.9;1"
        dur="1s"
        repeatCount="indefinite"
        begin="0.1s"
      ></animate>
    </line>
  </Root>
);
