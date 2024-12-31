type PdfProps = {
  children: React.ReactNode;
  fileName: string;
};

const Pdf = (props: PdfProps) => {
  return (
    <div className="m-auto flex h-full w-full flex-col bg-superLightPurple text-purple">
      <div className="bg-purple px-6 py-2 text-2xl text-yellow">
        {props.fileName}.pdf
      </div>
      <div className="m-auto my-3 h-full w-3/4 bg-white bg-opacity-35 text-3xl text-purple shadow-lg">
        {props.children}
      </div>
    </div>
  );
};

export default Pdf;
