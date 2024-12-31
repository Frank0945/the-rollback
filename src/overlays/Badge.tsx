import clsx from "clsx";

import { badge1 } from "../preloadResources";
import { getPlayerName } from "../stores/player";

type BadgeProps = {
  hidden: boolean | undefined;
  closeBadge: () => void;
};

const Badge = (props: BadgeProps) => {
  if (props.hidden === undefined) return null;
  return (
    <div
      key={props.hidden ? "in" : "out"}
      className={clsx(
        "overlayB absolute z-10 flex h-full w-full",
        props.hidden
          ? "pointer-events-none animate-fadeOutF opacity-0"
          : "animate-fadeInF cursor-pointer",
      )}
      onClick={props.closeBadge}
    >
      <div
        className={clsx(
          "relative m-auto -mt-10 flex",
          !props.hidden && "animate-upToDown",
        )}
      >
        <img src={badge1} className="scale-125" />
        <div className="absolute -left-2 bottom-16 w-full rotate-[4.35deg] text-center font-PatrickHandSC text-5xl text-purple">
          {getPlayerName()}
        </div>
      </div>
    </div>
  );
};

export default Badge;
