import axios from "axios";

const INITIAL_PLAYER_NUMBER = 222017;
let currentNumOfUnegistered = 0;
let currentPlayerNumber = INITIAL_PLAYER_NUMBER;
let currentPlayerNumberPlusOne = currentPlayerNumber + 1;
async function getPage() {
  if (currentNumOfUnegistered >= 10) {
    console.log(
      "Too manu unregistered numbers, resetting back to initial player number"
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
    console.log("status1: ", status1);
    if (status1 === 200) {
      console.log(
        `player number: ${currentPlayerNumber} is already registered, moving on...`
      );
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
    console.log("status2: ", status2);
    if (status2 === 200) {
      console.log(
        `player number: ${currentPlayerNumberPlusOne} is already registered, moving on...`
      );
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
