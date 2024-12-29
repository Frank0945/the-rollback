import clsx from "clsx";

import Badge1 from "../assets/images/badge1.png";

type BadgeProps = {
  hidden: boolean | undefined;
  name: string;
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
        <img src={Badge1} className="scale-125" />
        <div className="text-purple absolute -left-2 bottom-16 w-full rotate-[4.35deg] text-center font-PatrickHandSC text-5xl">
          {props.name}
        </div>
      </div>
    </div>
  );
};

export default Badge;
