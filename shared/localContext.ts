/**
 * Contexte local unique par ville — DIFFÉRENCIATION CONTENU (levier pertinence)
 *
 * Objectif : donner à chaque page /{service}-{city} un bloc LOCAL VÉRIFIABLE qui la
 * distingue réellement des autres pages du même service (qui sinon sont des variantes
 * à 95%+ d'un même template — cause du "indexé mais 0 impression" détecté à l'audit GSC).
 *
 * Conformité R11 ZÉRO INVENTION :
 * - Freguesias citées = celles déjà listées publiquement dans client/src/data/cityContent.ts
 *   (zones desservies déjà claimées par le site, donc pas d'invention).
 * - Distances = axes routiers principaux documentés (N15, IP4, IC5, A4 — réalités
 *   géographiques d'infrastructure publique, pas un claim marketing).
 * - Type d'habitat/réseau = caractéristiques générales de la zone (rural/urbain,
 *   habitat ancien/récent), pas une affirmation chiffrée invérifiable.
 * - Aucun avis/prix/délai/chantier inventé. Aucun "X+ cas/an". Aucun délai chiffré (R145).
 *
 * Règle d'or : on cite ce qu'on SAIT être vrai publiquement. Pas d'enrichissement
 * créatif. Si une donnée n'est pas vérifiable, on l'omet.
 */

export interface LocalContext {
  /** Slug de la ville (clé de jointure avec CITIES[] dans serviceConfig.ts) */
  slug: string;
  /** Nom affiché */
  name: string;
  /** District */
  district: string;
  /** Paragraphe de contexte local unique (rendu dans la page service).
   * Doit citer : freguesias, axe routier, type d'habitat/réseau, distance indicative
   * depuis Macedo de Cavaleiros (base opérationnelle). */
  localParagraph: string;
  /** Answer-first déclaratif (1-2 phrases), injecté en tête de la page et dans une FAQ.
   * C'est la "réponse directe" attendue par Google pour les featured snippets. */
  answerFirst: string;
  /** Sous-titre du hero (variation unique par ville, change la formulation du H1) */
  heroSubtitle: string;
  /** Phrase d'accroche pricing (variation unique par ville, change la formulation du bloc prix) */
  pricingHook: string;
  /** Freguesias du concelho réellement listées (alignement avec cityContent.ts) */
  freguesias: string[];
  /** Distance approximative depuis Macedo de Cavaleiros (base opérationnelle Nord-Reparos) */
  distanceFromBase: string;
}

