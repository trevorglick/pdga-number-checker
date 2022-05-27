import axios from "axios";

let currrentPlayerNumber = 221989;
async function getPage() {
  console.log("CURRENT PLAYER NUMBER BEING SEARCHED: ", currrentPlayerNumber);
  try {
    const response = await axios.get(
      `https://www.pdga.com/player/${currrentPlayerNumber}`
    );
    const status = response.status;
    if (status === 200) {
      console.log(
        "CURRENT PLAYER NUMBER IS REGISTERED, INCREMENTING PLAYER NUMBER"
      );
      currrentPlayerNumber++;
    }
  } catch (error) {
    console.log(
      "CURRENT PLAYER NUMBER IS NOT REGISTERED: ",
      currrentPlayerNumber
    );
  }
}
setInterval(getPage, 5000);
