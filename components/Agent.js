let result = fetch(
  'https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=pt-BR'
)
  .then(async (response) => {
    const responseObject = await response.json()
    console.log(responseObject.data)
    return responseObject.data
  })
  .then((data) => data)

function getCurrentAgent() {
  const items = document.querySelectorAll('li')
  items.forEach((item) =>
    item.addEventListener('click', () => {
      const currentAgent = result.filter((element) => element.id === item.id)
      console.log(currentAgent)
    })
  )

  function createAgentComponent(agent) {
    return `
    <section class="agent-container" style="background: linear-gradient(140deg, #c7f458ff, #d56324ff, #3a2656ff, #3a7233ff)" />

      <figure>
        <img class="img-name-agent" width="600" src="https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/background.png" alt="">
        <img class="image-agent"width=600 src="https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/fullportrait.png"/>
      </figure>
      <div class="info-agent">
          <div class="item">
            <span> Function </span>
            <h2> Name </h2>
          </div>
          <article class="item">
            <p> Descrição aqui Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar metus eu quam tincidunt, eget laoreet nulla bibendum. Nullam nec justo eu tellus congue finibus sed in ligula.  </p>
          </article>
          <ul class="habilities-area item">
            <li> <img width=45 src="https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/abilities/ability1/displayicon.png"> </li>
            <li> <img width="45" src="https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/abilities/ability2/displayicon.png"></li>
            <li> <img width="45" src="https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/abilities/grenade/displayicon.png"> </li>
            <li> <img width="45" src="https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/abilities/ultimate/displayicon.png"> </li>
          </ul>
          <article class="item">
                    <p id="description-hability" > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar metus eu quam tincidunt, eget laoreet nulla bibendum. Nullam nec justo eu tellus congue finibus sed in ligula.  </p>
          </article>


      </div>

    </section>
    `
  }
}
