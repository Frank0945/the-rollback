import { useState } from "react";

import Dialog from "../overlays/Dialog";
import { browser, osu } from "../preloadResources";
import Cover from "../scenes/Cover";
import Office from "../scenes/Office";
import { getPlayerName } from "../stores/player";
import Browser from "../windows/Browser";
import Taskbar from "../windows/components/Taskbar";
import TaskIconBtn from "../windows/components/TaskIconBtn";
import LockScreen from "../windows/LockScreen";
import Day from "./components/Day";
import MailDetail from "./components/MailDetail";
import MailLineBtn from "./components/MailLineBtn";

type Day1Props = {
  nextScene: () => void;
};

const Day1 = (props: Day1Props) => {
  const [dialogClose, setDialogClose] = useState(false);
  const [dialogText, setDialogText] = useState(
    "A new day, a new beginning. Let's get to work!",
  );
  const [showBrowser, setShowBrowser] = useState(false);
  const [browserIdx, setBrowserIdx] = useState(0);
  const [isFirstOpenBrowser, setIsFirstOpenBrowser] = useState(true);
  const [unLockScreen, setUnLockScreen] = useState(false);

  const handleDialogNext = () => {
    setDialogClose(true);
  };

  const handleWindowClick = () => {
    if (isFirstOpenBrowser) {
      setDialogText(
        "Ugh, I hate doing this. Let’s see what new spam emails I’ve got today.",
      );
      setDialogClose(false);
      setIsFirstOpenBrowser(false);
    }
    setShowBrowser((prev) => !prev);
  };

  return (
    <Day date="2032/12/17" nextScene={props.nextScene}>
      {({ hideCover, showDialog, setNextDay }) => (
        <>
          {!hideCover && (
            <div className="absolute left-0 top-0 z-10 h-full w-full">
              <Cover nextScene={() => {}} disable={true} />
            </div>
          )}

          {showDialog && (
            <Dialog
              text={dialogText}
              close={dialogClose}
              onNext={handleDialogNext}
            />
          )}

          <Office day={1}>
            {!unLockScreen && (
              <LockScreen
                unlock={() => {
                  setUnLockScreen(true);
                }}
              />
            )}

            {showBrowser && (
              <>
                {browserIdx == 0 && (
                  <MailSite nextSite={(idx: number) => setBrowserIdx(idx)} />
                )}
                {browserIdx == 1 && (
                  <OsuSite nextSite={(idx: number) => setBrowserIdx(idx)} />
                )}
                {browserIdx == 2 && (
                  <SunnySite
                    nextSite={(idx) => {
                      if (idx === 2) {
                        setTimeout(() => {
                          setNextDay(true);
                        }, 2000);
                      } else {
                        setBrowserIdx(idx);
                      }
                    }}
                  />
                )}
              </>
            )}
            <Taskbar>
              <TaskIconBtn
                src={browser}
                onClick={handleWindowClick}
                isActived={showBrowser}
              />
            </Taskbar>
          </Office>
        </>
      )}
    </Day>
  );
};

type SiteProps = {
  nextSite: (idx: number) => void;
};

const OsuSite = (props: SiteProps) => {
  return (
    <Browser
      url="https://osu.ppy.sh/specialVideo"
      return={() => props.nextSite(0)}
    >
      <video src={osu} controls autoPlay controlsList="nodownload"></video>
    </Browser>
  );
};

