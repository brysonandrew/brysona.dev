import styled from "@emotion/styled";
import type { HTMLMotionProps } from "framer-motion";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import type { FC } from "react";
import { Fragment } from "react";
import { Text } from "../Text";
import { DELAY, DELAY_2, FULL, GAP_1 } from "../constants";
import { Main } from "./Main";
import { GROUPS } from "./constants";

const Root = styled(motion.div)``;
const List = styled(motion.ul)``;
const Blinder = styled(motion.div)``;

type TProps = HTMLMotionProps<"div">;
export const Clients: FC<TProps> = () => {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, GAP_1], FULL);
  const x1 = useTransform(
    scrollY,
    [DELAY, GAP_1 + DELAY],
    FULL,
  );
  const x2 = useTransform(
    scrollY,
    [DELAY_2, GAP_1 + DELAY_2],
    FULL,
  );

  const xs = [x, x1, x2];

  const opacityBlinders = useTransform(
    scrollY,
    [DELAY_2, GAP_1 + DELAY_2],
    [1, 0],
  );

  return (
    <Root className="flex flex-col items-start">
      <Text>To build my clients</Text>
      <div className="py-2" />
      <div className="relative overflow-hidden w-full h-full">
        <Blinder
          className="absolute left-0 w-20 h-full bg-gradient-to-r from-black-dark z-10"
          style={{ opacity: opacityBlinders }}
        />
        <Blinder
          className="absolute right-0 w-20 h-full bg-gradient-to-l from-black-dark z-10"
          style={{ opacity: opacityBlinders }}
        />
        <ul>
          {GROUPS.map((projects, index: number) => (
            <li
              key={`group-${index}`}
              className="relative flex w-full overflow-hidden"
            >
              <List
                className="inline-flex"
                style={{ x: xs[index] }}
              >
                {projects.map((p, index) => (
                  <Fragment key={p}>
                    {index !== 0 && <li className="p-1" />}
                    <li className="uppercase bg-white bg-opacity-20 py-2 m-1 whitespace-nowrap opacity-20">
                      <Text>{p}</Text>
                    </li>
                  </Fragment>
                ))}
                <Main index={index} />
              </List>
            </li>
          ))}
        </ul>
      </div>
    </Root>
  );
};
