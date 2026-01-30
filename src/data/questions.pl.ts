export type Question = {
  id: number;
  question: string;
  answers: string[];
  correctAnswerIndex: number;
};

export const questionsPL: Question[] = [
  {
    id: 1,
    question: 'W którym roku urodził się Fryderyk Chopin?',
    answers: ['1799', '1810', '1825', '1805'],
    correctAnswerIndex: 1,
  },
  {
    id: 2,
    question: 'W jakiej miejscowości urodził się Fryderyk Chopin?',
    answers: ['Warszawa', 'Kraków', 'Żelazowa Wola', 'Wiedeń'],
    correctAnswerIndex: 2,
  },
  {
    id: 3,
    question: 'Na jaki instrument głównie komponował Chopin?',
    answers: ['Skrzypce', 'Fortepian', 'Organy', 'Klawesyn'],
    correctAnswerIndex: 1,
  },
  {
    id: 4,
    question: 'Który taniec narodowy szczególnie inspirował Chopina?',
    answers: ['Walc', 'Mazurek', 'Polonez', 'Tango'],
    correctAnswerIndex: 2,
  },
  {
    id: 5,
    question: 'Który z poniższych utworów NIE został napisany przez Chopina?',
    answers: [
      'Polonez As-dur',
      'Nokturn cis-moll',
      'Etiuda Rewolucyjna',
      'Walc Brunszwicki',
    ],
    correctAnswerIndex: 3,
  },
  {
    id: 6,
    question: 'W jakim kraju Chopin spędził większość dorosłego życia?',
    answers: ['Polska', 'Francja', 'Niemcy', 'Austria'],
    correctAnswerIndex: 1,
  },
  {
    id: 7,
    question: 'Jak nazywała się pisarka, partnerka Chopina?',
    answers: ['Jane Austen', 'George Sand', 'Emily Brontë', 'Maria Skłodowska'],
    correctAnswerIndex: 1,
  },
  {
    id: 8,
    question: 'Na jaką chorobę najprawdopodobniej cierpiał Chopin?',
    answers: ['Rak', 'Gruźlica', 'Astma', 'Cukrzyca'],
    correctAnswerIndex: 1,
  },
  {
    id: 9,
    question: 'W jakim wieku zmarł Fryderyk Chopin?',
    answers: ['39', '36', '45', '50'],
    correctAnswerIndex: 0,
  },
  {
    id: 10,
    question: 'Gdzie znajduje się grób Fryderyka Chopina?',
    answers: ['Warszawa', 'Kraków', 'Londyn', 'Paryż (Cmentarz Père Lachaise)'],
    correctAnswerIndex: 3,
  },
  {
    id: 11,
    question: 'Gdzie spoczywa serce Fryderyka Chopina?',
    answers: [
      'Cmentarz Père Lachaise',
      'Katedra na Wawelu',
      'Kościół Świętego Krzyża w Warszawie',
      'Muzeum Fryderyka Chopina',
    ],
    correctAnswerIndex: 2,
  },
  {
    id: 12,
    question: 'Jaki styl muzyczny reprezentował Chopin?',
    answers: ['Romantyczny', 'Impresjonistyczny', 'Barok', 'Klasyczny'],
    correctAnswerIndex: 0,
  },
  {
    id: 13,
    question: 'Który gatunek muzyczny Chopin rozwinął artystycznie?',
    answers: ['Symfonia', 'Koncert', 'Mazurek', 'Opera'],
    correctAnswerIndex: 2,
  },
  {
    id: 14,
    question: 'Jakiego pochodzenia był ojciec Fryderyka Chopina?',
    answers: ['Austriacki', 'Francuski', 'Włoski', 'Polski'],
    correctAnswerIndex: 1,
  },
  {
    id: 15,
    question: 'Jak nazywała się matka Fryderyka Chopina?',
    answers: [
      'Tekla Justyna Krzyżanowska',
      'Elżbieta Szydłowska',
      'Maria Skłodowska',
      'Anna Jabłonowska',
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 16,
    question: 'Ile utworów skomponował Fryderyk Chopin?',
    answers: ['Około 100', 'Około 150', 'Około 230', 'Około 300'],
    correctAnswerIndex: 2,
  },
  {
    id: 17,
    question: 'W jakim wieku dał pierwszy publiczny koncert?',
    answers: ['5 lat', '6 lat', '7 lat', '8 lat'],
    correctAnswerIndex: 3,
  },
  {
    id: 18,
    question:
      'Poza fortepianem, na jakim instrumencie Chopin lubił grać w dzieciństwie?',
    answers: ['Skrzypce', 'Flet', 'Gitara', 'Trąbka'],
    correctAnswerIndex: 1,
  },
  {
    id: 19,
    question: 'Kto był nauczycielem kompozycji Chopina w Warszawie?',
    answers: [
      'Franz Liszt',
      'Ludwig van Beethoven',
      'Felix Mendelssohn',
      'Józef Elsner',
    ],
    correctAnswerIndex: 3,
  },
  {
    id: 20,
    question: 'Który utwór jest uważany za jeden z najsłynniejszych Chopina?',
    answers: [
      'Etiuda Rewolucyjna (op. 10 nr 12)',
      'Symfonia nr 5',
      'Koncert fortepianowy nr 2',
      'Opera „Carmen”',
    ],
    correctAnswerIndex: 0,
  },
];
