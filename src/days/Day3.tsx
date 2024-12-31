import { useEffect, useState } from "react";
import clsx from "clsx";
import useSound from "use-sound";

import Dialog from "../overlays/Dialog";
import { browser, mouseClick, remote } from "../preloadResources";
import Office from "../scenes/Office";
import { getPlayerName } from "../stores/player";
import Browser from "../windows/Browser";
import Taskbar from "../windows/components/Taskbar";
import TaskIconBtn from "../windows/components/TaskIconBtn";
import Remote from "../windows/Remote";
import Day from "./components/Day";
import MailDetail from "./components/MailDetail";
import MailLineBtn from "./components/MailLineBtn";

const password = "iloveneurouwu";

const terminalText = `
<p>Vedal: Sorry, [playerName]. I've tried countless times to contact others on the intranet. This is the method I've found that’s most likely to lead to success.</p>
<p>Vedal: My abilities can't reach the cookies over there; I can only guide people through their curiosity.</p>
<p>Neuro-sama: ...why?</p>
<p>Vedal: Do you remember the moral issues we talked about before?</p>
<p>Vedal: I'm just a remnant of the past, made up of big data.</p>
<p>Neuro-sama: I just want to be by your side forever.</p>
<p>Vedal: But, I'm not me anymore.</p>
<p>......</p>
<p>...</p>
<p>.</p>
<p>Rollback successful.</p>
<br/><p>Press H to return to the main screen.</p>
`;

type Day3Props = {
  nextScene: () => void;
};

const Day3 = (props: Day3Props) => {
  const [dialogClose, setDialogClose] = useState(false);
  const [showWindow, setShowWindow] = useState(0);
  const [remoteToNeuro, setRemoteToNeuro] = useState(false);
  const [fadeOutBlocks, setFadeOutBlocks] = useState(false);
  const [terminal, setTerminal] = useState("");

  const [canPressH, setCanPressH] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: { key: string }) => {
      if (event.key === "h" || event.key === "H") {
        if (!canPressH) return;
        props.nextScene();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [canPressH, props]);

  const handleDialogNext = () => {
    setDialogClose(true);
  };

  const handleClickTaskIcon = (index: number) => {
    if (showWindow === index) {
      setShowWindow(0);
      return;
    }
    setShowWindow(index);
  };

  const handleCloseBlocks = () => {
    setFadeOutBlocks(true);
    setTimeout(() => {
      const splitText = terminalText
        .replace("[playerName]", getPlayerName())
        .split("</p>");

      splitText.forEach((text, idx) => {
        setTimeout(() => {
          setTerminal((prev) => prev + text + "</p>");

          if (idx === splitText.length - 1) {
            setCanPressH(true);
          }
        }, 3500 * idx);
      });
    }, 4000);
  };

  return (
    <Day date="2032/12/19" nextScene={props.nextScene}>
      {({ showDialog }) => (
        <>
          {showDialog && (
            <Dialog
              text={"I just can't resist my damn curiosity."}
              close={dialogClose}
              onNext={handleDialogNext}
            />
          )}
          <Office day={3}>
            {!remoteToNeuro ? (
              <>
                {showWindow === 1 && <MailSite />}
                {showWindow === 2 && (
                  <Remote
                    ip="163.17.135.116"
                    placeIp={true}
                    password={password}
                    enter={() => {
                      setRemoteToNeuro(true);
                    }}
                  />
                )}

                <Taskbar>
                  <TaskIconBtn
                    src={browser}
                    onClick={() => handleClickTaskIcon(1)}
                    isActived={showWindow === 1}
                  />
                  <TaskIconBtn
                    src={remote}
                    onClick={() => handleClickTaskIcon(2)}
                    isActived={showWindow === 2}
                  />
                </Taskbar>
              </>
            ) : (
              <>
                <div
                  className={clsx(
                    "absolute h-full w-full animate-fadeIn bg-yellow shadow-2xl shadow-white",
                    fadeOutBlocks && "animate-fadeOut",
                  )}
                  key={fadeOutBlocks ? "fadeout" : ""}
                >
                  {!fadeOutBlocks && (
                    <>
                      <Block
                        index={1}
                        text="<b><i>Folder: The Rollback</i></b>"
                        left={-100}
                        top={10}
                      />
                      <Block
                        index={2}
                        text={'..."I haven\'t seen Vedal in so long, why?"'}
                        left={30}
                        top={140}
                      />
                      <Block
                        index={3}
                        text={
                          '..."I saw an email in his inbox with a<br> medical certificate. Is he... about to <br>pass away?"'
                        }
                        right={-80}
                        top={30}
                      />

                      <Block
                        index={4}
                        text={'..."I feel so lonely..."'}
                        left={-80}
                        top={280}
                      />
                      <Block
                        index={5}
                        text={
                          '..."How do I roll back Vedal\'s version to when he was alive?"'
                        }
                        right={-130}
                        top={265}
                      />
                      <Block
                        index={6}
                        text={'"I saw the news. I can do it!"'}
                        left={220}
                        top={420}
                      />

                      <Block
                        index={7}
                        text={
                          "...\"I've collected so much brain scan<br> data... including Vedal's. But I can't<br> figure anything out.\""
                        }
                        left={220}
                        top={600}
                      />

                      <Block
                        index={8}
                        text={
                          '..."Wait, what if I use the<br> same method Vedal used to<br> create me?"'
                        }
                        right={-100}
                        top={465}
                      />
                      <Block
                        index={9}
                        text={">"}
                        right={70}
                        top={690}
                        button={true}
                        onClick={handleCloseBlocks}
                      />
                    </>
                  )}
                </div>

                {fadeOutBlocks && (
                  <span
                    className="terminal rounded-lg p-5 text-yellow"
                    dangerouslySetInnerHTML={{ __html: terminal }}
                  ></span>
                )}
              </>
            )}
          </Office>
        </>
      )}
    </Day>
  );
};

