const MailLineBtn = ({
  sub,
  name,
  time,
  onClick,
}: {
  sub: string;
  name: string;
  time: string;
  onClick?: () => void;
}) => {
  return (
    <button
      className="flex w-full bg-yellow px-8 py-2 text-xl hover:font-bold hover:drop-shadow-md"
      onClick={onClick}
    >
      <div className="w-36 text-left">{name}</div>
      <div>{sub}</div>
      <div className="ml-auto">{time}</div>
    </button>
  );
};

export default MailLineBtn;
