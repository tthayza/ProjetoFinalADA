import memory from "./memory.js";
import { renderAgent } from "../components/Agent.js";

export default function createEventListener (dataTag){

    console.log(dataTag)

    const items = document.querySelectorAll(`[${dataTag}]`);

    items.forEach((item) => {
        item.addEventListener('click', () => {
            const currentAgent = memory.read().filter((element) => element.displayName === item.id)
            renderAgent(currentAgent);
          })
    })
}