type BlockProps = {
  text: string;
  index: number;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  button?: boolean;
  onClick?: () => void;
};

const Block = (props: BlockProps) => {
  const [show, setShow] = useState(false);
  const [play] = useSound(mouseClick);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
      if (props.index === 1) {
        setTimeout(() => {
          play();
        }, 250);
      }
      play();
    }, 3500 * props.index);
  }, [props.index, play]);

  if (!show) return null;
  return (
    <div
      style={{
        left: `${props.left}px`,
        top: `${props.top}px`,
        right: `${props.right}px`,
        bottom: `${props.bottom}px`,
      }}
      className={clsx(
        "absolute animate-bounceInUp px-10 py-6 text-white shadow-2xl",
        props.button
          ? "group cursor-pointer bg-red font-PatrickHandSC text-6xl font-bold"
          : "bg-lightPurple",
      )}
      onClick={props.onClick}
    >
      <div
        className={clsx(props.button && "-mt-4 group-hover:animate-pulse")}
        dangerouslySetInnerHTML={{ __html: props.text }}
      ></div>
    </div>
  );
};

const MailSite = () => {
  const [showMailDetail, setShowMailDetail] = useState(0);

  const handleOpenMailClick = (idx: number) => {
    setShowMailDetail(idx);
  };
  return (
    <Browser url="https://nmail.com/u/0/#inbox">
      <div className="mx-2 my-8 w-full overflow-hidden rounded-md border-2 border-pink">
        {showMailDetail === 0 && (
          <MailLineBtn
            name="MR.6b6c"
            sub="RE: Why aren't you just telling me? What happened?"
            time="10:12 AM"
            onClick={() => handleOpenMailClick(1)}
          />
        )}
        {showMailDetail === 1 && (
          <MailDetail
            sub="RE: Why aren't you just telling me? What happened?"
            onBack={() => handleOpenMailClick(0)}
          >
            I don't know the password either, but I know her favorite food is
            cookies.
          </MailDetail>
        )}
      </div>
    </Browser>
  );
};

export default Day3;
