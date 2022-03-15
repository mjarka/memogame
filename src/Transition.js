import React from "react";
import CardsFlip from "./CardsFlip";
import PlayButton from "./PlayButton";
import Points from "./Points";
import Prizes from "./Prizes";
import useStore from "./store";
import { useTransition, animated, config } from "react-spring";
export default function Transition() {
  const started = useStore((state) => state.started);
  const transitions = useTransition(started, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
    delay: 200,
  });
  return transitions(({ opacity }, item) =>
    item ? (
      <animated.div
        style={{
          opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
        }}
      >
        <Points />
        <CardsFlip />
      </animated.div>
    ) : (
      <animated.div
        style={{
          height: "60%",
          position: "absolute",
          opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
        }}
      >
        <Prizes />
        <PlayButton />
      </animated.div>
    )
  );
}
