import { useState } from "react";

import Date from "../overlay/Date";
import Dialog from "../overlay/Dialog";
import Office from "../scenes/Office";

const D1 = () => {
  const [close, setClose] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const next = () => {
    setClose(true);
  };

  const onFinish = () => {
    setShowDialog(true);
  };

  return (
    <>
      <Date date="2032/12/17" speed={100} onFinish={onFinish} />
      {showDialog && (
        <Dialog
          name="Trien"
          text="A new day, a new beginning. Let's get to work!"
          close={close}
          onNext={next}
        />
      )}
      <Office />
    </>
  );
};

export default D1;
