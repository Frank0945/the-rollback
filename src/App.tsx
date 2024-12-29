import { useEffect, useState } from "react";
import useSound from "use-sound";

import bgm from "./assets/sounds/bgm.mp3";
import D1 from "./days/D1";
import preloadResources from "./preloadResources.ts";
import sizeAdapter from "./sizeAdapter.ts";

const App = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    preloadResources().then(() => {
      setLoaded(true);
    });
  }, []);

  if (!loaded)
    return (
      <div className="-mt-6 flex h-full animate-pulse items-center justify-center text-4xl text-yellow">
        Loading Assets...
      </div>
    );

  return <Stage />;
};

const Stage = () => {
  const [play] = useSound(bgm, { loop: true });

  useEffect(() => {
    sizeAdapter();
    play();
  }, [play]);

  return <D1 />;
};

export default App;
