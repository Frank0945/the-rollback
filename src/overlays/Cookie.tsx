import { cookie } from "../preloadResources";

type CookieProps = {
  next: () => void;
};

const Cookie = (props: CookieProps) => {
  return (
    <div className="overlayB absolute z-10 flex h-full w-full">
      <div className="relative m-auto flex w-[700px] items-center justify-center rounded-lg bg-purple px-6 py-10">
        <div className="flex flex-col p-4">
          <p className="mb-8 flex text-2xl text-white">
            <img className="m-auto mr-10" src={cookie} width={200} />
            We use cookies to improve your experience on our game. By clicking
            "Accept All Cookies", you agree to our use of cookies.
          </p>
          <button
            onClick={props.next}
            className="m-auto rounded-lg border-2 border-superLightPurple bg-lightPurple px-6 py-2 text-xl font-bold text-superLightPurple shadow-sm transition hover:bg-purple"
          >
            Accept All Cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cookie;
