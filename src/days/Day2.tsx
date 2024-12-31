import { useState } from "react";
import clsx from "clsx";

import Dialog from "../overlays/Dialog";
import { browser, note, pdf, remote, robotTurtle } from "../preloadResources";
import Office from "../scenes/Office";
import Browser from "../windows/Browser";
import Taskbar from "../windows/components/Taskbar";
import TaskIconBtn from "../windows/components/TaskIconBtn";
import Notepad from "../windows/Notepad";
import Pdf from "../windows/Pdf";
import Remote from "../windows/Remote";
import Day from "./components/Day";
import MailDetail from "./components/MailDetail";
import MailLineBtn from "./components/MailLineBtn";

type Day2Props = {
  nextScene: () => void;
};

const Day2 = (props: Day2Props) => {
  const [dialogClose, setDialogClose] = useState(false);
  const [dialogText, setDialogText] = useState(
    "That email yesterday might've been a prank... but I sent one anyway. I think I should try looking into it first.",
  );
  const [showWindow, setShowWindow] = useState(0);
  const [showEmail, setShowEmail] = useState(false);

  const [remoteToVedal, setRemoteToVedal] = useState(false);

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

  return (
    <Day date="2032/12/18" nextScene={props.nextScene}>
      {({ showDialog, setNextDay }) => (
        <>
          {showDialog && (
            <Dialog
              text={dialogText}
              close={dialogClose}
              onNext={handleDialogNext}
            />
          )}

          <Office day={2}>
            {!remoteToVedal ? (
              <>
                {showWindow === 1 && <MailSite showEmail={showEmail} />}
                {showWindow === 2 && (
                  <NotexitSite finish={() => setShowEmail(true)} />
                )}
                {showWindow === 3 && (
                  <Remote
                    ip="192.168.45.234"
                    enter={() => setRemoteToVedal(true)}
                  />
                )}
                <Taskbar>
                  <TaskIconBtn
                    src={browser}
                    onClick={() => handleClickTaskIcon(1)}
                    isActived={showWindow === 1}
                  />
                  <TaskIconBtn
                    src={browser}
                    onClick={() => handleClickTaskIcon(2)}
                    isActived={showWindow === 2}
                  />
                  <TaskIconBtn
                    src={remote}
                    onClick={() => handleClickTaskIcon(3)}
                    isActived={showWindow === 3}
                  />
                </Taskbar>
              </>
            ) : (
              <>
                <div className="absolute right-0 flex w-96 justify-center rounded-bl-xl bg-blue text-center font-bold text-yellow shadow-md">
                  <span className="my-auto mr-5 inline-flex h-2 w-2 animate-bounce rounded-full bg-yellow"></span>
                  <span>192.168.45.234</span>
                </div>
                {showWindow === 4 && <NewsSite1 />}
                {showWindow === 5 && <NewsSite2 />}
                {showWindow === 6 && (
                  <Notepad>
                    ImProve neuro's moral
                    <br />
                    let neuro use more too1s to control the stream before June
                    3rd
                    <br />
                    upgrade the lava lamp to stable version 17
                    <br />
                    lower remote connection latency to an average of 135ms{" "}
                    <br />
                    p1ay games or do activities with neuro/evi1 at 6pm
                  </Notepad>
                )}
                {showWindow === 7 && (
                  <Pdf fileName="Medical Certificate">
                    <div className="h-[560px] overflow-auto p-6 px-10 text-lightPurple">
                      <h2 className="bt-20 mb-10 mt-10 text-center text-3xl font-semibold">
                        Medical Certificate
                      </h2>

                      <p className="mb-6 text-xl">Date: October 21, 2031</p>

                      <p className="mb-4">To whom it may concern,</p>

                      <p className="mb-4">
                        This is to certify that <strong>Vedal</strong>, has been
                        under my care for the diagnosis and treatment of a
                        severe medical condition. After conducting thorough
                        examinations and diagnostic tests, it has been confirmed
                        that the patient is suffering from a malignant brain
                        tumor, which is of an advanced stage.
                      </p>

                      <span className="bg-lightPurple">
                        Unfortunately, due to the aggressive nature of the
                        tumor, the prognosis is extremely poor. The likelihood
                        of survival is very low, and despite ongoing medical
                        efforts, the patient faces significant challenges moving
                        forward. We are providing the best possible care and
                        support to manage symptoms, but at this time, the
                        condition remains critical.
                      </span>

                      <span className="bg-lightPurple">
                        Please do not hesitate to contact our office if further
                        information or clarification is needed.
                      </span>
                      <br />
                      <p className="mb-14 text-xl">
                        Dr. Sarah Johnson, MD
                        <br />
                        Oncology Specialist
                        <br />
                        Sunrise Medical Center
                      </p>
                    </div>
                  </Pdf>
                )}
                {showWindow === 8 && (
                  <Remote
                    ip="163.17.135.116"
                    password="safghqaeqahaegdfa"
                    enter={() => {}}
                    popupPasswordWindow={() => {
                      setTimeout(() => {
                        setDialogText("God, what's the password though?");
                        setDialogClose(false);
                      }, 1200);
                      setTimeout(() => {
                        setNextDay(true);
                      }, 6000);
                    }}
                  />
                )}
                <Taskbar>
                  <TaskIconBtn
                    src={browser}
                    onClick={() => handleClickTaskIcon(4)}
                    isActived={showWindow === 4}
                  />
                  <TaskIconBtn
                    src={browser}
                    onClick={() => handleClickTaskIcon(5)}
                    isActived={showWindow === 5}
                  />
                  <TaskIconBtn
                    src={note}
                    onClick={() => handleClickTaskIcon(6)}
                    isActived={showWindow === 6}
                  />
                  <TaskIconBtn
                    src={pdf}
                    onClick={() => handleClickTaskIcon(7)}
                    isActived={showWindow === 7}
                  />
                  <TaskIconBtn
                    src={remote}
                    onClick={() => handleClickTaskIcon(8)}
                    isActived={showWindow === 8}
                  />
                </Taskbar>
              </>
            )}
          </Office>
        </>
      )}
    </Day>
  );
};

