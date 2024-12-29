import { useState } from "react";

import Badge2 from "../assets/images/badge2.png";
import OfficeBg from "../assets/images/office.png";
import Badge from "../overlay/Badge";

const Office = () => {
  const [hidden, setHidden] = useState<undefined | boolean>(undefined);

  return (
    <>
      <img src={OfficeBg} className="-z-1 absolute top-0" />
      <img
        src={Badge2}
        className="item absolute bottom-44"
        onClick={() => setHidden(false)}
      />
      <div className="bg-lightPurple absolute left-[356px] top-[87px] h-[686px] w-[1209px]">
        screen
      </div>
      <Badge
        name={"Trien"}
        hidden={hidden}
        closeBadge={() => setHidden(true)}
      />
    </>
  );
};

export default Office;
