
# ============================================================
# PAGE DEFINITIONS - SERVICE+VILLE
# ============================================================

SERVICE_VILLE_PAGES = [
    {
        "slug": "desentupimentos-braganca",
        "title": "Desentupimentos Bragança | 24h | 928 484 451",
        "desc": "Desentupimentos urgentes em Bragança. Canos, esgotos, fossas. Equipamento profissional Ridgid. Orçamento sem compromisso. 928 484 451",
        "keywords": "desentupimentos bragança, desentupir canos bragança, esgoto entupido bragança, fossa séptica bragança",
        "h1": "Desentupimentos em Bragança",
        "city": "Bragança",
        "intro": "Tem um cano entupido em Bragança? A nossa equipa resolve desentupimentos de canos, esgotos e fossas sépticas com equipamento profissional Ridgid K-6200. Respondemos em menos de 30 minutos, 24 horas por dia.",
        "sections": [
            ("Serviços de Desentupimento em Bragança", "<ul><li><strong>Desentupimento de canos</strong> — cozinha, casa de banho, lavatório</li><li><strong>Desentupimento de esgotos</strong> — rede principal, caixas de visita</li><li><strong>Limpeza de fossas sépticas</strong> — manutenção preventiva e urgente</li><li><strong>Câmara de inspeção</strong> — diagnóstico preciso sem partir paredes</li></ul><p>Utilizamos equipamento profissional Ridgid com câmara de inspeção para localizar o problema exato antes de intervir. Sem surpresas, sem obras desnecessárias.</p>"),
            ("Porque Escolher a Nossa Equipa?", "<p>Somos canalizadores profissionais baseados em Macedo de Cavaleiros, com mais de 10 anos de experiência em Trás-os-Montes. Conhecemos as particularidades das canalizações antigas de Bragança — desde o centro histórico até às zonas mais recentes como Santa Maria e Sé.</p><p>Garantimos resposta rápida, preços transparentes e trabalho limpo. Deslocação a Bragança: 30€.</p>"),
            ("Zonas de Bragança que Servimos", "<p>Cobrimos toda a cidade de Bragança e arredores: Sé, Santa Maria, Gimonde, Donai, Samil, Nogueira, Sortes, Castro de Avelãs. Também servimos o campus do IPB e zonas industriais.</p>"),
        ],
        "faq": [
            ("Quanto custa um desentupimento em Bragança?", "O preço depende da complexidade. Desentupimentos simples a partir de 60€ + deslocação (30€ para Bragança). Orçamento sem compromisso."),
            ("Fazem desentupimentos ao fim de semana?", "Sim, estamos disponíveis 24 horas, 7 dias por semana, incluindo feriados."),
            ("Usam produtos químicos?", "Não. Utilizamos equipamento mecânico profissional Ridgid e câmara de inspeção. Mais eficaz e seguro para as canalizações."),
            ("Quanto tempo demora um desentupimento?", "A maioria dos desentupimentos resolve-se em 30 a 60 minutos. Casos mais complexos podem demorar 2-3 horas."),
        ],
        "links": [("Canalizador Bragança", "canalizador-braganca"), ("Deteção de Fugas Bragança", "detecao-fugas-agua-braganca"), ("Canalizador Urgente Bragança", "canalizador-urgente-braganca")],
    },
    {
        "slug": "desentupimentos-mirandela",
        "title": "Desentupimentos Mirandela | 24h | 928 484 451",
        "desc": "Desentupimentos urgentes em Mirandela. Canos, esgotos, fossas. Equipamento Ridgid. Orçamento sem compromisso. 928 484 451",
        "keywords": "desentupimentos mirandela, desentupir canos mirandela, esgoto entupido mirandela",
        "h1": "Desentupimentos em Mirandela",
        "city": "Mirandela",
        "intro": "Cano entupido em Mirandela? A nossa equipa de canalizadores profissionais resolve desentupimentos de canos, esgotos e fossas sépticas em toda a zona de Mirandela. Equipamento Ridgid K-6200 com câmara de inspeção.",
        "sections": [
            ("Desentupimentos Profissionais em Mirandela", "<ul><li><strong>Canos entupidos</strong> — cozinha, casa de banho, lavatório, banheira</li><li><strong>Esgotos bloqueados</strong> — rede principal, caixas de visita, coletores</li><li><strong>Fossas sépticas</strong> — limpeza e manutenção preventiva</li><li><strong>Diagnóstico com câmara</strong> — localização precisa sem obras</li></ul><p>Em Mirandela, muitas casas têm canalizações com mais de 30 anos. Conhecemos bem estas instalações e sabemos como intervir sem causar danos adicionais.</p>"),
            ("Zonas de Mirandela", "<p>Servimos toda a cidade de Mirandela e freguesias: Carvalhais, Frechas, Torre de Dona Chama, Lamas de Orelhão, Avantos, Vale de Salgueiro. Zona junto à Ponte Romana e centro histórico incluída.</p><p>Deslocação a Mirandela: 20€.</p>"),
        ],
        "faq": [
            ("Quanto custa desentupir canos em Mirandela?", "Desentupimentos simples a partir de 60€ + deslocação (20€ para Mirandela). Fazemos orçamento sem compromisso antes de iniciar."),
            ("Atendem urgências em Mirandela?", "Sim, 24 horas por dia, 7 dias por semana. Respondemos em menos de 30 minutos."),
            ("Desentupem fossas sépticas?", "Sim. Fazemos limpeza e manutenção de fossas sépticas em toda a zona de Mirandela."),
        ],
        "links": [("Canalizador Mirandela", "canalizador-mirandela"), ("Desentupimentos Bragança", "desentupimentos-braganca"), ("Canalizador Urgente Mirandela", "canalizador-urgente-mirandela")],
    },
]

# Write pages
for p in SERVICE_VILLE_PAGES:
    html = page_html(
        p["slug"], p["title"], p["desc"], p["keywords"], p["h1"], p["intro"],
        p["sections"], p["faq"], p["links"], city=p["city"]
    )
    path = os.path.join(OUT, f'{p["slug"]}.html')
    with open(path, 'w') as f:
        f.write(html)
    print(f"Created: {path}")

print(f"\nDone: {len(SERVICE_VILLE_PAGES)} pages created")
