/**
 * FAQ Data for Norte-Reparos (Norte Reparos)
 * 
 * 20 perguntas frequentes otimizadas para SEO
 * Cobertura completa dos serviços de canalização em Trás-os-Montes
 */

export interface FAQItem {
 id: number;
 question: string;
 answer: string;
 category: string;
}

export const FAQ_DATA: FAQItem[] = [
 {
 id: 1,
 question: "Quanto custa chamar um canalizador em Bragança?",
 answer: "O custo de chamar um canalizador em Bragança varia consoante o tipo de intervenção. Desentupimentos: sanita 80-120€, lavatório 100€, lava-loiça 110€ (urgência noite: +50%). Arranjos de fugas: colmatação 88-100€, cano rebentado 140-180€. Instalações de esquentadores: a partir de 180€ (sem incluir o equipamento). Deslocação incluída nas zonas próximas. Trabalhamos com preços fixos transparentes - contacte-nos para confirmação sem compromisso.",
 category: "Preços"
 },
 {
 id: 2,
 question: "Como detetar uma fuga de água escondida?",
 answer: "Existem vários sinais que indicam uma fuga de água escondida: aumento inexplicável na fatura da água (mais de 20% sem mudança de hábitos), manchas de humidade nas paredes ou tetos, som de água a correr quando todas as torneiras estão fechadas, cheiro a mofo persistente, ou contador de água que continua a girar mesmo com tudo fechado. Para confirmar, feche todas as torneiras e registe o contador. Após 2 horas sem usar água, verifique novamente - se o contador mudou, há uma fuga. Utilizamos equipamento termográfico profissional para detetar fugas sem partir paredes, poupando tempo e dinheiro na arranjo.",
 category: "Diagnóstico"
 },
 {
 id: 3,
 question: "O que fazer em caso de fuga de água urgente?",
 answer: "Em caso de fuga urgente, siga estes passos imediatamente: 1) Feche a torneira de corte geral da água (normalmente junto ao contador), 2) Desligue a eletricidade se a água estiver perto de tomadas ou quadro elétrico, 3) Coloque baldes ou toalhas para conter a água, 4) Contacte-nos imediatamente pelo 928 484 451 ou WhatsApp - estamos disponíveis 24/7 para emergências. Tempo médio de resposta: 15-30 minutos em Bragança e arredores. Não tente arranjos provisórias com fita adesiva ou cola, pois podem agravar o problema e dificultar a arranjo definitiva.",
 category: "Emergências"
 },
 {
 id: 4,
 question: "Quanto tempo demora um desentupimento?",
 answer: "O tempo de desentupimento varia conforme a gravidade e localização da obstrução. Desentupimentos simples de sanitas ou lavatórios levam entre 30 a 60 minutos. Obstruções em canalizações principais podem demorar 1 a 3 horas. Casos complexos que requerem equipamento especializado (câmara de inspeção, máquina de desentupimento de alta pressão) podem levar até 4 horas. Na maioria dos casos (85%), resolvemos o problema na primeira visita. Utilizamos equipamento profissional que garante desentupimento completo e duradouro, evitando que o problema volte em poucos dias.",
 category: "Serviços"
 },
 {
 id: 5,
 question: "Como prevenir entupimentos nas canalizações?",
 answer: "Para prevenir entupimentos, siga estas práticas: nunca deite gordura pelo ralo (deixe solidificar e deite no lixo), use ralos com rede para apanhar cabelos e resíduos, evite deitar restos de comida pela pia, não deite produtos de higiene ou toalhitas pela sanita (mesmo as ditas 'biodegradáveis'), faça limpeza preventiva mensal com água a ferver e bicarbonato de sódio, e realize manutenção profissional anual das canalizações. Em cozinhas de restaurantes ou casas com uso intensivo, recomendamos limpeza profissional trimestral. Estas medidas reduzem em 90% o risco de entupimentos graves.",
 category: "Manutenção"
 },
 {
 id: 6,
 question: "Qual a vida útil de um esquentador?",
 answer: "A vida útil média de um esquentador é de 10 a 15 anos, dependendo da qualidade do equipamento, frequência de uso e manutenção realizada. Esquentadores a gás tendem a durar mais (12-15 anos) que os elétricos (8-12 anos). Sinais de que precisa substituir: idade superior a 12 anos, arranjos frequentes (mais de 2 por ano), água que não aquece uniformemente, ruídos estranhos, consumo de gás ou eletricidade aumentado, ou fugas de água recorrentes. Manutenção anual profissional pode prolongar a vida útil em 3-5 anos. Oferecemos serviço de manutenção preventiva que inclui limpeza, verificação de segurança e ajustes.",
 category: "Equipamentos"
 },
 {
 id: 7,
 question: "Esquentador a gás ou elétrico - qual escolher?",
 answer: "A escolha depende das suas necessidades e instalação existente. Esquentador a gás: mais económico no uso diário (60% menos custos energéticos), aquece água instantaneamente, ideal para famílias numerosas, requer ventilação adequada e manutenção anual obrigatória. Esquentador elétrico: instalação mais simples e barata, não requer ventilação especial, manutenção mínima, mas custos de eletricidade mais elevados (especialmente com tarifa simples). Para uma família de 4 pessoas em Bragança, o esquentador a gás amortiza o investimento inicial em 2-3 anos. Analisamos a sua situação específica e recomendamos a melhor opção sem compromisso.",
 category: "Equipamentos"
 },
 {
 id: 8,
 question: "Como economizar água em casa?",
 answer: "Pode reduzir o consumo de água em 30-50% com estas medidas: instale redutores de caudal nas torneiras (economia de 40%), substitua autoclismos antigos por modelos de dupla descarga (economia de 60% no autoclismo), repare fugas imediatamente (uma torneira a pingar desperdiça 25 litros/dia), tome duches em vez de banhos de imersão (economia de 100 litros por banho), instale torneiras termostáticas (evitam desperdício enquanto espera pela temperatura ideal), e reutilize água da chuva para rega. Uma família média em Bragança pode poupar 50-80€/ano na fatura da água com estas medidas simples. Fazemos auditorias gratuitas de consumo de água.",
 category: "Poupança"
 },
 {
 id: 9,
 question: "O que fazer se a água sai amarela ou castanha?",
 answer: "Água amarela ou castanha geralmente indica ferrugem nas canalizações. Causas comuns: canalizações antigas de ferro (mais de 30 anos), trabalhos na rede pública que revolveram sedimentos, ou corrosão acelerada por água muito ácida. Primeiro, deixe a água correr 5-10 minutos - se clarear, o problema é temporário da rede pública. Se persistir, o problema está nas suas canalizações. Água com ferrugem não é tóxica mas mancha roupa e louça, e indica que as canalizações precisam substituição em breve. Recomendamos análise profissional e orçamento para substituição gradual das canalizações mais afetadas. Ignorar o problema pode levar a fugas graves.",
 category: "Problemas Comuns"
 },
 {
 id: 10,
 question: "Como aumentar a pressão da água?",
 answer: "Baixa pressão de água pode ter várias causas: calcário acumulado em torneiras e chuveiros (limpe com vinagre), válvula de corte parcialmente fechada (verifique se está totalmente aberta), canalizações entupidas ou com diâmetro inadequado, ou pressão baixa da rede pública. Soluções: limpeza de arejadores e chuveiros, substituição de canalizações antigas por diâmetros maiores, ou instalação de bomba pressurizadora (150-400€). Em Bragança, algumas zonas altas têm pressão naturalmente baixa - nesses casos, uma bomba pressurizadora resolve definitivamente. Fazemos diagnóstico gratuito e recomendamos a solução mais económica para o seu caso específico.",
 category: "Problemas Comuns"
 },
 {
 id: 11,
 question: "Preciso de licença para trocar o esquentador?",
 answer: "Sim, a substituição de esquentador a gás requer certificação obrigatória por técnico certificado. Após a instalação, emitimos certificado de conformidade que deve ser enviado à Câmara Municipal no prazo de 30 dias. Para esquentadores elétricos, não é obrigatória licença mas recomendamos sempre instalação profissional por questões de segurança e garantia. Trabalhamos apenas com técnicos certificados e tratamos de toda a documentação sem custos adicionais. A falta de certificação pode invalidar seguros e causar problemas na venda do imóvel. Instalação completa com certificação: a partir de 180€ (sem equipamento).",
 category: "Legislação"
 },
 {
 id: 12,
 question: "O que é uma válvula de segurança e para que serve?",
 answer: "A válvula de segurança (ou válvula de alívio) é um dispositivo obrigatório em esquentadores e termoacumuladores que evita explosões por excesso de pressão. Funciona libertando água automaticamente quando a pressão interna ultrapassa o limite seguro. É normal ver algumas gotas a pingar ocasionalmente - significa que está a funcionar corretamente. Sinais de problema: gotejamento constante (válvula danificada), nenhum gotejamento em meses (válvula entupida ou bloqueada), ou ruídos de assobio. Válvulas defeituosas são perigosas e devem ser substituídas imediatamente. Verificamos e substituímos válvulas de segurança por 58-74€. Nunca bloqueie ou remova uma válvula de segurança.",
 category: "Segurança"
 },
 {
 id: 13,
 question: "Como saber se tenho calcário nas canalizações?",
 answer: "Sinais de calcário acumulado: manchas brancas em torneiras e chuveiros, pressão de água reduzida progressivamente, água quente demora mais a chegar, ruídos no esquentador ao aquecer, consumo de gás aumentado, ou resistências de termoacumuladores que queimam frequentemente. Bragança tem água moderadamente dura (150-200 mg/L de calcário), o que causa acumulação em 8-12 anos. Soluções: descalcificação química das canalizações (200-400€), instalação de sistema anti-calcário (300-600€), ou substituição de troços mais afetados. Prevenção: manutenção anual do esquentador e limpeza regular de arejadores. Fazemos análise gratuita e recomendamos a solução mais adequada.",
 category: "Manutenção"
 },
 {
 id: 14,
 question: "Quanto custa trocar canalizações antigas?",
 answer: "O custo de substituição de canalizações varia muito conforme a extensão e acessibilidade. Valores médios em Bragança: canalização de casa de banho completa (3-4 metros): 400-800€, cozinha completa: 350-600€, apartamento T2 completo: 2.000-4.000€, moradia T3: 4.000-8.000€. Fatores que influenciam: necessidade de partir paredes, tipo de material (PPR, PEX ou cobre), número de pontos de água, e dificuldade de acesso. Podemos fazer substituição faseada para distribuir o investimento. Canalizações modernas em PPR ou PEX duram 50+ anos sem problemas. Orçamento gratuito e detalhado sem compromisso.",
 category: "Preços"
 },
 {
 id: 15,
 question: "O que fazer se o autoclismo não para de correr?",
 answer: "Autoclismo que não para de correr desperdiça 200-400 litros de água por dia (60-120€/ano na fatura). Causas comuns: boia desregulada ou furada, válvula de descarga gasta, corrente ou haste partida, ou calcário na válvula. Soluções imediatas: ajuste a boia para nível mais baixo, limpe a válvula com vinagre, ou substitua a borracha da válvula (5€ em qualquer loja). Se o problema persistir, pode precisar de kit completo de autoclismo (25-40€ + instalação 55-74€). Arranjamos 90% dos casos em 30 minutos. Autoclismos com mais de 15 anos devem ser substituídos por modelos de dupla descarga que poupam 60% de água.",
 category: "Arranjos"
 },
 {
 id: 16,
 question: "Como descongelar canos no inverno?",
 answer: "Em Bragança, temperaturas abaixo de -5°C podem congelar canalizações exteriores ou em zonas não aquecidas. Sinais: torneira não sai água ou sai apenas um fio. Nunca use maçarico ou água a ferver - pode partir o cano. Método seguro: abra a torneira, aqueça gradualmente com secador de cabelo ou toalhas quentes, começando pela torneira e avançando para trás, ou use aquecedor ambiente na divisão. Prevenção: isole canalizações exteriores com espuma térmica (5€/metro), deixe torneiras a pingar levemente em noites muito frias, e mantenha aquecimento mínimo em divisões com canalizações. Instalamos isolamento térmico profissional: 15-25€/metro linear.",
 category: "Inverno"
 },
 {
 id: 17,
 question: "Preciso de certificação para instalação de gás?",
 answer: "Sim, qualquer instalação ou alteração de gás (canalizado ou botija) requer obrigatoriamente técnico certificado e emissão de certificado de conformidade. Isto inclui: instalação de esquentador a gás, caldeira, fogão, ou alteração de tubagens de gás. O certificado deve ser enviado à entidade distribuidora (se gás canalizado) ou guardado para inspeções. Instalações sem certificação são ilegais, perigosas, e invalidam seguros. Todos os nossos técnicos são certificados e emitimos certificação incluída no preço do serviço. Penalizações por instalação ilegal: multas de 250€ a 3.740€ + responsabilidade civil em caso de acidente. Regularizamos instalações antigas sem certificação.",
 category: "Legislação"
 },
 {
 id: 18,
 question: "O que é uma bomba pressurizadora?",
 answer: "Bomba pressurizadora é um equipamento que aumenta a pressão da água em casas com pressão insuficiente (comum em zonas altas de Bragança). Funciona automaticamente quando abre uma torneira, aumentando a pressão para níveis confortáveis (2-3 bar). Indicações: chuveiro com pouca pressão, máquina de lavar que não enche adequadamente, ou água que não chega ao 2º andar. Tipos: bomba simples (150-250€), bomba com depósito acumulador (300-500€), ou sistema completo com pressostato (400-700€). Instalação: 100-200€. Consumo elétrico: 50-100W quando ativa. Silenciosas e duráveis (10-15 anos). Analisamos a sua situação e recomendamos o modelo adequado.",
 category: "Equipamentos"
 },
 {
 id: 19,
 question: "Como escolher um esquentador adequado?",
 answer: "A escolha do esquentador depende de: número de pessoas (1-2 pessoas: 11L/min, 3-4 pessoas: 14L/min, 5+ pessoas: 17L/min), número de casas de banho (2+ casas de banho: mínimo 14L/min), tipo de energia disponível (gás natural, butano/propano, ou elétrico), e espaço de instalação (ventilação adequada para gás). Em Bragança, para uma família de 4 pessoas, recomendamos esquentador a gás de 14L/min (300-600€). Marcas recomendadas: Vulcano, Junkers, Roca (boa relação qualidade/preço). Evite modelos muito baratos (<200€) - duram metade e consomem mais. Fazemos análise gratuita das suas necessidades e recomendamos o modelo ideal.",
 category: "Equipamentos"
 },
 {
 id: 20,
 question: "Quanto custa instalar uma casa de banho nova?",
 answer: "Instalação completa de casa de banho nova em Bragança: casa de banho simples (3m²): 2.500-4.000€, casa de banho média (5m²): 4.000-7.000€, casa de banho premium (7m²): 7.000-12.000€. Inclui: canalizações de água e esgoto, louças sanitárias (sanita, lavatório, base de duche), torneiras, azulejos e pavimento, iluminação básica. Não inclui: equipamentos premium (banheira hidromassagem, móveis por medida), demolição de casa de banho existente (+500-1.000€), ou alterações estruturais. Prazo: 2-3 semanas. Trabalhamos com orçamentos detalhados e transparentes. Possibilidade de pagamento faseado. Garantia de 2 anos em mão de obra.",
 category: "Projetos"
 }
];

