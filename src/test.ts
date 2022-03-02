import TDKAPI from "./app";

const api = new TDKAPI();

async function run() {
  await api.getProVerbs("keyif").then((a) => {
    console.log(a);
  });
}

run();
