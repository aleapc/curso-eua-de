# FUNDAÇÃO — curso-eua-es (survival English → EUA, guia em espanhol)

Primeiro SKU da coluna **inglês-destino** — a maior alavanca do catálogo
(≈50 M endereçáveis; ver mapa dos cursos). Escolhido por TAM: **México→EUA ≈ 17 M**
é o maior corredor isolado do mapa inteiro. Camada-alvo (inglês) gerada uma vez
aqui; DE/BR/JA/KO/ZH/FR/IT→EUA entram depois reusando o áudio-alvo (só pagam a
voz-guia). Iniciado 2026-08-19.

**Ressalva registrada (não esquecer no marketing/priorização):** boa parte do
fluxo México→EUA é **fronteira/viagem curta**, com proficiência de inglês maior
que a média. O TAM *efetivo* de "turista-comprador de app de sobrevivência" é
menor que 17 M. Segue sendo #1, mas o encaixe de produto é mais forte nos
compradores de **baixa proficiência e viagem de lazer discricionária** (JA/KO/ZH,
Brasil) — que entram logo depois, reusando esta camada-alvo.

## Config (a preencher no curso.config.ts ao scaffoldar)
- `sku: 'curso-eua-es'`
- `buyerLang: 'es'` (espanhol) — **voz-guia MEXICANA** (es-MX), não peninsular:
  o comprador é o turista mexicano. É a mesma disciplina do PE↔PB do Português —
  a conta de vozes tem ES peninsular; importar/checar voz mexicana antes do áudio.
- `targetLang: 'en'` — **NOVIDADE ESTRUTURAL: inglês como ALVO** (a fala ensinada),
  não como guia. Nenhum curso tinha `targetLang:'en'` — todo texto-alvo é NOVO,
  autorado aqui (o inglês dos cursos existentes era guia, lado errado).
- `translatorPair: { sl: 'es', tl: 'en' }`
- `destCurrency: 'USD'` · `homeCurrencies: ['MXN']`
- `timeZone: 'America/New_York'` · `cidadeExibicao: 'New York'`
- `_g14.alvoLingua = 'en'`. Marca do curso a definir (algo curto/EN, ex.: **"Go on!"**
  — decidir no scaffold).

## Os fatos-diferencial (o que faz NÃO ser "mais um curso de inglês")
Verificados, com fonte (2023-2025). Entram no `/bolso` (saberUtil) e nas cartas
"fato real" dos episódios. É o couvert-de-Portugal deste destino.

1. **Gorjeta 18-20% é SALÁRIO, não bônus.** O piso federal do garçom é
   **US$ 2,13/h**; a gorjeta é a renda de fato (U.S. Dept. of Labor). Média
   efetiva medida ~19,3% no full-service (Toast POS). Abaixo de 15% comunica
   insatisfação. → o fato nº 1 do destino.
2. **O preço da etiqueta NÃO inclui imposto.** Sales tax somado só no caixa,
   ~7,5% em média (até ~10% em LA/Chicago; 0% em Oregon/Delaware/Montana/NH).
   A conta final sempre vem maior (Tax Foundation 2025).
3. **O "tip screen" de balcão pedindo 25-30% é NOVO e dá pra recusar.** 72% dos
   próprios americanos acham que virou demais (Pew 2023). No balcão sem serviço
   de mesa (pegar café e sair), escolher **"No Tip" é socialmente ok**.
4. **Auto-gratuity de 18% em grupo de 6+ já vem na conta — não pague em dobro.**
   Juridicamente é *service charge*, não tip (IRS). Ler a conta antes de somar.
5. **Emergência médica sem seguro pode falir.** ER US$ 1.500-3.000+; ambulância
   aérea ~US$ 40.000. **Seguro-viagem não é opcional.** Leve/urgente → urgent
   care/walk-in clinic, NUNCA o ER por bobagem.

Fatos de apoio (entram nas casas certas): água da torneira (tap water) grátis;
free refills; "Check, please" (a conta não vem sozinha); carding aos 21 (passaporte
FÍSICO, foto no cel não serve); pedágios cashless (confirmar no rental car);
"restroom"/"bathroom" nunca "toilet"; "How are you?" é saudação, não pergunta;
911; álcool varia por estado (liquor store, dry counties).

## Roster de moldes — survival English (10 moldes)

