// A CONFIG DE CURSO — o que muda entre SKUs mora AQUI e só aqui.

export const curso = {
  sku: 'curso-eua-de',
  /** Idioma do comprador (a voz-guia). Alemão — o turista alemão nos EUA. */
  buyerLang: 'de',
  /** Idioma do destino (a fala nativa ensinada). Inglês AMERICANO — reusa a
   * camada-alvo criada em curso-eua-es. Derivação: só a camada de guia
   * (alemã) é nova. */
  targetLang: 'en',
  translatorPair: { sl: 'de', tl: 'en' },
  destCurrency: 'USD',
  /** O comprador alemão usa euro; o destino, dólar. Conversão real. */
  homeCurrencies: ['EUR'] as string[],
  timeZone: 'America/New_York',
  cidadeExibicao: 'New York',
  /**
   * Faixas do dia, narradas em ALEMÃO, sobre o ritmo AMERICANO. O alemão
   * janta cedo (~18h-19h) — perto do horário americano, sem grande choque;
   * a diferença real é o cardápio e os hábitos de refeição em si (breakfast
   * pesado, happy hour, dinner cedo). PROVISÓRIO, revisar antes de tratar
   * como padrão.
   */
  faixasNow: [
    { de: 0, linha: 'Die Küchen haben schon zu, aber ein 24-Stunden-Diner oder ein Food Truck haben noch offen.' },
    { de: 5 * 60, linha: 'Fast nichts hat auf. Cafés und Coffeeshops machen so gegen sechs auf.' },
    { de: 7 * 60, linha: 'Breakfast: Kaffee zum Mitnehmen, ein Bagel oder Eier. In den USA frühstückt man früh und richtig.' },
    { de: 9 * 60 + 30, linha: 'Ruhiger Vormittag. Cafés bedienen weiter — du bist früh dran, nicht spät.' },
    { de: 11 * 60 + 30, linha: 'Der Lunch beginnt. Viele Läden haben bis zum späten Nachmittag ein Mittagsmenü.' },
    { de: 12 * 60, linha: 'Lunchtime: bis eins füllt sich alles schnell. Leichter als das Essen zu Hause.' },
    { de: 14 * 60, linha: 'Der Lunch klingt aus. Cafés bleiben offen für Kaffee und etwas Süßes.' },
    { de: 16 * 60 + 30, linha: 'Die ruhige Lücke zwischen den Mahlzeiten. Ein Kaffee oder eine frühe Happy Hour überbrücken die Zeit.' },
    { de: 17 * 60, linha: 'Happy Hour: Drinks und Snacks zu reduziertem Preis, meist bis sieben.' },
    { de: 18 * 60, linha: 'Dinnertime: hier isst man früh zu Abend. Um diese Zeit sind die Restaurants schon voll.' },
    { de: 21 * 60, linha: 'Das Dinner klingt aus. Viele Küchen schließen früher, als man denkt — frag nach den Öffnungszeiten.' },
    { de: 22 * 60 + 30, linha: 'Spät. Ein Diner oder eine Pizzeria haben noch offen, aber viele Küchen haben schon zu.' }
  ] as { de: number; linha: string }[]
} as const;

export type CursoConfig = typeof curso;
