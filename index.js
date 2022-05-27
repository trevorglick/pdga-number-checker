import axios from "axios";

const INITIAL_PLAYER_NUMBER = 222055;
let currentNumOfUnegistered = 0;
let currentPlayerNumber = INITIAL_PLAYER_NUMBER;
let currentPlayerNumberPlusOne = currentPlayerNumber + 1;
async function getPage() {
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
    const response1 = await axios.get(
      `https://www.pdga.com/player/${currentPlayerNumber}`
    );
    const status1 = response1.status;
    if (status1 === 200) {
      console.log(
        `player number: ${currentPlayerNumber} is already registered, moving on...`
      );
      currentNumOfUnegistered = 0;
      currentPlayerNumber++;
    }
  } catch (error) {
    console.log(`player number: ${currentPlayerNumber} is not registered`);
    currentNumOfUnegistered++;
    currentPlayerNumber++;
  }

  try {
    const response2 = await axios.get(
      `https://www.pdga.com/player/${currentPlayerNumberPlusOne}`
    );
    const status2 = response2.status;
    if (status2 === 200) {
      console.log(
        `player number: ${currentPlayerNumberPlusOne} is already registered, moving on...`
      );
      currentNumOfUnegistered = 0;
      currentPlayerNumberPlusOne++;
    }
  } catch (error) {
    console.log(
      `player number: ${currentPlayerNumberPlusOne} is not registered`
    );
    currentNumOfUnegistered++;
    currentPlayerNumberPlusOne++;
  }
}
setInterval(getPage, 2000);
