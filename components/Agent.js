export async function renderAgent(currenAgent) {

  let agent;

  if (currenAgent) {
    agent = currenAgent
    createAgentComponent(agent)
  } else {
    agent = fetch('../services/Gekko.json').then(r => r.json());
    createAgentComponent(await agent)
  }

}

function createAgentComponent(agent) {

  const mainElement = document.querySelector(`#main`);

  let mainAgent = document.querySelector(`.main-agent`);

  if (!mainAgent) {
    mainAgent = document.createElement('section');
    mainAgent.classList.add('main-agent');
  } else {

  }

  const agentElement = `
    <section class="agent-container" style="background: linear-gradient(140deg, #${agent[0].backgroundGradientColors[0]}, #${agent[0].backgroundGradientColors[1]}, #${agent[0].backgroundGradientColors[2]}, #${agent[0].backgroundGradientColors[3]})" />

      <figure>
        <img class="image-agent"src=${agent[0].fullPortrait}/>
      </figure>
      <div class="info-agent">
          <div class="item">
            <span>${agent[0].role.displayName}</span>
            <h2>${agent[0].displayName}</h2>
          </div>
          <article class="item">
            <p>${agent[0].description}</p>
          </article>
          <ul class="habilities-area item">
            <li id="skill-1" data-abilitie> <img width="45" src=${agent[0].abilities[0].displayIcon}> </li>
            <li id="skill-2" data-abilitie> <img width="45" src=${agent[0].abilities[1].displayIcon}></li>
            <li id="skill-3" data-abilitie> <img width="45" src=${agent[0].abilities[2].displayIcon}> </li>
            <li id="skill-4" data-abilitie> <img width="45" src=${agent[0].abilities[3].displayIcon}> </li>
          </ul>
          <article class="item">
                    <p id="description-hability" >${agent[0].abilities[0].description}</p>
          </article>
          <article class="item">
                    <p id="description-role" >
                      ${agent[0].role.description}
                    </p>
          </article>


      </div>

    </section>
    `

  mainAgent.innerHTML = agentElement;

  mainAgent.querySelectorAll('[data-abilitie]').forEach(element => {
    element.addEventListener('click', () => {
      changeSkillDesc(element.id, agent)
    })
  })
  mainElement.appendChild(mainAgent);

  const imagemDefundo = mainAgent.querySelector('.image-agent');

  imagemDefundo.style.backgroundImage = `url(${agent[0].background})`;
}


function changeSkillDesc(id, agent) {
  const displaySkill = document.querySelector('#description-hability');
  
  switch (id) {
    case "skill-2":
      displaySkill.textContent = agent[0].abilities[1].description;
      break;
    case "skill-3":
      displaySkill.textContent = agent[0].abilities[2].description;
      break;
    case "skill-4":
      displaySkill.textContent = agent[0].abilities[3].description;
      break;
    default:
      displaySkill.textContent = agent[0].abilities[0].description;
      break;
  }
}