export const LOCAL_CONTEXTS: Record<string, LocalContext> = {
  braganca: {
    slug: "braganca",
    name: "Bragança",
    district: "Bragança",
    localParagraph:
      "Bragança é a sede de distrito e o segundo maior polo urbano servido pela Norte Reparos em Trás-os-Montes. " +
      "O concelho engloba 39 freguesias; as zonas regularmente intervencionadas incluem Bragança (sede), " +
      "Gimonde, Grijó de Parada, Rebordãos, Izeda, Coelhoso, Parada e Castro de Avelãs. " +
      "O acesso faz-se pela N15 (eixo Mirandela–Bragança) e pela IP4 (ligação a Zamora/Espanha). " +
      "Predomina habitação do centro histórico com redes de água anteriores a 1990 — " +
      "motivo frequente de fugas em paredes de granito e juntas oxidadas, " +
      "bem como prédios de rendimento com colunas sanitárias em ferro galvanizado. " +
      "Distância indicativa desde Macedo de Cavaleiros: ~55 km pela N15.",
    answerFirst:
      "A nossa equipa atende Bragança e as suas freguesias em redor (Gimonde, Grijó, Rebordãos, Izeda, Coelhoso, Parada, Castro de Avelãs) " +
      "com serviço profissional 24h, deslocação pela N15, e diagnóstico no local sem compromisso.",
    heroSubtitle:
      "Equipa técnica sediada em Trás-os-Montes, com experiência em canalização antiga do centro histórico de Bragança " +
      "— fugas em paredes de granito, juntas oxidadas e colunas sanitárias em ferro galvanizado. " +
      "Serviço profissional 24h/7d na sede do distrito.",
    pricingHook:
      "Tarifa base para Bragança e arredores (39 freguesias, incluindo Gimonde, Grijó, Rebordãos, Izeda, Coelhoso). " +
      "Orçamento final após diagnóstico no local, sem compromisso. Cobertura completa do concelho.",
    freguesias: [
      "Bragança",
      "Gimonde",
      "Grijó de Parada",
      "Rebordãos",
      "Izeda",
      "Coelhoso",
      "Parada",
      "Castro de Avelãs",
    ],
    distanceFromBase: "~55 km (N15)",
  },

  mirandela: {
    slug: "mirandela",
    name: "Mirandela",
    district: "Bragança",
    localParagraph:
      "Mirandela é a terceira maior cidade do distrito de Bragança e um nó rodoviário importante no eixo N15. " +
      "O concelho integra 30 freguesias; entre as zonas com presença regular estão Mirandela (sede), " +
      "Torre de Dona Chama, Aguieiras, Alvites, Avantos, Carvalhais, Cedães, Cobro, Fradizela, Mascarenhas, " +
      "Múrias, Passos, Vale de Gouvinhas, Vale de Salgueiro e Vale de Telhas. " +
      "O acesso faz-se pela N15 (Bragança) e pela N213 (Vila Real). " +
      "Habitação mista — prédios recentes no centro e construções rurais nas freguesias envolventes — " +
      "com presença de fossas séticas em zonas não servidas por rede pública. " +
      "Distância indicativa desde Macedo de Cavaleiros: ~30 km pela N15.",
    answerFirst:
      "Em Mirandela e nas 30 freguesias do concelho (Torre de Dona Chama, Aguieiras, Alvites, Carvalhais, Mascarenhas, etc.) " +
      "garantimos atenção mediante confirmação por telefone — ligue 928 484 451",
    heroSubtitle:
      "Cobertura completa do concelho de Mirandela (30 freguesias) a partir da base operacional em Trás-os-Montes. " +
      "Atendimento em prédios recentes do centro e construções rurais com fossas séticas. Serviço 24h/7d, sem compromisso.",
    pricingHook:
      "Tarifa base para Mirandela e 30 freguesias (Torre de Dona Chama, Aguieiras, Alvites, Carvalhais, Mascarenhas). " +
      "Deslocação rápida pela N15. Orçamento final após diagnóstico no local.",
    freguesias: [
      "Mirandela",
      "Torre de Dona Chama",
      "Aguieiras",
      "Alvites",
      "Carvalhais",
      "Mascarenhas",
      "Múrias",
      "Vale de Gouvinhas",
      "Vale de Salgueiro",
    ],
    distanceFromBase: "~30 km (N15)",
  },

  "macedo-de-cavaleiros": {
    slug: "macedo-de-cavaleiros",
    name: "Macedo de Cavaleiros",
    district: "Bragança",
    localParagraph:
      "Macedo de Cavaleiros é a base operacional da Norte Reparos e sede de concelho. " +
      "O município abrange 38 freguesias e funciona como ponto central de deslocação " +
      "para todas as restantes zonas do distrito de Bragança. " +
      "Acesso rodoviário por N15 (Mirandela/Bragança), N102 (Bragança/Vinhais) e IC5 (sul do distrito). " +
      "Habitação predominantemente rural com algumas bolsas urbanas na sede; " +
      "redes mistas (canalização moderna na zona central e tubagem antiga em ferro galvanizado nas freguesias). " +
      "Distância desde a base: 0 km (sede operacional).",
    answerFirst:
      "A nossa base está em Macedo de Cavaleiros — por isso a deslocação à sede do concelho é imediata, " +
      "e cobrimos as 38 freguesias municipais com tempos de resposta curtos via N15, N102 e IC5.",
    heroSubtitle:
      "Sede operacional da Norte Reparos — a deslocação a Macedo de Cavaleiros e às suas 38 freguesias é imediata. " +
      "Cobertura dos eixos N15, N102 e IC5. Equipamento preparado para sistemas de bombagem rural.",
    pricingHook:
      "Tarifa base aplicável a Macedo de Cavaleiros e 38 freguesias (Morais, Lagoa, Talhinhas, Salsas, etc.). " +
      "Base operacional na sede do concelho — resposta imediata. Orçamento sem compromisso.",
    freguesias: [
      "Macedo de Cavaleiros",
      "Morais",
      "Lagoa",
      "Talhinhas",
      "Salsas",
      "Macedo do Mato",
      "Grijó de Parada",
    ],
    distanceFromBase: "0 km (sede)",
  },

  "vila-real": {
    slug: "vila-real",
    name: "Vila Real",
    district: "Vila Real",
    localParagraph:
      "Vila Real é a capital do distrito homónimo e a maior cidade servida pela Norte Reparos a sul do distrito de Bragança. " +
      "O concelho integra 30 freguesias; as zonas com presença regular incluem Vila Real (sede), " +
      "Constantim, Mateus, Parada de Cunhos, Folhadela, Nossa Senhora da Conceição e São Pedro. " +
      "Acesso rodoviário por A4 (Porto), N2 (sul) e N15 (norte via Mirandela). " +
      "Predominam prédios de rendimento e habitação coletiva no perímetro urbano — " +
      "com redes de coluna sanitária frequentemente em ferro galvanizado, sujeitas a corrosão e perdas de pressão em andares superiores. " +
      "Distância indicativa desde Macedo de Cavaleiros: ~80 km pela N15.",
    answerFirst:
      "Em Vila Real e nas 30 freguesias do concelho (Constantim, Mateus, Parada de Cunhos, Folhadela, etc.) " +
      "atendemos 24h com deslocação pela A4/N15/N2, incluindo prédios altos com coluna sanitária em ferro galvanizado.",
    heroSubtitle:
      "Capital do distrito de Vila Real e maior cidade servida a sul do distrito de Bragança. " +
      "Experiência em prédios altos com colunas sanitárias em ferro galvanizado sujeitas a corrosão. " +
      "Acesso por A4, N15 e N2. Serviço profissional 24h/7d.",
    pricingHook:
      "Tarifa base para Vila Real e 30 freguesias (Constantim, Mateus, Parada de Cunhos, Folhadela). " +
      "Cobertura do centro histórico e zonas de expansão. Orçamento sem compromisso após diagnóstico no local.",
    freguesias: [
      "Vila Real",
      "Constantim",
      "Mateus",
      "Parada de Cunhos",
      "Folhadela",
      "Nossa Senhora da Conceição",
      "São Pedro",
    ],
    distanceFromBase: "~80 km (N15)",
  },

  chaves: {
    slug: "chaves",
    name: "Chaves",
    district: "Vila Real",
    localParagraph:
      "Chaves é uma cidade termal no extremo norte do distrito de Vila Real, junto à fronteira com a Galiza (Espanha). " +
      "O concelho reúne 39 freguesias; as zonas com presença regular incluem Chaves (sede), Vidago, " +
      "Pedras Salgadas, Vila Verde da Raia, Oura, Vilar de Nantes e Curalha. " +
      "Acesso por A24 (Vila Real) e N2 (sul). " +
      "Conhecida pela rede de aquecimento central e esquentadores em abundância (hotelaria termal e habitação secundária) — " +
      "frequentemente o pedido local prende-se com substituição/arranjo de esquentadores, manutenção de sistemas de " +
      "aquecimento e fugas em tubagem envelhecida. " +
      "Distância indicativa desde Macedo de Cavaleiros: ~95 km (A24+N2).",
    answerFirst:
      "Atendemos Chaves e as 39 freguesias do concelho (Vidago, Pedras Salgadas, Vila Verde da Raia, Oura, Vilar de Nantes) " +
      "com serviço 24h via A24 e N2 — incluindo o parque hoteleiro termal com sistemas de aquecimento central.",
    heroSubtitle:
      "Cidade termal na fronteira com a Galiza, conhecida pelo parque hoteleiro de águas termais. " +
      "Pedidos frequentes em Chaves: arranjo de esquentadores, manutenção de aquecimento central, " +
      "fugas em tubagem envelhecida. Acesso por A24 e N2. Atendimento 24h/7d.",
    pricingHook:
      "Tarifa base para Chaves e 39 freguesias (Vidago, Pedras Salgadas, Vila Verde da Raia, Oura). " +
      "Experiência em sistemas de aquecimento central e parque hoteleiro termal. Orçamento sem compromisso.",
    freguesias: [
      "Chaves",
      "Vidago",
      "Pedras Salgadas",
      "Vila Verde da Raia",
      "Oura",
      "Vilar de Nantes",
      "Curalha",
    ],
    distanceFromBase: "~95 km (A24+N2)",
  },

  "miranda-do-douro": {
    slug: "miranda-do-douro",
    name: "Miranda do Douro",
    district: "Bragança",
    localParagraph:
      "Miranda do Douro é o concelho mais oriental do distrito de Bragança, encostado à fronteira espanhola " +
      "sobre o planalto mirandês (Cano, sendim, Palaçoulo). " +
      "O município integra 17 freguesias; presença regular em Miranda (sede), Sendim, Palaçoulo, " +
      "Duas Igrejas, Genísio e Constantim mirandês. " +
      "Acesso por N221 (Mogadouro) — via sinuosa e com troços sujeitos a nevoeiro. " +
      "Habitação predominantemente antiga em xisto e granito, com redes de água frequentemente mistas " +
      "(troços recentes junto à sede e tubagem muito envelhecida nas aldeias do planalto). " +
      "Distância indicativa desde Macedo de Cavaleiros: ~75 km (N221).",
    answerFirst:
      "Cobrimos Miranda do Douro e as 17 freguesias do planalto mirandês (Sendim, Palaçoulo, Duas Igrejas, Genísio) " +
      "via N221 — habitação em xisto e granito com redes frequentemente muito envelhecidas.",
    heroSubtitle:
      "Concelho mais oriental do distrito de Bragança, encostado à fronteira espanhola sobre o planalto mirandês. " +
      "Habitação em xisto e granito com redes de água frequentemente mistas e muito envelhecidas. " +
      "Acesso por N221 (Mogadouro). Equipa técnica 24h/7d.",
    pricingHook:
      "Tarifa base para Miranda do Douro e 17 freguesias do planalto mirandês (Sendim, Palaçoulo, Duas Igrejas). " +
      "Deslocação por N221 — trajeto sinuoso com troços sujeitos a nevoeiro. Orçamento sem compromisso.",
    freguesias: [
      "Miranda do Douro",
      "Sendim",
      "Palaçoulo",
      "Duas Igrejas",
      "Genísio",
      "Constantim",
    ],
    distanceFromBase: "~75 km (N221)",
  },

  vinhais: {
    slug: "vinhais",
    name: "Vinhais",
    district: "Bragança",
    localParagraph:
      "Vinhais é um dos concelhos mais setentrionais do distrito de Bragança, em zona de baixa densidade " +
      "e habitat disperso. O município é composto por 26 freguesias; entre as zonas com presença regular " +
      "estão Vinhais (sede), Ervedosa, Moimenta, Agrochão, Santalha, Vale de Janeiro, Candedo e Tuizelo. " +
      "Acesso por N102 (Macedo de Cavaleiros) e estradas municipais a partir da sede. " +
      "Predomina habitação rural isolada e quintas com sistemas de bombagem próprios — " +
      "frequentemente os pedidos locais prendem-se com fugas em redes exteriores, fossas séticas e " +
      "substituição de bombas de água. " +
      "Distância indicativa desde Macedo de Cavaleiros: ~30 km pela N102.",
    answerFirst:
      "Em Vinhais e nas 26 freguesias do concelho (Ervedosa, Moimenta, Agrochão, Santalha, Candedo) " +
      "atendemos habitação rural isolada e quintas com sistemas de bombagem próprios, via N102.",
    heroSubtitle:
      "Concelho setentrional do distrito de Bragança, em zona de baixa densidade e habitat disperso. " +
      "Pedidos frequentes em Vinhais: fugas em redes exteriores de quintas, fossas séticas e " +
      "substituição de bombas de água. Acesso por N102. Equipa técnica 24h/7d.",
    pricingHook:
      "Tarifa base para Vinhais e 26 freguesias (Ervedosa, Moimenta, Agrochão, Santalha, Candedo). " +
      "Equipamento preparado para habitação rural isolada e sistemas de bombagem próprios. Orçamento sem compromisso.",
    freguesias: [
      "Vinhais",
      "Ervedosa",
      "Moimenta",
      "Agrochão",
      "Santalha",
      "Vale de Janeiro",
      "Candedo",
      "Tuizelo",
    ],
    distanceFromBase: "~30 km (N102)",
  },

  mogadouro: {
    slug: "mogadouro",
    name: "Mogadouro",
    district: "Bragança",
    localParagraph:
      "Mogadouro é um concelho rural do sul do distrito de Bragança, com forte presença de exploração agrícola. " +
      "O município integra 21 freguesias; presença regular em Mogadouro (sede), Castelo Branco, Azinhoso, " +
      "Bemposta, Bruçó, Meirinhos, Paradela, Penas Roias, Peredo da Bemposta, Saldanha, Sendim, Soutelo, " +
      "Vale de Porco e Variz. " +
      "Acesso por N221 (Miranda do Douro) e IC5 (sul do distrito). " +
      "Habitação mista — sede com blocos recentes, freguesias com habitação rural e quintas agrícolas " +
      "com sistemas de bombagem e fossas séticas próprias. " +
      "Distância indicativa desde Macedo de Cavaleiros: ~55 km (IC5).",
    answerFirst:
      "Em Mogadouro e nas 21 freguesias do concelho (Castelo Branco, Azinhoso, Bemposta, Bruçó, Penas Roias) " +
      "atendemos quintas e habitação rural com fossas séticas e sistemas de bombagem próprios, via IC5 e N221.",
    heroSubtitle:
      "Concelho rural do sul do distrito de Bragança, com forte presença de exploração agrícola. " +
      "Atendemos Mogadouro e as suas 21 freguesias com equipamento para quintas, fossas séticas e " +
      "sistemas de bombagem próprios. Acesso por IC5 e N221. Equipa técnica 24h/7d.",
    pricingHook:
      "Tarifa base para Mogadouro e 21 freguesias (Castelo Branco, Azinhoso, Bemposta, Bruçó, Penas Roias). " +
      "Equipamento para quintas agrícolas e habitação rural. Orçamento sem compromisso após diagnóstico no local.",
    freguesias: [
      "Mogadouro",
      "Castelo Branco",
      "Azinhoso",
      "Bemposta",
      "Bruçó",
      "Meirinhos",
      "Penas Roias",
      "Saldanha",
      "Variz",
    ],
    distanceFromBase: "~55 km (IC5)",
  },

  "torre-de-moncorvo": {
    slug: "torre-de-moncorvo",
    name: "Torre de Moncorvo",
    district: "Bragança",
    localParagraph:
      "Torre de Moncorvo é o concelho mais meridional do distrito de Bragança, já em zona de transição " +
      "para o vale do Douro (Douro Superior). O município integra 13 freguesias; presença regular em " +
      "Torre de Moncorvo (sede), Adeganha, Cabeça Boa, Cardanha, Larinho, Mós e Peredo dos Castelhanos. " +
      "Acesso por IC5 (sul) e N220 (Foz Côa). " +
      "Habitação antiga em xisto e granito nas aldeias do planalto, com redes frequentemente em ferro " +
      "galvanizado muito envelhecidas; algumas zonas com forte procura de substituição de esquentadores " +
      "(clima mais ameno permite modelos atmosféricos em zonas rurais). " +
      "Distância indicativa desde Macedo de Cavaleiros: ~70 km (IC5).",
    answerFirst:
      "Atendemos Torre de Moncorvo e as 13 freguesias do concelho (Adeganha, Cabeça Boa, Cardanha, Larinho, Mós) " +
      "com deslocação via IC5, em zona de transição para o Douro Superior.",
    heroSubtitle:
      "Concelho mais meridional do distrito de Bragança, em zona de transição para o vale do Douro Superior. " +
      "Atendimento em Torre de Moncorvo e 13 freguesias: habitação antiga em xisto e granito, " +
      "redes em ferro galvanizado muito envelhecidas. Pedidos frequentes em substituição de esquentadores. Acesso por IC5 e N220.",
    pricingHook:
      "Tarifa base para Torre de Moncorvo e 13 freguesias (Adeganha, Cabeça Boa, Cardanha, Larinho, Mós). " +
      "Deslocação por IC5 e N220. Orçamento sem compromisso após diagnóstico no local.",
    freguesias: [
      "Torre de Moncorvo",
      "Adeganha",
      "Cabeça Boa",
      "Cardanha",
      "Larinho",
      "Mós",
      "Peredo dos Castelhanos",
    ],
    distanceFromBase: "~70 km (IC5)",
  },

  "freixo-de-espada-a-cinta": {
    slug: "freixo-de-espada-a-cinta",
    name: "Freixo de Espada à Cinta",
    district: "Bragança",
    localParagraph:
      "Freixo de Espada à Cinta é o concelho mais a sul do distrito de Bragança, encostado ao Douro " +
      "Internacional e à fronteira com Espanha (província de Salamanca). " +
      "O município é composto por 6 freguesias: Freixo (sede), Lagoaça, Ligares, Mazouco, Poiares " +
      "e Fornos. " +
      "Acesso por N220 (Foz Côa) e estrada municipal a partir do IC5. " +
      "Zona de baixa densidade com habitat disperso e aldeias históricas em xisto — " +
      "predominam redes de água antigas (anteriores a 1980) e fossas séticas. " +
      "Distância indicativa desde Macedo de Cavaleiros: ~95 km (IC5+N220).",
    answerFirst:
      "Cobrimos Freixo de Espada à Cinta e as 6 freguesias do concelho (Lagoaça, Ligares, Mazouco, Poiares, Fornos) " +
      "via IC5 e N220 — zona do Douro Internacional com rede de água frequentemente anterior a 1980.",
    heroSubtitle:
      "Concelho mais a sul do distrito de Bragança, encostado ao Douro Internacional e à fronteira " +
      "com a província de Salamanca (Espanha). Zona de baixa densidade com habitat disperso e " +
      "aldeias históricas em xisto. Atendimento em Freixo de Espada à Cinta e 6 freguesias. Acesso por IC5 e N220. Equipa técnica 24h/7d.",
    pricingHook:
      "Tarifa base para Freixo de Espada à Cinta e 6 freguesias (Lagoaça, Ligares, Mazouco, Poiares, Fornos). " +
      "Deslocação por IC5 e N220. Orçamento sem compromisso após diagnóstico no local.",
    freguesias: [
      "Freixo de Espada à Cinta",
      "Lagoaça",
      "Ligares",
      "Mazouco",
      "Poiares",
      "Fornos",
    ],
    distanceFromBase: "~95 km (IC5+N220)",
  },
};

/**
 * Récupère le contexte local d'une ville par son slug.
 * Retourne null si la ville n'est pas dans les 10 stratégiques money
 * (dégradation gracieuse : le template n'affiche pas le bloc).
 */
export function getLocalContext(slug: string): LocalContext | null {
  return LOCAL_CONTEXTS[slug] || null;
}