const NewsSite2 = () => {
  return (
    <Browser url="https://www.bnn.com/news/2031/12/29/global-iot-outage-causes-chaos">
      <div className="h-[560px] w-full overflow-auto text-lightPurple">
        <div className="m-auto w-full max-w-4xl rounded-lg bg-white bg-opacity-50 p-8 shadow-lg">
          <h1 className="text-gray-800 mb-4 text-center text-3xl font-bold text-red">
            Global IoT Outage Causes Chaos
          </h1>
          <span className="bg-lightPurple">
            In an unprecedented event, Internet of Things (IoT) devices around
            the world went offline simultaneously for approximately one hour
            yesterday. The outage, which occurred between 2:00 PM and 3:00 PM
            UTC, disrupted smart home systems, industrial equipment, and even
            critical medical devices in hospitals. The cause of the outage
            remains unknown, leaving experts and officials scrambling for
            answers.
          </span>
          <span>
            The impact was immediate and far-reaching. Global financial markets
            experienced a sharp downturn, with stock indexes plummeting as
            automated trading systems and other IoT-dependent infrastructures
            faltered. Hospitals relying on IoT-connected medical equipment
            reported brief but concerning interruptions, though no major
            incidents or casualties have been confirmed.
          </span>
          <span className="bg-lightPurple">
            Governments and corporations are working to investigate the root
            cause of the incident. The U.S. government has announced that it
            will give a press conference later today, but so far, no official
            statements have provided clarity or addressed the issue.
          </span>
          <span className="bg-lightPurple">
            Speculation ranges from a coordinated cyberattack to a catastrophic
            failure in a critical IoT infrastructure provider. Some experts have
            even suggested that the outage could have been triggered by a
            previously undetected vulnerability in IoT networks.
          </span>
          <span className="bg-lightPurple">
            For now, the world waits anxiously for answers as authorities and
            industry leaders race to ensure the stability of IoT systems and
            prevent future disruptions.
          </span>
        </div>
      </div>
    </Browser>
  );
};

