const MailDetail = ({
  sub,
  children,
  onBack,
}: {
  sub: string;
  children: React.ReactNode;
  onBack: () => void;
}) => {
  return (
    <div className="h-full bg-yellow px-4 py-3">
      <div className="mb-5 border-b-2">
        <button
          onClick={onBack}
          className="mr-5 px-4 py-1 font-PatrickHandSC text-3xl text-red transition-all hover:bg-red hover:text-white"
        >
          {"<"}
        </button>
        {sub}
      </div>
      <div className="max-h-96 overflow-auto">{children}</div>
    </div>
  );
};

export default MailDetail;
