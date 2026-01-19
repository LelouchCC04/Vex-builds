const BUILDS = {
  standard: {
    title: "Padrão (Consistência) • Ranked",
    when: [
      "Você quer a versão mais estável e 'sempre boa'",
      "Inimigo tem mobilidade / engages previsíveis",
      "Você quer dar dano e aguentar sem depender de snowball"
    ],
    badges: ["Mais consistente", "TF longa", "Anti-mobilidade"],
    runes: {
      primary: "Determinação: Pós-Choque • Fonte da Vida (Sup) / Golpe de Escudo (Mid/Top) • Condicionamento • Inabalável (ou Crescimento Excessivo no Top)",
      secondary: "Feitiçaria: Faixa de Fluxo de Mana • Transcendência",
      shards: "Aceleração • Adaptativo • Vida"
    },
    items: [
      ["1º", "Coração de Aço", "Vida + dano escalável; ótimo para fights longas"],
      ["2º", "Botas (Mercúrio ou Blindadas)", "Mercúrio vs CC/AP • Blindadas vs AD/AA"],
      ["3º", "Liandry", "Dano consistente contra bruisers/tanks"],
      ["4º", "Jak’Sho", "Você vira frontline de verdade nas TFs"],
      ["5º", "Ímpeto Cósmico", "Reposicionamento + uptime de skills"],
      ["6º", "Criptobloom", "Pen mágica + cura em team fight"]
    ],
    swaps: [
      "Se tiver muita cura no inimigo: trocar Criptobloom por Morello",
      "Se estiver sendo focado: inserir Zhonya (geralmente no lugar do 5º ou 6º)",
      "Se precisa de mais controle: Rylai no lugar do 5º (ou como 6º)"
    ],
    play: [
      "Early: farm seguro, fear para punir engage.",
      "Mid: roams com ult + fights 2v2/3v3.",
      "Late: frontline AP; zoneia carries; use R(recast)+Flash+W/Fear em objetivos."
    ]
  },

  antiad: {
    title: "Anti-AD / Auto-ataque • Contra Caitlyn, Trynda, Irelia, etc.",
    when: [
      "Time inimigo tem 3+ fontes de dano AD",
      "ADC forte e/ou campeões de auto-ataque",
      "Você precisa sobreviver ao DPS físico e segurar linha"
    ],
    badges: ["Anti-ADC", "Anti-AA", "Mais armadura"],
    runes: {
      primary: "Determinação: Pós-Choque • Golpe de Escudo • Condicionamento • Inabalável (ou Crescimento Excessivo no Top)",
      secondary: "Feitiçaria (padrão) ou Inspiração (se quiser Hexflash no Sup)",
      shards: "Aceleração • Armadura • Vida"
    },
    items: [
      ["1º", "Coração de Aço", "Você continua escalando HP e dano"],
      ["2º", "Botas Blindadas", "Reduz dano de AA e pressão AD"],
      ["3º", "Liandry", "Dano consistente mesmo buildando defensivo"],
      ["4º", "Coração Congelado", "Mana + armadura + reduz AS inimigo (muito forte vs ADC)"],
      ["5º", "Jak’Sho", "Fecha resistências e te deixa 'imortal' em TF longa"],
      ["6º", "Ímpeto Cósmico ou Criptobloom", "Ímpeto se precisa kite • Criptobloom se falta pen/sustain"]
    ],
    swaps: [
      "Se o inimigo tiver crítico pesado: Randuin é opção (no lugar do 6º)",
      "Se precisar sobreviver a all-in: Zhonya entra muito bem",
      "Se o time inimigo não tem MR: Ímpeto pode vir antes do item defensivo final"
    ],
    play: [
      "Jogue para 'absorver' a pressão do AD e guardar fear para quando eles commitarem.",
      "Foque em fights longas: Congelado + Jak’Sho punem AA.",
      "Em TF: marque o ADC; seu trabalho é tirar espaço e tempo dele."
    ]
  },

  antipoke: {
    title: "Anti-Poke / Long Range • Contra Xerath, Vel’Koz, Lux, Cait + Morg",
    when: [
      "Inimigo tem poke forte e controle de espaço",
      "Você está apanhando antes da fight começar",
      "Você precisa entrar com segurança e não perder metade da vida andando"
    ],
    badges: ["Anti-poke", "Mais MR/segurança", "Entrada mais segura"],
    runes: {
      primary: "Determinação: Pós-Choque • Fonte da Vida (Sup) / Golpe de Escudo (Mid) • Condicionamento • Inabalável",
      secondary: "Feitiçaria: Faixa de Mana • Transcendência (ou Inspiração com Hexflash + Perspicácia no Sup)",
      shards: "Aceleração • Resistência Mágica • Vida"
    },
    items: [
      ["1º", "Coração de Aço", "Escala HP e ajuda a não ser deletado"],
      ["2º", "Botas de Mercúrio", "Tenacidade + MR contra CC/poke"],
      ["3º", "Liandry", "Você ainda precisa de dano consistente"],
      ["4º", "Jak’Sho", "Sustenta fights e reduz o risco de engage"],
      ["5º", "Zhonya (prioridade)", "Ferramenta anti-burst/anti-poke na hora do engage"],
      ["6º", "Criptobloom ou Ímpeto", "Criptobloom se quer sustain/pen • Ímpeto se quer mobilidade constante"]
    ],
    swaps: [
      "Se tiver escudos problemáticos: item anti-escudo/pen (dependendo do patch) no lugar do 6º",
      "Se curas inimigas forem altas: Morello",
      "Se precisa de controle extra pra alcançar: Rylai no lugar do 6º"
    ],
    play: [
      "Não aceite ficar 'tomando' poke: jogue por neblina, flancos curtos e objetivos.",
      "Zhonya é a chave: entra, fear, trava o jogo, e seu time chega.",
      "Engage ideal: R(recast)+Flash+W/Fear quando o inimigo se agrupa ou se sente seguro."
    ]
  }
};

