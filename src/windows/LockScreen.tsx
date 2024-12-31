import { useState } from "react";
import clsx from "clsx";

import { getPlayerName } from "../stores/player";

type LockScreenProps = {
  unlock: () => void;
};

const LockScreen = (props: LockScreenProps) => {
  const [inputValue, setInputValue] = useState("");
  const [showError, setShowError] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (inputValue === "1942620") {
        props.unlock();
      } else {
        setShowError(true);
      }
      setInputValue("");
    }
  };

  return (
    <div className="absolute flex h-full w-full flex-col items-center justify-center gap-5 bg-lightPurple">
      <div className="h-36 w-36 rounded-full bg-purple"></div>
      <div className="mb-6 text-3xl text-yellow">{getPlayerName()}</div>
      <input
        type="password"
        className="bg-gray-200 mx-2 h-10 w-64 rounded-lg bg-white bg-opacity-40 p-2 placeholder-black"
        placeholder="PIN"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      ></input>
      <div
        className={clsx(
          "font-bold text-pink opacity-0",
          showError && "opacity-100",
        )}
      >
        Wrong PIN
      </div>
    </div>
  );
};

export default LockScreen;