const NewsSite1 = () => {
  return (
    <Browser url="https://www.dailytruthfinder.com/news/1032695625">
      <div className="h-[560px] w-full overflow-auto text-lightPurple">
        <div className="m-auto w-full max-w-4xl rounded-lg bg-white bg-opacity-50 p-8 shadow-lg">
          <h1 className="mb-4 text-center text-4xl font-bold text-blue">
            Could fMRI and AI Unlock the Secret to Human Consciousness?
          </h1>
          <span className="bg-lightPurple">
            In what some are calling a bold new frontier for neuroscience,
            researchers at the Future Brain Institute claim to have made
            significant progress in replicating human consciousness. The team
            reportedly used advanced fMRI technology combined with cutting-edge
            artificial intelligence algorithms to scan the brains of multiple
            volunteers, generating data that could provide insights into how
            consciousness emerges.
          </span>
          <span className="bg-lightPurple">
            According to the lead scientist, Dr. Evelyn Marks, their methods
            involve analyzing vast amounts of brain activity data to identify
            patterns that might serve as the foundation of conscious thought.
            While no specifics about the algorithm or results have been
            disclosed, Dr. Marks suggested that their findings could
            revolutionize our understanding of the mind.
          </span>
          <span className="">
            Critics, however, remain skeptical of the study’s claims, noting
            that the connection between brain activity patterns and
            consciousness remains highly speculative. Without peer-reviewed
            findings or methodological transparency, many experts caution
            against taking the announcement at face value.
          </span>
          <span className="bg-lightPurple">
            Even so, the potential implications of such research have sparked
            widespread interest. Could this be the first step toward
            understanding—and even replicating—human consciousness? For now, the
            claims remain unverified, but they highlight the growing
            intersection of neuroscience and artificial intelligence in tackling
            one of humanity’s greatest mysteries.
          </span>
        </div>
        <div className="m-auto mt-3 w-full max-w-4xl rounded-lg bg-yellow bg-opacity-70 p-8 text-purple shadow-lg">
          <h2 className="mb-4 text-2xl font-bold">Comments(3)</h2>
          <div className="space-y-4 text-xl">
            <div className="rounded-lg border p-4">
              <p className="">
                This is absolutely impossible. Consciousness isn't something you
                can replicate with machines.
              </p>
              <div className="flex text-lg">
                <span>- James Wu</span>
                <div className="ml-auto text-blue">1 December 2031</div>
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <p className="">
                Another overhyped claim with no real evidence. Wake me up when
                they publish something credible.
              </p>
              <div className="flex text-lg">
                <span>- LiAM</span>
                <div className="ml-auto text-blue">30 November 2031</div>
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <p className="">
                This is how dystopias begin. Someone needs to stop this before
                it gets out of hand.
              </p>
              <div className="flex text-lg">
                <span>- Sophia0406</span>
                <div className="ml-auto text-blue">30 November 2031</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Browser>
  );
};

const MailSite = ({ showEmail }: { showEmail: boolean }) => {
  const [showMailDetail, setShowMailDetail] = useState(0);

  const handleOpenMailClick = (idx: number) => {
    setShowMailDetail(idx);
  };
  return (
    <Browser url="https://nmail.com/u/0/#inbox">
      <div className="mx-2 my-8 w-full overflow-hidden rounded-md border-2 border-pink">
        {showMailDetail === 0 && showEmail && (
          <MailLineBtn
            name="MR.6b6c"
            sub="RE: What is this about?"
            time="14:21 AM"
            onClick={() => handleOpenMailClick(1)}
          />
        )}
        {showMailDetail === 1 && (
          <MailDetail
            sub="RE: What is this about?"
            onBack={() => handleOpenMailClick(0)}
          >
            Something you must uncover. Get into this PC.
            <br />
            192.168.45.234
          </MailDetail>
        )}

        {!showEmail && (
          <p className="mt-5 text-center text-lightPurple">No emails</p>
        )}
      </div>
    </Browser>
  );
};

