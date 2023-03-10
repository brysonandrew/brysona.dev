import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import styled from "@emotion/styled";
import { Typewriter } from "@components/typewriter";
import { MainTitle } from "./text/MainTitle";
import { Contact } from "./shell/header/right/Contact";

const Root = styled(motion.header)``;
const Background = styled(motion.div)``;
const BackgroundFade = styled(motion.div)``;
const Border = styled(motion.div)``;

const Right = styled(motion.div)``;
const Sub = styled(motion.h2)``;

export const Header = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 40], [1, 0]);
  const xMain = useTransform(scrollY, [0, 100], [0, -28]);
  const xSub = useTransform(scrollY, [0, 100], [0, -100]);
  const scaleText = useTransform(
    scrollY,
    [0, 100],
    [1, 0.7],
  );
  const scaleBackground = useTransform(
    scrollY,
    [0, 100],
    [0, 2],
  );

  return (
    <Root className="flex items-center justify-between fixed top-0 left-0 w-full px-4 pt-4 pb-5 z-40">
      <BackgroundFade
        style={{
          scaleY: scaleBackground,
          originY: 0,
          originX: 0,
        }}
        className="absolute w-full top-full left-0 w-full h-full from-black-dark bg-gradient-to-b border-teal-04 backdrop-blur-lg"
      />
      <Background className="absolute w-full inset-0 bg-black-dark border-teal-04 backdrop-blur-lg" />
      <Border style={{scaleX: opacity}} className="absolute bottom-0 left-0 w-full shadow-" />
      <div className="flex items-center">
        <MainTitle {...{ scale: scaleText, x: xMain }} />
        <Right
          className="flex items-center grow"
          style={{ opacity }}
        >
          <div className="p-2" />
          <Sub
            style={{ scale: scaleText, x: xSub }}
            className="hidden md:flex relative text-sm text-teal whitespace-nowrap leading-none"
          >
            <Typewriter
              delay={150}
              wip="sᴇʀᴠɪᴄɪɴɢ ʏᴏᴜʀ ғʀᴏɴᴛᴇɴᴅ's ɴᴇᴇᴅs"
            >
              {(content) => <>{content}</>}
            </Typewriter>
          </Sub>
        </Right>
      </div>
      <ul className="flex items-center mt-0.5">
        <Contact />
      </ul>
    </Root>
  );
};
