# 70 Localités — Norte Reparos (Canalizador + Eletricista)
# Validado Filipe · 30 maio 2026
# Grille: Z1(0-30km) Z2(31-41km) Z3(42-79km) Z4(80-99km) Z5(100-119km) Z6(120km+)
# Prix totaux (deslocação + mão de obra)

LOCALITIES = [
    # Z1 — 0-30km — 80€/85€
    {"id": 1, "name": "Trás-os-Montes", "slug": "macedo-de-cavaleiros", "km": 0, "zone": "Z1", "canal": 80, "elec": 85},
    {"id": 2, "name": "Torre de Dona Chama", "slug": "torre-de-dona-chama", "km": 25, "zone": "Z1", "canal": 80, "elec": 85},
    {"id": 3, "name": "Mirandela", "slug": "mirandela", "km": 27.4, "zone": "Z1", "canal": 80, "elec": 85},
    # Z2 — 31-41km — 90€/95€
    {"id": 4, "name": "Alfândega da Fé", "slug": "alfandega-da-fe", "km": 31.1, "zone": "Z2", "canal": 90, "elec": 95},
    {"id": 5, "name": "Izeda", "slug": "izada", "km": 37.2, "zone": "Z2", "canal": 90, "elec": 95},
    {"id": 6, "name": "Vila Flor", "slug": "vila-flor", "km": 40.1, "zone": "Z2", "canal": 90, "elec": 95},
    # Z3 — 42-79km — 110€/115€
    {"id": 7, "name": "Bragança", "slug": "braganca", "km": 42.4, "zone": "Z3", "canal": 110, "elec": 115},
    {"id": 8, "name": "Valpaços", "slug": "valpacos", "km": 48, "zone": "Z3", "canal": 110, "elec": 115},
    {"id": 9, "name": "Mogadouro", "slug": "mogadouro", "km": 48.5, "zone": "Z3", "canal": 110, "elec": 115},
    {"id": 10, "name": "Vinhais", "slug": "vinhais", "km": 48.8, "zone": "Z3", "canal": 110, "elec": 115},
    {"id": 11, "name": "Carrazeda de Ansiães", "slug": "carrazeda-de-ansiaes", "km": 51.5, "zone": "Z3", "canal": 110, "elec": 115},
    {"id": 12, "name": "Torre de Moncorvo", "slug": "torre-de-moncorvo", "km": 52.2, "zone": "Z3", "canal": 110, "elec": 115},
    {"id": 13, "name": "Murça", "slug": "munca", "km": 53.7, "zone": "Z3", "canal": 110, "elec": 115},
    {"id": 14, "name": "Vilarandelo", "slug": "vilarandelo", "km": 55.4, "zone": "Z3", "canal": 110, "elec": 115},
    {"id": 15, "name": "Vila Nova de Foz Côa", "slug": "vila-nova-de-foz-coa", "km": 63, "zone": "Z3", "canal": 110, "elec": 115},
    {"id": 16, "name": "Vimioso", "slug": "vimioso", "km": 64, "zone": "Z3", "canal": 110, "elec": 115},
    {"id": 17, "name": "Carrazedo de Montenegro", "slug": "carrazedo-de-montenegro", "km": 64.6, "zone": "Z3", "canal": 110, "elec": 115},
    {"id": 18, "name": "Argozelo", "slug": "argozelo", "km": 64.8, "zone": "Z3", "canal": 110, "elec": 115},
    {"id": 19, "name": "Vilar de Maçada", "slug": "vilar-de-macada", "km": 68.9, "zone": "Z3", "canal": 110, "elec": 115},
    {"id": 20, "name": "Freixo de Numão", "slug": "freixo-de-numao", "km": 73, "zone": "Z3", "canal": 110, "elec": 115},
    {"id": 21, "name": "Alijó", "slug": "alijo", "km": 73.9, "zone": "Z3", "canal": 110, "elec": 115},
    {"id": 22, "name": "Chaves", "slug": "chaves", "km": 74.7, "zone": "Z3", "canal": 110, "elec": 115},
    {"id": 23, "name": "Sanfins do Douro", "slug": "sanfins-do-douro", "km": 74.8, "zone": "Z3", "canal": 110, "elec": 115},
    {"id": 24, "name": "Sendim", "slug": "sendim", "km": 74.9, "zone": "Z3", "canal": 110, "elec": 115},
    {"id": 25, "name": "Santo Estêvão", "slug": "santo-estevao", "km": 77.3, "zone": "Z3", "canal": 110, "elec": 115},
    {"id": 26, "name": "Favaios", "slug": "favaios", "km": 77.7, "zone": "Z3", "canal": 110, "elec": 115},
    # Z4 — 80-99km — 120€/125€
    {"id": 27, "name": "Mouçós", "slug": "moucos", "km": 79.8, "zone": "Z4", "canal": 120, "elec": 125},
    {"id": 28, "name": "São João da Pesqueira", "slug": "sao-joao-da-pesqueira", "km": 79.8, "zone": "Z4", "canal": 120, "elec": 125},
    {"id": 29, "name": "Sabrosa", "slug": "sabrosa", "km": 81.6, "zone": "Z4", "canal": 120, "elec": 125},
    {"id": 30, "name": "Almendra", "slug": "almendra", "km": 83.1, "zone": "Z4", "canal": 120, "elec": 125},
    {"id": 31, "name": "Vidago", "slug": "vidago", "km": 84, "zone": "Z4", "canal": 120, "elec": 125},
    {"id": 32, "name": "Mêda", "slug": "meda", "km": 84.1, "zone": "Z4", "canal": 120, "elec": 125},
    {"id": 33, "name": "Vila Real", "slug": "vila-real", "km": 85.7, "zone": "Z4", "canal": 120, "elec": 125},
    {"id": 34, "name": "Lordelo", "slug": "lordelo", "km": 86.1, "zone": "Z4", "canal": 120, "elec": 125},
    {"id": 35, "name": "Marialva", "slug": "marialva", "km": 86.5, "zone": "Z4", "canal": 120, "elec": 125},
    {"id": 36, "name": "Cedovim", "slug": "cedovim", "km": 86.6, "zone": "Z4", "canal": 120, "elec": 125},
    {"id": 37, "name": "Vila Pouca de Aguiar", "slug": "vila-pouca-de-aguiar", "km": 88.7, "zone": "Z4", "canal": 120, "elec": 125},
    {"id": 38, "name": "São Martinho de Anta", "slug": "sao-martinho-de-anta", "km": 89.1, "zone": "Z4", "canal": 120, "elec": 125},
    {"id": 39, "name": "Pinhão", "slug": "pinhao", "km": 90.6, "zone": "Z4", "canal": 120, "elec": 125},
    {"id": 40, "name": "Miranda do Douro", "slug": "miranda-do-douro", "km": 92.2, "zone": "Z4", "canal": 120, "elec": 125},
    {"id": 41, "name": "Cumieira", "slug": "cumieira", "km": 93.5, "zone": "Z4", "canal": 120, "elec": 125},
    {"id": 42, "name": "Freixo de Espada à Cinta", "slug": "freixo-de-espada-a-cinta", "km": 94, "zone": "Z4", "canal": 120, "elec": 125},
    {"id": 43, "name": "Pedras Salgadas", "slug": "pedras-salgadas", "km": 94.4, "zone": "Z4", "canal": 120, "elec": 125},
    {"id": 44, "name": "Trevões", "slug": "trevoes", "km": 97.3, "zone": "Z4", "canal": 120, "elec": 125},
    {"id": 45, "name": "Penedono", "slug": "penedono", "km": 98.1, "zone": "Z4", "canal": 120, "elec": 125},
    {"id": 46, "name": "Peso da Régua", "slug": "peso-da-regua", "km": 98.4, "zone": "Z4", "canal": 120, "elec": 125},
    {"id": 47, "name": "Boticas", "slug": "boticas", "km": 99.4, "zone": "Z4", "canal": 120, "elec": 125},
    {"id": 48, "name": "Figueira de Castelo Rodrigo", "slug": "figueira-de-castelo-rodrigo", "km": 99.4, "zone": "Z4", "canal": 120, "elec": 125},
    # Z5 — 100-119km — 130€/135€
    {"id": 49, "name": "Valdigem", "slug": "valdigem", "km": 101.7, "zone": "Z5", "canal": 130, "elec": 135},
    {"id": 50, "name": "Santa Marta de Penaguião", "slug": "santa-marta-de-penaguiao", "km": 102.8, "zone": "Z5", "canal": 130, "elec": 135},
    {"id": 51, "name": "Ervedosa do Douro", "slug": "ervedosa-do-douro", "km": 103.7, "zone": "Z5", "canal": 130, "elec": 135},
    {"id": 52, "name": "Cambres", "slug": "cambres", "km": 104.2, "zone": "Z5", "canal": 130, "elec": 135},
    {"id": 53, "name": "Tabuaço", "slug": "tabuaco", "km": 105.6, "zone": "Z5", "canal": 130, "elec": 135},
    {"id": 54, "name": "Pinhel", "slug": "pinhel", "km": 108.2, "zone": "Z5", "canal": 130, "elec": 135},
    {"id": 55, "name": "Britiande", "slug": "britiande", "km": 110.2, "zone": "Z5", "canal": 130, "elec": 135},
    {"id": 56, "name": "Lamego", "slug": "lamego", "km": 110.7, "zone": "Z5", "canal": 130, "elec": 135},
    {"id": 57, "name": "Armamar", "slug": "armamar", "km": 111.9, "zone": "Z5", "canal": 130, "elec": 135},
    {"id": 58, "name": "Montalegre", "slug": "montalegre", "km": 112.6, "zone": "Z5", "canal": 130, "elec": 135},
    {"id": 59, "name": "Mesão Frio", "slug": "mesao-frio", "km": 112.7, "zone": "Z5", "canal": 130, "elec": 135},
    {"id": 60, "name": "Sernancelhe", "slug": "sernancelhe", "km": 113.5, "zone": "Z5", "canal": 130, "elec": 135},
    {"id": 61, "name": "Lalim", "slug": "lalim", "km": 115, "zone": "Z5", "canal": 130, "elec": 135},
    {"id": 62, "name": "Vila Franca das Naves", "slug": "vila-franca-das-naves", "km": 115.5, "zone": "Z5", "canal": 130, "elec": 135},
    {"id": 63, "name": "Tarouca", "slug": "tarouca", "km": 117, "zone": "Z5", "canal": 130, "elec": 135},
    {"id": 64, "name": "Lazarim", "slug": "lazarim", "km": 118.1, "zone": "Z5", "canal": 130, "elec": 135},
    {"id": 65, "name": "Mondim da Beira", "slug": "mondim-da-beira", "km": 118.2, "zone": "Z5", "canal": 130, "elec": 135},
    {"id": 66, "name": "São Cosmado", "slug": "sao-cosmao", "km": 119.7, "zone": "Z5", "canal": 130, "elec": 135},
    {"id": 67, "name": "Ribeira de Pena", "slug": "ribeira-de-pena", "km": 119.9, "zone": "Z5", "canal": 130, "elec": 135},
    # Z6 — 120km+ — 140€/145€
    {"id": 68, "name": "São João de Tarouca", "slug": "sao-joao-de-tarouca", "km": 121.1, "zone": "Z6", "canal": 140, "elec": 145},
    {"id": 69, "name": "Salzedas", "slug": "salzedas", "km": 122.5, "zone": "Z6", "canal": 140, "elec": 145},
    {"id": 70, "name": "Aguiar da Beira", "slug": "aguiar-da-beira", "km": 125.2, "zone": "Z6", "canal": 140, "elec": 145},
]

# Stats
ZONES = {"Z1": 3, "Z2": 3, "Z3": 20, "Z4": 20, "Z5": 19, "Z6": 5}
PRICES = {
    "Z1": {"canal": 80, "elec": 85},
    "Z2": {"canal": 90, "elec": 95},
    "Z3": {"canal": 110, "elec": 115},
    "Z4": {"canal": 120, "elec": 125},
    "Z5": {"canal": 130, "elec": 135},
    "Z6": {"canal": 140, "elec": 145},
}