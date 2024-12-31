type BrowserProps = {
  children: React.ReactNode;
  url: string;
  return?: () => void;
};
const Browser = (props: BrowserProps) => {
  return (
    <div className="flex h-full w-full flex-col bg-superLightPurple">
      <div className="flex w-full justify-center bg-lightPurple">
        {props.return && (
          <button
            onClick={props.return}
            className="mr-5 px-4 font-PatrickHandSC text-3xl text-pink transition-all hover:bg-pink hover:text-white"
          >
            <div className="-mt-2">{"<"}</div>
          </button>
        )}
        <div className="my-3 w-4/5 rounded-xl bg-yellow bg-opacity-75 px-4 py-1 text-lg">
          {props.url}
        </div>
      </div>
      <div className="mx-4 my-2 flex h-full overflow-hidden">
        {props.children}
      </div>
    </div>
  );
};

export default Browser;
