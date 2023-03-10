import { Typewriter } from "@components/typewriter";
import styled from "@emotion/styled";
import { useSelectHandlers } from "@hooks/useSelectHandlers";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Border as Select } from "../../../select/Border";
import { useContext } from "@state/Context";
import type { FC } from "react";

const Root = styled(motion.li)``;

type TProp = {
  to: string;
  children: string;
};
export const Item: FC<TProp> = ({ to, children }) => {
  const { isInit } = useContext();
  const { handlers, isSelected } = useSelectHandlers(to);

  return (
    <Root className="relative" {...handlers}>
      <Link
        to={to}
        className="flex items-center justify-center px-2 pt-1 pb-1.5"
      >
        {isSelected && <Select />}
        <h6
          className="text-teal-bright uppercase text-xxxs"
          style={{ letterSpacing: 4 }}
        >
          <>
            {isInit ? (
              <Typewriter wip={children}>
                {(content) => <>{content}</>}
              </Typewriter>
            ) : (
              children
            )}
          </>
        </h6>
      </Link>
    </Root>
  );
};
