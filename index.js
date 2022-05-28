import axios from "axios";

const INITIAL_PLAYER_NUMBER = 222130;
let currentNumOfUnegistered = 0;
let currentPlayerNumber = INITIAL_PLAYER_NUMBER;
let currentPlayerNumberPlusOne = currentPlayerNumber + 1;
async function getPage() {
  const REGEX =
    /Your search returned no results. Try a less specific search./gm;
  if (currentNumOfUnegistered >= 20) {
    console.log(
      "Too many unregistered numbers, resetting back to initial player number"
    );
    currentPlayerNumber = INITIAL_PLAYER_NUMBER;
    currentPlayerNumberPlusOne = currentPlayerNumber + 1;
    currentNumOfUnegistered = 0;
  }
  console.log(
    "player numbers being searched... ",
    `${currentPlayerNumber} and ${currentPlayerNumberPlusOne}`
  );
  try {
    const response = await axios.get(
      `https://www.pdga.com/search?keywords=${currentPlayerNumber}`
    );
    const found = response.data.match(REGEX);
    if (found === null) {
      console.log(
        `player number: ${currentPlayerNumber} is already registered, moving on...`
      );
      currentNumOfUnegistered = 0;
      currentPlayerNumber++;
    } else {
      console.log(`player number: ${currentPlayerNumber} is not registered`);
      currentNumOfUnegistered++;
      currentPlayerNumber++;
    }
  } catch (error) {
    console.log("there was an error with the axios get: ", error);
  }

  try {
    const response = await axios.get(
      `https://www.pdga.com/search?keywords=${currentPlayerNumberPlusOne}`
    );
    const found = response.data.match(REGEX);
    if (found === null) {
      console.log(
        `player number: ${currentPlayerNumberPlusOne} is already registered, moving on...`
      );
      currentNumOfUnegistered = 0;
      currentPlayerNumberPlusOne++;
    } else {
      console.log(
        `player number: ${currentPlayerNumberPlusOne} is not registered`
      );
      currentNumOfUnegistered++;
      currentPlayerNumberPlusOne++;
    }
  } catch (error) {
    console.log("there was an error with the axios get: ", error);
  }
}
setInterval(getPage, 2000);
