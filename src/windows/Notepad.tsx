type NoteProps = {
  children: React.ReactNode;
};

const Notepad = (props: NoteProps) => {
  return (
    <div className="m-auto mx-8 flex h-3/4 flex-col bg-superLightPurple text-purple">
      <div className="bg-purple px-6 py-2 text-2xl text-yellow">Notepad</div>
      <div className="m-auto my-3 h-full w-full bg-white bg-opacity-35 p-2 text-3xl text-purple">
        {props.children}
      </div>
    </div>
  );
};

export default Notepad;
