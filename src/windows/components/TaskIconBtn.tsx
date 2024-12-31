import clsx from "clsx";

const TaskIconBtn = ({
  src,
  onClick,
  isActived,
}: {
  src: string;
  onClick: () => void;
  isActived: boolean;
}) => {
  return (
    <div
      className={clsx(
        "m-2 flex h-12 cursor-pointer rounded-lg transition-all hover:bg-lightGreen",
        isActived && "bg-lightGreen bg-opacity-40",
      )}
      onClick={onClick}
    >
      <img className="h-full p-3 active:animate-bounce" src={src} />
    </div>
  );
};

export default TaskIconBtn;
