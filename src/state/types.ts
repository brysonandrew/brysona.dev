import type { MotionValue } from "framer-motion";
import type {
  Dispatch,
  Reducer,
  ReducerState,
  ReducerAction,
} from "react";

export type TContext = TState & {
  dispatch: TDispatch;
};

export type TMotionValuePair = [
  x: MotionValue,
  y: MotionValue,
];

export type TAction =
  | {
      type: "init";
      value: null;
    }
  | {
      type: "select-id";
      value: null | string;
    }
  | {
      type: "cursor-ready";
      value: boolean;
    }
  | {
      type: "add-motion-value";
      value: { pair: TMotionValuePair; index: number };
    }
  | {
      type: "threshold-reached";
      value: null;
    }
  | {
      type: "threshold-lost";
      value: null;
    };

export type TState = {
  isInit: boolean;
  isCursorReady: boolean;
  selectId: null | string;
  mode: "instant" | "stagger";
  isThreshold: boolean;
  motionValuePairs: TMotionValuePair[];
};

export type TActionType = null;
export type TActionValue = any;

export type TDispatch = Dispatch<TAction>;
export type TReducer = Reducer<TState, TAction>;
export type TReducerState = ReducerState<TReducer>;
export type TReducerAction = ReducerAction<TReducer>;