// Extra FAQ para completar 25 perguntas
export const FAQ_DATA_EXTRA: FAQItem[] = [
 {
 id: 21,
 question: "Quanto tempo dura uma arranjo de fuga de água?",
 answer: "A duração de uma arranjo de fuga varia conforme a localização e gravidade. Fugas simples em torneiras: 30-60 minutos. Fugas em canos acessíveis: 1-2 horas. Fugas em paredes que requerem deteção termográfica: 2-4 horas. Fugas graves que exigem substituição de canalização: 4-8 horas. Utilizamos técnicas modernas que minimizam o tempo de intervenção e evitam obras desnecessárias. Em 80% dos casos, resolvemos na primeira visita. Para fugas complexas, fazemos diagnóstico gratuito e orçamento detalhado.",
 category: "Arranjos"
 },
 {
 id: 22,
 question: "Como manter a caldeira em bom estado no inverno?",
 answer: "Manutenção da caldeira no inverno: verifique a pressão semanalmente (deve estar entre 1-2 bar), purgue radiadores mensalmente, mantenha temperatura constante (evite desligar completamente), verifique fugas visíveis, e garanta ventilação adequada. Antes do inverno, recomenda-se manutenção profissional que inclui: limpeza do queimador, verificação de gases, teste de segurança, e substituição de peças gastas. Caldeiras bem mantidas consomem 10-15% menos energia e têm menor risco de avaria. Oferecemos contratos de manutenção anual a partir de 80€.",
 category: "Manutenção"
 },
 {
 id: 23,
 question: "O que causa entupimentos recorrentes?",
 answer: "Entupimentos recorrentes indicam problemas estruturais: canalizações com diâmetro insuficiente, inclinação inadequada, acumulação de gordura ou calcário, raízes de árvores no esgoto, ou tubos danificados. Soluções: inspeção com câmara para diagnóstico preciso, limpeza profissional com máquina de alta pressão, substituição de troços problemáticos, ou instalação de sistema anti-entupimentos. Em Bragança, muitas casas antigas têm canalizações de ferro com diâmetro reduzido - recomendamos substituição por PPR. Orçamento gratuito para diagnóstico completo.",
 category: "Problemas Comuns"
 },
 {
 id: 24,
 question: "Preciso de autorização para obras de canalização?",
 answer: "Autorizações necessárias: obras que alterem a estrutura do imóvel (abertura de paredes, alteração de casas de banho) requerem licença municipal. Substituição de canalização dentro do imóvel geralmente não precisa licença, mas recomendamos sempre certificação profissional. Para ligações à rede pública, é necessário contacto com a entidade gestora (Águas de Trás-os-Montes). Tratamos de toda a burocracia incluída no serviço. Obras sem licença podem resultar em multas e obrigação de repor o estado original.",
 category: "Legislação"
 },
 {
 id: 25,
 question: "Como escolher um canalizador de confiança em Trás-os-Montes?",
 answer: "Critérios para escolha: certificação profissional válida, anos de experiência na região, referências de clientes locais, orçamento detalhado por escrito, garantia do trabalho, e seguro de responsabilidade civil. Desconfie de preços muito baixos, pressão para decisão imediata, ou falta de documentos. A Norte Reparos reúne todos estes critérios: 10 anos de experiência em Bragança, técnicos certificados, orçamentos gratuitos, garantia de 2 anos em todos os trabalhos. Contacte-nos para referências de clientes.",
 category: "Dicas"
 }
];

// Todas as FAQs combinadas
export const ALL_FAQ_DATA = [...FAQ_DATA, ...FAQ_DATA_EXTRA];

// Catégories para filtragem (apenas categorias relevantes para canalização)
export const FAQ_CATEGORIES = [
 "Todos",
 "Preços",
 "Diagnóstico",
 "Emergências",
 "Serviços",
 "Manutenção",
 "Equipamentos",
 "Poupança",
 "Problemas Comuns",
 "Legislação",
 "Segurança",
 "Inverno",
 "Arranjos",
 "Projetos",
 "Dicas"
];