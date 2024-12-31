type TaskbarProps = {
  children: React.ReactNode;
};

const Taskbar = (props: TaskbarProps) => {
  return (
    <div className="bg-superLightPurple border-purple mt-auto flex h-14 w-full items-center justify-center border-t-2 bg-opacity-55">
      {props.children}
    </div>
  );
};

export default Taskbar;