const SunnySite = (props: SiteProps) => {
  const [inputValue, setInputValue] = useState("");
  const [title, setTitle] = useState("Join Us Now!");

  const handleSend = () => {
    if (inputValue.toLowerCase() == "neuro-summer") {
      setTitle("Send mail via a private inbox to 6b6c@notexit.pro");
      props.nextSite(2);
    }
    setInputValue("");
  };

  return (
    <Browser
      url="https://sunnytrail.com/summerJourney/join"
      return={() => props.nextSite(0)}
    >
      <div className="h-[560px] w-full overflow-auto">
        <header className="bg-yellow-400 py-8 text-center text-purple">
          <h1 className="text-5xl font-bold">Summer Journey</h1>
          <p className="mt-2 text-xl">
            Start Your Unforgettable Summer Adventure
          </p>
        </header>

        <main className="mx-auto max-w-3xl p-6">
          <section className="my-8">
            <h2 className="text-3xl font-semibold">Kick Off Your Summer!</h2>
            <p className="mt-4">
              Summer is here, and we’re excited to introduce you to the perfect
              way to kick off your season! Get ready to embark on your first and
              best journey this summer – a journey that will create memories to
              last a lifetime. Imagine the sun shining, the adventure calling,
              and every moment filled with new experiences.
            </p>
          </section>

          <section className="my-8">
            <h2 className="text-3xl font-semibold">
              Exclusive Summer Experience
            </h2>
            <p className="mt-4">
              This summer, we’ve crafted an exclusive experience just for you –
              the ultimate start to your summer adventures. Whether it’s
              exploring hidden gems, enjoying scenic views, or simply soaking up
              the summer vibes, this journey is designed to be the highlight of
              your season.
            </p>
          </section>

          <section className="my-8 border-y-4 border-blue border-opacity-30 py-5 text-center">
            <h2 className="mb-4 text-3xl font-semibold text-blue">{title}</h2>
            {title === "Join Us Now!" && (
              <div>
                <input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="bg-gray-200 mx-2 h-10 w-64 rounded-lg bg-white bg-opacity-60 p-2 placeholder-superLightPurple"
                  placeholder="Name"
                />
                <button
                  onClick={handleSend}
                  className="rounded-lg border-2 border-blue bg-lightGreen px-6 py-2 shadow-sm transition hover:bg-blue"
                >
                  Send
                </button>
              </div>
            )}
          </section>

          <section className="my-8">
            <h2 className="text-3xl font-semibold">Make It Unforgettable</h2>
            <p className="mt-4">
              Let’s make this summer unforgettable together. Your best first
              journey starts now! Join us as we explore, enjoy, and embrace all
              that summer has to offer.
            </p>
          </section>
        </main>

        <footer className="bg-gray-800 py-6 text-center text-purple">
          <p className="text-xl font-bold">© 2032 SunnyTrail</p>
        </footer>
      </div>
    </Browser>
  );
};

const MailSite = (props: SiteProps) => {
  const [showMailDetail, setShowMailDetail] = useState(0);

  const handleOpenMailClick = (idx: number) => {
    setShowMailDetail(idx);
  };

  return (
    <Browser url="https://mail.vedal.ai/#inbox">
      <div className="mx-2 my-8 w-full rounded-md border-2 border-yellow">
        {showMailDetail === 0 && (
          <>
            <MailLineBtn
              name="SunnyTrail"
              sub="Make This Summer Unforgattable – Your Best Firs Journey Awaits!"
              time="7:53 AM"
              onClick={() => handleOpenMailClick(1)}
            />
            <MailLineBtn
              name="OSU!"
              sub="Discover a New OSU! Experience – Ready for the Challenge? 🎶🎮"
              time="7:00 AM"
              onClick={() => handleOpenMailClick(2)}
            />
          </>
        )}
        {showMailDetail === 1 && (
          <MailDetail
            sub="Make This Summer Unforgattable – Your Best Firs Journey Awaits!"
            onBack={() => handleOpenMailClick(0)}
          >
            Hi {getPlayerName()}, <br />
            Summer is here, and we’re exited to introduce you to the perfect way
            to kick off your seson! Get ready to embark on your first and best
            jurney this summer – a journey that will creat memories to last a
            lifetime. Imange the sun shining, the adventur calling, and every
            moment filled with new expereiences. This summer, we’ve crafted an
            exclsuive experince just for you – the ultimte start to your summer
            advenures.
            <br /> <br />
            👉
            <a onClick={() => props.nextSite(2)}>
              Don’t miss out on your best frist journey this summer. Click here
              to learn morre!
            </a>
            <br /> <br />
            Wether it’s exploring hiddne gems, enjoyng sceninc views, or simply
            soaking up the summer vibes, this jurney is designed to be the
            hightlight of your season. Let’s make this summer unforgattable
            together. Your best firts jurney starts now!
            <br />
            <br />
            Best ragrds, <br />
            SunnyTrail Team
          </MailDetail>
        )}
        {showMailDetail === 2 && (
          <MailDetail
            sub="Discover a New OSU! Experience – Ready for the Challenge? 🎶🎮"
            onBack={() => handleOpenMailClick(0)}
          >
            Hi {getPlayerName()}, <br />
            Remember those heart-pounding OSU! moments? We've prepared an
            exciting surprise to take you deeper into the world of rhythm and
            challenge!
            <br /> <br />
            👉
            <a onClick={() => props.nextSite(1)}>
              Click here to watch this special video and explore your new
              journey.
            </a>
            <br /> <br />
            Whether you're a rhythm master or just starting out, this experience
            is guaranteed to redefine your gameplay fun. Don't miss out! Hit
            play now and be among the first to experience it.
            <br /> <br />
            Best regards, <br />
            The OSU! Team <br />
          </MailDetail>
        )}
      </div>
    </Browser>
  );
};

export default Day1;
