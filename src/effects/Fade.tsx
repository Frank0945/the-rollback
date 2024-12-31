import clsx from "clsx";

import { FadeStatus } from "./effectsEnums";

type FadeProps = {
  status: FadeStatus;
  finish: (status: FadeStatus) => void;
  children: React.ReactNode;
};

const Fade = (props: FadeProps) => {
  return (
    <div
      className={clsx(
        "absolute z-20 h-full w-full",
        { "animate-fadeOut": props.status == FadeStatus.out },
        { "animate-fadeIn": props.status == FadeStatus.in },
      )}
      onAnimationEnd={() => props.finish(props.status)}
    >
      {props.children}
    </div>
  );
};

export default Fade;
