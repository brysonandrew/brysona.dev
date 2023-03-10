import { Plus } from "@components/icons/Plus";
import { TECH } from "@constants/tech";
import styled from "@emotion/styled";
import { XL } from "@styles/style";
import clsx from "clsx";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import type { FC } from "react";
import { Item } from "./Item";

const Root = styled(motion.div)``;

type TProps = HTMLMotionProps<"div">;
export const Tech: FC<TProps> = () => (
  <Root className="inline-flex flex-col items-start text-teal-bright xl:flex-row xl:items-center">
    <Item {...TECH.REACT} />
    <div className="p-1" />
    <div className="flex items-center justify-center w-full xl:pt-3">
      <Plus classValue={clsx(XL)} />
    </div>
    <div className="p-0.5" />
    <Item {...TECH.TYPESCRIPT} />
  </Root>
);
