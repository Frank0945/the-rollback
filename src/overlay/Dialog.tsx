import { useEffect, useState } from "react";
import clsx from "clsx";
import useSound from "use-sound";

import typing from "../assets/sounds/typing.mp3";

const delay = 1500;

type DialogProps = {
  name: string;
  text: string;
  close: boolean;
  onNext: () => void;
};

const Dialog = (props: DialogProps) => {
  const [content, setContent] = useState("");
  const [play] = useSound(typing);

  useEffect(() => {
    for (let i = 0; i < props.text.length; i++) {
      setTimeout(
        () => {
          if (i % 2 === 0) play();
          setContent(props.text.slice(0, i + 1));
        },
        50 * i + delay,
      );
    }
  }, [props.text, play]);

  return (
    <div
      className={clsx(
        "absolute z-10 flex h-full w-full items-end justify-center",
        props.close && "pointer-events-none",
      )}
      key={props.close ? "in" : "out"}
    >
      <div
        className={clsx(
          "overlay absolute h-full w-full",
          props.close ? "animate-fadeOutF" : "animate-fadeInF",
        )}
      ></div>
      <div
        className={clsx(
          "relative -mr-16 mb-16 flex h-60 w-[60%] justify-center",
          props.close ? "animate-goDown" : "animate-bounceInUp ",
        )}
      >
        <div className="absolute m-auto -ml-16 h-full w-full -rotate-[1.7deg] bg-yellow"></div>
        <div className="z-10 h-full w-full bg-green px-16 pt-16 text-3xl text-yellow">
          {content}
        </div>
        <div className="absolute -top-9 left-16 z-10 border-8 border-green bg-darkGreen px-6 py-2 font-PatrickHandSC text-5xl text-yellow">
          {props.name}
        </div>
        <button
          onClick={props.onNext}
          className="absolute -bottom-4 -right-5 z-10 flex h-20 w-20 justify-center border-4 border-pink bg-red text-center font-PatrickHandSC text-6xl text-white transition-all hover:scale-110 hover:animate-pulse hover:border-yellow hover:text-yellow"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Dialog;