Termo canônico do molde na voz-guia (ES): **"la fórmula"** (equivalente ao
"the frame" da guia inglesa). Critério idêntico ao dos outros SKUs: o buraco é
uma COISA DO MUNDO escolhida sob pressão; o abridor é invariável; atravessa a
jornada (nasce numa casa, volta em ≥2). **Vantagem do inglês:** quase não tem
flexão — os abridores já são naturalmente invariáveis; o custo do aluno migra da
gramática para a **pronúncia** (vogais, "th", consoante final) e para o inventário.

| id | forma | encaixe | casa | redisparos |
|---|---|---|---|---|
| HAVE | **Do you have ___?** | qualquer coisa que o outro possa TER / que exista ali | B06 | B08·B11·B15·B16·I03 |
| CAN-I | **Can I ___?** | qualquer coisa que EU quero fazer e preciso que deixem | B07 | B10·B15·B16·B18·I09 |
| WHERE | **Where's the ___?** | qualquer lugar que ele precisa alcançar | B08 | B10·B16·I03 |
| LOOKING | **I'm looking for ___** | procurar coisa/lugar sem saber o nome exato | B10 | B08·B16 |
| GET | **Can I get ___?** | pedir/encomendar no balcão ou à mesa (o cavalo de batalha) | B11 | B12·B15·B16 |
| WITHOUT | **No ___, please** / **___ without ___** | tirar/evitar (dieta, alergia, sem gelo) | B12 | B11·saúde |
| HOW-MUCH | **How much is ___?** | preço de qualquer coisa | B15 | B11·B16·compras |
| WHAT-TIME | **What time ___?** | horário (abre, sai, check-out) | I01 | transporte·B16 |
| WENT-WRONG | **I lost my ___** / **My ___ isn't working** | quando algo dá errado (perdi, quebrou, não funciona) | I06 | apuro·quarto |
| EXCUSE | **Excuse me** | abridor universal (chamar, pedir passagem, iniciar) | B03 | todas |

Notas por molde:
- **HAVE (B06)** — o de maior alcance. "Do you have ___?" cobre disponibilidade
  ("vocês têm?") e existência ("tem/há?"). Nasce na 1ª hora, não na parte de comer.
- **GET (B11)** — o workhorse do restaurante/balcão. "Can I get a table for two?",
  "Can I get the check?", "Can I get this to go?". A alternativa "I'd like ___" é o
  registro mais formal, ensinado como variante recebida, não como molde separado.
- **WITHOUT (B12)** — casa a alergia/dieta. "No ice, please", "without onions",
  "I'm allergic to ___" entra colado aqui.
- **WENT-WRONG (I06)** — o passado do inglês é simples ("I lost", "I already paid"),
  então entra como pedaço memorizado, não regra a conjugar.
- **"___, please"** não é molde: é o **politener universal** colado no fim de quase
  tudo. O aluno aprende cedo que em inglês o "please" faz o trabalho que em espanhol
  o tom/diminutivo faria.

### Recusados (com motivo — específicos do inglês)
- **Artigos a/an/the/some** — é a dor clássica do hispanofalante, mas o buraco é
  uma REGRA gramatical a calcular, não uma coisa do mundo. As fórmulas já trazem o
  artigo fixado ("Can I get **a** table?", "Where's **the** restroom?"). Ensinar a
  escolha viraria o método do avesso.
- **Phrasal verbs (check in, pick up, drop off, sold out…)** — idiomáticos e
  imprevisíveis; entram como **inventário fixo** por casa (check-in no quarto,
  pick up na compra), nunca como molde produtivo.
- **Pronúncia do "th" / vogais / consoante final** — é o custo REAL do curso, mas é
  **drill de pronúncia**, não molde. Vira o eixo dos passos de shadow, não uma fórmula.
- **Contrações (I'm/don't/can't/where's)** — o aluno OUVE e deve reconhecer, mas
  produzi-las é opcional; a forma cheia ("Can I", "Where is") sempre funciona. Fica
  como sinal receptivo, não regra a aplicar.
- **Gorjeta como "molde"** — NÃO: gorjeta é FATO (bolso + carta real), não frase a
  produzir. O aluno não "pede" gorjeta; ele precisa SABER a regra. Vai pro
  conhecimento, não pro roster.

## Próximos passos (credit-free até 3/set)
1. Scaffold: clonar um worktree limpo → `curso-eua-es`, aplicar a config acima,
   trocar `targetLang→en`, marca do curso.
2. Autorar `moldes.json` a partir deste roster (formato do curso-japao).
3. Autorar os 36 episódios (provável frota) + quizzes + bolso + casca, ancorados
   nos fatos acima. Áudio só depois do reset de 3/set (voz-alvo INGLESA nova +
   narração-guia mexicana).
