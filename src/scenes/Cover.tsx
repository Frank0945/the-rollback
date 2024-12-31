import clsx from "clsx";

import { cover } from "../preloadResources";

type CoverProps = {
  nextScene: () => void;
  disable?: boolean;
};

const Cover = (props: CoverProps) => {
  return (
    <>
      <img src={cover} className="absolute top-0" />
      <div
        className={clsx(
          "absolute bottom-32 left-52 flex flex-col space-y-6 font-PatrickHandSC text-8xl text-white",
          props.disable && "pointer-events-none",
        )}
      >
        <Button onClick={props.nextScene} text="Start Game" />
        <Button
          onClick={() => {
            alert(
              "There's no time left!!! I'll put the credit in the game description.",
            );
          }}
          text="Credit"
        />
      </div>
    </>
  );
};

const Button = ({ text, onClick }: { text: string; onClick: () => void }) => {
  return (
    <button className="group relative mr-auto flex" onClick={onClick}>
      <div className="relative z-10 flex group-hover:animate-pulse">{text}</div>
      <div className="bar absolute -bottom-2 -left-5 h-1/2 w-full bg-lightPurple opacity-0 transition-all group-hover:opacity-100"></div>
    </button>
  );
};

export default Cover;
