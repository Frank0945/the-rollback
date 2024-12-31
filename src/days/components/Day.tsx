import { useState } from "react";
import clsx from "clsx";

import Date from "../../overlays/Date";

type DayProps = {
  date: string;
  children: (props: {
    hideCover: boolean;
    showDialog: boolean;
    setNextDay: React.Dispatch<React.SetStateAction<boolean>>;
  }) => React.ReactNode;
  nextScene: () => void;
};

const Day = (props: DayProps) => {
  const [showDialog, setShowDialog] = useState(false);
  const [hideCover, setHideCover] = useState(false);
  const [nextDay, setNextDay] = useState(false);

  const handleDateFinish = () => {
    setShowDialog(true);
  };
  return (
    <>
      <Date
        date={props.date}
        speed={200}
        onFinish={handleDateFinish}
        setHideCover={props.date === "2032/12/17" ? setHideCover : undefined}
      />
      <div
        className={clsx(nextDay && "animate-fadeOut")}
        onAnimationEnd={() => {
          if (nextDay) props.nextScene();
        }}
      >
        {props.children({ hideCover, showDialog, setNextDay })}
      </div>
    </>
  );
};

export default Day;
