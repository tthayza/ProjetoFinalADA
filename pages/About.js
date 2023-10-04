// import { animacao } from '../scripts/about.js';

export const renderAboutV2 = () => {
    // animacao();
    return `
    <section class="wrapper">
    <div class="cols cols0">
        <span class="topline">Hello</span>
        <h1>I'm <span class="multiText">Gamer</span> </h1>
        <p class="paragrafo">Valorant é um FPS tático onde duas equipes de cinco jogadores competem para plantar ou desarmar um dispositivo chamado Spike. Cada jogador tem uma única vida por rodada, com um total de 25 rodadas. A equipe que ganhar 13 rodadas primeiro vence. Um time ataca enquanto o outro defende. O time atacante deve escoltar a bomba para um dos três pontos do mapa (A, B ou C). A partida termina quando todos os membros de um time são derrotados, quando a bomba é detonada ou quando o time atacante não cumpre seu objetivo no tempo determinado.</p>
        <div class="btns">
        <button> <a href="https://playvalorant.com/pt-br/?gad=1&gclid=Cj0KCQjwmvSoBhDOARIsAK6aV7hHuuktj5hbKwLTYMWhuEF_dOyOfaRxodUIhtxV705EHaEzZm2kZ2QaAjvwEALw_wcB&gclsrc=aw.ds"> Jogue agora!</a></button>
        <button> <a href="https://playvalorant.com/pt-br/news/announcements/codigo-da-comunidade-de-valorant/">Comunidade</a></button>
        </div>
    </div>
    <div class="cols cols1">
        <div class="imgbox">
            <img src="https://vavaacademy.com/wp-content/uploads/2022/06/ia_10800000060.png">
        </div>
    </div>
  </section>
    `;
}