import { useState } from "react";

import { remote } from "../preloadResources";

type RemoteProps = {
  ip: string;
  password?: string;
  placeIp?: boolean;
  enter: () => void;
  popupPasswordWindow?: () => void;
};

const Remote = (props: RemoteProps) => {
  const [inputValue, setInputValue] = useState(props.placeIp ? props.ip : "");
  const [showPassword, setShowPassword] = useState(false);

  const handleConnect = () => {
    if (inputValue.trim() === props.ip) {
      if (props.password != undefined) {
        if (props.popupPasswordWindow) {
          props.popupPasswordWindow();
        }
        setShowPassword(true);
        return;
      }

      props.enter();
    } else {
      setInputValue("");
    }
  };

  return (
    <>
      {showPassword && (
        <PasswordRequest
          password={props.password!}
          correctPassword={props.enter}
          cancel={() => setShowPassword(false)}
        />
      )}
      <div className="m-auto flex w-1/2 flex-col bg-superLightPurple px-8 py-12 text-purple">
        <img className="m-auto mb-20" src={remote} width={200} />
        <h1 className="m-auto text-3xl font-bold">Remote Desktop Connection</h1>
        <p className="m-auto mt-2 flex flex-col text-lg">
          Enter the IP address of the remote computer.
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="xxx.xxx.xxx.xxx"
            className="m-auto mb-4 mt-10 flex h-10 w-80 rounded-lg bg-white bg-opacity-60 p-2 text-purple"
          />
          <button
            onClick={handleConnect}
            className="m-auto rounded-lg border-2 border-purple bg-lightPurple px-6 py-2 text-yellow shadow-sm transition hover:bg-purple"
          >
            Connect
          </button>
        </p>
      </div>
    </>
  );
};

type PasswordRequestProps = {
  password: string;
  correctPassword: () => void;
  cancel: () => void;
};
const PasswordRequest = (props: PasswordRequestProps) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleConfirm = () => {
    if (inputValue.trim() === props.password) {
      props.correctPassword();
      setError("");
    } else {
      setError("hint: Think outside the box");
      setInputValue("");
    }
  };

  const handleCancel = () => {
    setInputValue("");
    setError("");
    props.cancel();
  };

  return (
    <div className="overlayB absolute flex h-full w-full">
      <div className="relative m-auto flex w-[500px] flex-col items-center justify-center rounded-lg bg-purple px-6 py-10">
        <h1 className="m-auto text-3xl font-bold text-pink">
          Password Required
        </h1>
        <div className="my-2 text-xl text-pink">{error}</div>
        <input
          type="password"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="m-auto mb-4 mt-10 flex h-10 w-80 rounded-lg bg-white bg-opacity-60 p-2 text-purple"
        />
        <div className="mt-5 space-x-5">
          <button
            onClick={handleCancel}
            className="m-auto rounded-lg border-2 border-superLightPurple bg-lightPurple px-6 py-2 text-xl font-bold text-superLightPurple shadow-sm transition hover:text-pink"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="m-auto rounded-lg border-2 border-superLightPurple bg-purple px-6 py-2 text-xl font-bold text-superLightPurple shadow-sm transition hover:text-pink"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Remote;
