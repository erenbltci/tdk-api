import { TDKAPI } from "./app";

const api = new TDKAPI();

async function run() {
  await api.getWord("baklava").then((a) => {
    console.log(a);
  });
}

run();
