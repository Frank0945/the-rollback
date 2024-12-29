import { useState } from "react";
import clsx from "clsx";
import useSound from "use-sound";

import typing from "../assets/sounds/typing.mp3";
import { FadeStatus } from "../effects/effectsEnums";
import Fade from "../effects/Fade";

type DateProps = {
  date: string;
  speed: number;
  onFinish: () => void;
};

const Date = (props: DateProps) => {
  const [title, setTitle] = useState("");
  const [fadeIn, setFadeIn] = useState(true);
  const [play] = useSound(typing);

  const handleAnimationEnd = () => {
    if (!fadeIn) {
      props.onFinish();
      return;
    }
    for (let i = 0; i < props.date.length; i++) {
      setTimeout(() => {
        play();
        setTitle(props.date.slice(0, i + 1));
      }, props.speed * i);
    }
  };

  if (title === props.date) {
    setTimeout(() => {
      setFadeIn(false);
    }, 1000);
  }
  return (
    <Fade
      key={fadeIn ? "in" : "out"}
      status={fadeIn ? FadeStatus.in : FadeStatus.out}
      finish={handleAnimationEnd}
    >
      <div className="h-full w-full place-content-center bg-black">
        <div className="mb-32 text-center font-AnonymousPro text-8xl text-white">
          <span className="mr-1">{title}</span>
          <span
            className={clsx(
              "border-r-2",
              {
                "animate-typingLine": title === props.date,
              },
              { "opacity-0": title.length === 0 },
            )}
          ></span>
        </div>
      </div>
    </Fade>
  );
};

export default Date;
