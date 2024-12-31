import { useEffect, useState } from "react";

import Badge from "../overlays/Badge";
import { badge2, office, office2, office3, turtle } from "../preloadResources";

type OfficeProps = {
  children: React.ReactNode;
  day: number;
};

const Office = (props: OfficeProps) => {
  const [hidden, setHidden] = useState<undefined | boolean>(undefined);
  const [officeImage, setOfficeImage] = useState(office);

  useEffect(() => {
    if (props.day === 2) {
      setOfficeImage(office2);
    } else if (props.day === 3) {
      setOfficeImage(office3);
    }
  }, [props.day]);

  return (
    <>
      <img src={officeImage} className="absolute top-0" />
      {props.day === 1 && (
        <img
          src={badge2}
          className="item absolute bottom-44 hover:animate-pulse"
          onClick={() => setHidden(false)}
        />
      )}
      <div className="absolute left-[356px] top-[87px] h-[686px] w-[1209px] bg-lightPurple">
        <img
          src={turtle}
          className="absolute left-[37%] top-[20%] opacity-20"
        />
        <div className="absolute flex h-full w-full flex-col">
          {props.children}
        </div>
      </div>
      <Badge hidden={hidden} closeBadge={() => setHidden(true)} />
    </>
  );
};

export default Office;
