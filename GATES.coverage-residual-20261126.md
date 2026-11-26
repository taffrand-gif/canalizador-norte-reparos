# GATE — CNR residual de cobertura — 2026-11-26

## Objetivo
Remover a menção comercial confirmada fora do perímetro `Moimenta da Beira` das superfícies CNR identificadas após a fusão `e11d1a1`, sem remover `Moimenta de Vinhais`/`Moimenta` autorizado.

## População fechada
- `client/public/zonas.html`
- `client/public/arranjo-fugas-agua.html`
- `client/src/pages/QuantoTempoDemoraArranjarFugaAgua.tsx`
- `client/src/pages/QuantoTempoDemoraDesentupirSanita.tsx`
- `client/src/pages/QuantoTempoSemAguaQuente.tsx`

## Invariantes
- `Moimenta da Beira` = zero na população fechada e nos artefactos regenerados correspondentes.
- `Moimenta de Vinhais`/`Moimenta` autorizado não é alterado.
- Nenhuma página é apagada neste lote.
- Nenhum merge, deploy manual ou alteração de Production neste lote.

## Evidências exigidas
- `git diff --check`
- `npm run build`
- scan determinístico da população e de `dist/public` para a ocorrência alvo
- confirmação da ocorrência autorizada preservada
- teste DOM local da rota `/zonas` após build
- `git status --short` e diff final

## Estatuto
Em validação. A PR Draft será criada apenas após as evidências locais.
