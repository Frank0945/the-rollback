import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import useSound from "use-sound";

import Day1 from "./days/Day1.tsx";
import Day2 from "./days/Day2.tsx";
import Day3 from "./days/Day3.tsx";
import Cookie from "./overlays/Cookie.tsx";
import Name from "./overlays/Name.tsx";
import preloadResources, { bgm } from "./preloadResources.ts";
import Cover from "./scenes/Cover.tsx";
import sizeAdapter from "./sizeAdapter.ts";

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const [loadStatus, setLoadStatus] = useState("");
  const [, setCookie] = useCookies(["password"]);

  useEffect(() => {
    const password = "iloveneurouwu";
    setCookie("password", password, { domain: "itch.io", path: "/" });
    setCookie("password", password, {
      domain: "html-classic.itch.zone",
      path: "/",
    });
    setCookie("password", password, { domain: "trien777.itch.io", path: "/" });

    sizeAdapter();
    preloadResources(setLoadStatus).then(() => {
      setLoaded(true);
    });
  }, [setCookie]);

  if (!loaded)
    return (
      <div className="-mt-6 flex h-full animate-pulse items-center justify-center text-4xl text-yellow">
        Loading Assets...{loadStatus}
      </div>
    );

  return <Stage />;
};

const Stage = () => {
  const [play] = useSound(bgm, { loop: true });
  const [scene, setScene] = useState(0);
  const [overlay, setOverlay] = useState(-1);

  useEffect(() => {
    play();
  }, [play]);

  const nextScene = () => {
    if (scene === 3) {
      setOverlay(-1);
      setScene(0);
    } else {
      setScene((prev) => prev + 1);
    }
  };

  return (
    <>
      {scene === 0 && (
        <>
          <Cover nextScene={() => setOverlay(0)} />
          {overlay === 0 && <Cookie next={() => setOverlay(1)} />}
          {overlay === 1 && <Name next={nextScene} />}
        </>
      )}
      {scene === 1 && <Day1 nextScene={nextScene} />}
      {scene === 2 && <Day2 nextScene={nextScene} />}
      {scene === 3 && <Day3 nextScene={nextScene} />}
    </>
  );
};

export default App;
