let playerName = "";

const setPlayerName = (name: string) => {
  playerName = name;
};

const getPlayerName = () => {
  return playerName;
};

export { getPlayerName, setPlayerName };