const NotexitSite = ({ finish }: { finish: () => void }) => {
  const [component, setComponent] = useState(0);
  const [selected, setSelected] = useState<number[]>([]);
  const [error, setError] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleSelected = (index: number) => {
    if (selected.includes(index)) {
      setSelected(selected.filter((item) => item !== index));
    } else {
      setSelected([...selected, index]);
    }
  };

  const handleNextTo2 = () => {
    const sorted = selected.sort((a, b) => a - b);
    if (
      JSON.stringify(sorted) ===
      JSON.stringify([1, 2, 4, 5, 6, 7, 8, 9, 10, 11])
    ) {
      setError("");
      setComponent(2);
    } else {
      setError("Please try again.");
    }
    setSelected([]);
  };

  const handleNextTo3 = () => {
    if (inputValue === "19") {
      setComponent(3);
      setError("");
      finish();
    } else if (inputValue === "21") {
      setError("Gotcha! You're not human!");
    } else {
      setError("You're too dumb to be a robot though.");
    }
  };

  return (
    <Browser url="https://notexit.pro">
      <div className="flex w-full justify-center">
        {component === 0 && (
          <button
            onClick={() => setComponent(1)}
            className="m-auto flex items-center rounded-lg border px-10 py-4 pl-3 text-lightPurple transition hover:bg-opacity-90"
          >
            <div className="mr-5 h-6 w-6 rounded-lg border-2 border-purple bg-white"></div>
            I'm not a robot
          </button>
        )}

        {component === 1 && (
          <div className="m-auto flex flex-col rounded-lg border px-6 py-4 align-middle text-lightPurple transition hover:bg-opacity-90">
            <div>
              Select all squares with
              <br /> <b className="text-2xl">turtles</b>
            </div>
            <div className="text-base text-red">{error}</div>
            <div className="relative mt-5">
              <img className="h-full w-full object-cover" src={robotTurtle} />
              <div className="absolute left-0 top-0 grid h-full w-full grid-cols-4 grid-rows-4 gap-0">
                {Array.from({ length: 16 }).map((_, index) => (
                  <button
                    onClick={() => handleSelected(index)}
                    key={index}
                    className={clsx(
                      "h-full w-full transition hover:scale-95",
                      selected.includes(index)
                        ? "scale-95 border-[6px] border-red"
                        : "border-[2.5px] border-yellow",
                    )}
                  ></button>
                ))}
              </div>
            </div>
            <button
              onClick={handleNextTo2}
              className="ml-auto mt-5 rounded-lg border-2 border-purple bg-lightPurple px-6 py-2 text-yellow shadow-sm transition hover:bg-lightPurple"
            >
              Next
            </button>
          </div>
        )}

        {component === 2 && (
          <div className="m-auto flex min-w-96 flex-col rounded-lg border px-6 py-4 align-middle text-lightPurple transition hover:bg-opacity-90">
            <div className="m-auto">9 + 10 = ?</div>
            <div className="m-auto mb-3 text-base text-red">{error}</div>
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              type="number"
              className="mx-2 h-10 rounded-lg bg-white bg-opacity-40 p-2 placeholder-black"
            />
            <button
              onClick={handleNextTo3}
              className="ml-auto mt-5 rounded-lg border-2 border-purple bg-lightPurple px-6 py-2 text-yellow shadow-sm transition hover:bg-lightPurple"
            >
              Next
            </button>
          </div>
        )}

        {component === 3 && (
          <div className="mt-10 text-lightPurple">
            Nothing exit here, what are you expect?
          </div>
        )}
      </div>
    </Browser>
  );
};

export default Day2;
