import axios from "axios";

let currentPlayerNumber = 221989;
async function getPage() {
  console.log("CURRENT PLAYER NUMBER BEING SEARCHED: ", currentPlayerNumber);
  try {
    const response = await axios.get(
      `https://www.pdga.com/player/${currentPlayerNumber}`
    );
    const status = response.status;
    if (status === 200) {
      console.log(
        "CURRENT PLAYER NUMBER IS REGISTERED, INCREMENTING PLAYER NUMBER"
      );
      currentPlayerNumber++;
    }
  } catch (error) {
    console.log(
      "CURRENT PLAYER NUMBER IS NOT REGISTERED: ",
      currentPlayerNumber
    );
  }
}
setInterval(getPage, 5000);