const panel = document.getElementById("panel");
const tabs = document.querySelectorAll(".tab");

function render(buildKey){
  const b = BUILDS[buildKey];

  panel.innerHTML = `
    <div class="grid">
      <div class="card">
        <h2>${b.title}</h2>
        <p><strong>Quando usar:</strong></p>
        <ul class="list">
          ${b.when.map(x => `<li>${x}</li>`).join("")}
        </ul>
        <div class="badge-row">
          ${b.badges.map(x => `<span class="badge">${x}</span>`).join("")}
        </div>
      </div>

      <div class="card">
        <h2>🧠 Runas</h2>
        <p><strong>Primária:</strong> ${b.runes.primary}</p>
        <p><strong>Secundária:</strong> ${b.runes.secondary}</p>
        <p><strong>Fragmentos:</strong> ${b.runes.shards}</p>
      </div>
    </div>

    <div class="card" style="margin-top:16px;">
      <h2>🧾 Itens (ordem)</h2>
      <table class="table">
        <thead>
          <tr><th>Ordem</th><th>Item</th><th>Por quê</th></tr>
        </thead>
        <tbody>
          ${b.items.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join("")}
        </tbody>
      </table>
    </div>

    <div class="grid" style="margin-top:16px;">
      <div class="card">
        <h2>🔁 Trocas rápidas</h2>
        <ul class="list">
          ${b.swaps.map(x => `<li>${x}</li>`).join("")}
        </ul>
      </div>
      <div class="card">
        <h2>🛡️ Como jogar</h2>
        <ul class="list">
          ${b.play.map(x => `<li>${x}</li>`).join("")}
        </ul>
      </div>
    </div>
  `;
}

tabs.forEach(btn=>{
  btn.addEventListener("click", ()=>{
    tabs.forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    render(btn.dataset.build);
  });
});

// Inicial
render("standard");
