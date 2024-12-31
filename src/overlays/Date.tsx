import { useCallback, useEffect, useState } from "react";
import clsx from "clsx";
import useSound from "use-sound";

import { FadeStatus } from "../effects/effectsEnums";
import Fade from "../effects/Fade";
import { typing } from "../preloadResources";

type DateProps = {
  date: string;
  speed: number;
  onFinish: () => void;
  setHideCover?: React.Dispatch<React.SetStateAction<boolean>>;
};

const Date = ({ date, speed, onFinish, setHideCover }: DateProps) => {
  const [title, setTitle] = useState("");
  const [fadeIn, setFadeIn] = useState(true);
  const [play] = useSound(typing);

  const isFirstDate = date === "2032/12/17";

  const typeText = useCallback(() => {
    const characters = date.split("");
    characters.forEach((_, i) => {
      setTimeout(() => {
        play();
        setTitle(date.slice(0, i + 1));
      }, speed * i);
    });
  }, [date, speed, play]);

  const handleAnimationEnd = useCallback(() => {
    if (!fadeIn) {
      onFinish();
    } else {
      setHideCover?.(true);
      if (isFirstDate) {
        typeText();
      }
    }
  }, [fadeIn, onFinish, setHideCover, isFirstDate, typeText]);

  useEffect(() => {
    if (!isFirstDate) {
      typeText();
    }
  }, [isFirstDate, typeText]);

  useEffect(() => {
    if (title === date) {
      const timeout = setTimeout(() => setFadeIn(false), 1000);
      return () => clearTimeout(timeout);
    }
  }, [title, date]);

  return (
    <Fade
      key={fadeIn ? "in" : "out"}
      status={
        fadeIn
          ? isFirstDate
            ? FadeStatus.in
            : FadeStatus.unneeded
          : FadeStatus.out
      }
      finish={handleAnimationEnd}
    >
      <div className="h-full w-full place-content-center bg-black">
        <div className="mb-32 text-center font-AnonymousPro text-8xl text-white">
          <span className="mr-1">{title}</span>
          <span
            className={clsx(
              "border-r-2",
              { "animate-typingLine": title === date },
              { "opacity-0": title.length === 0 },
            )}
          ></span>
        </div>
      </div>
    </Fade>
  );
};

export default Date;
