import { useState } from "react";

import { setPlayerName } from "../stores/player";

type NameProps = {
  next: () => void;
};

const Name = (props: NameProps) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleSend = () => {
    if (inputValue.trim() === "") {
      setError("Name cannot be empty.");
      return;
    }
    if (inputValue.trim().length > 20) {
      setError("Name is too long (max 20 characters).");
      return;
    }
    setPlayerName(inputValue.trim());
    props.next();
  };

  return (
    <div className="overlayB absolute z-10 flex h-full w-full">
      <div className="relative m-auto flex w-[500px] items-center justify-center rounded-lg bg-purple px-6 py-10">
        <div className="flex flex-col p-4">
          <p className="mb-2 flex text-2xl text-white">Enter your nickname</p>
          <div className="mb-7 text-pink">{error}</div>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="mx-2 h-10 w-80 rounded-lg bg-white bg-opacity-60 p-2 text-purple placeholder-purple"
            placeholder="Name"
            autoFocus
          />
          <button
            onClick={handleSend}
            className="m-auto mt-7 rounded-lg border-2 border-superLightPurple bg-lightPurple px-6 py-2 font-bold text-superLightPurple shadow-sm transition hover:bg-purple"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Name;
