export type Question = {
  id: number;
  question: string;
  answers: string[];
  correctAnswerIndex: number;
};

export const questionsEN: Question[] = [
  {
    id: 1,
    question: 'In which year was Frédéric Chopin born?',
    answers: ['1799', '1810', '1825', '1805'],
    correctAnswerIndex: 1,
  },
  {
    id: 2,
    question: 'In which town was Frédéric Chopin born?',
    answers: ['Warsaw', 'Cracow', 'Żelazowa Wola', 'Vienna'],
    correctAnswerIndex: 2,
  },
  {
    id: 3,
    question: 'For which instrument did Chopin mainly compose?',
    answers: ['Violin', 'Piano', 'Organ', 'Harpsichord'],
    correctAnswerIndex: 1,
  },
  {
    id: 4,
    question: 'Which national dance especially inspired Chopin?',
    answers: ['Waltz', 'Mazurka', 'Polonaise', 'Tango'],
    correctAnswerIndex: 2,
  },
  {
    id: 5,
    question: 'Which of the following works was NOT written by Chopin?',
    answers: [
      'Polonaise in A-flat major',
      'Nocturne in C-sharp minor',
      'Revolutionary Étude',
      'Brunswick Waltz',
    ],
    correctAnswerIndex: 3,
  },
  {
    id: 6,
    question: 'In which country did Chopin spend most of his adult life?',
    answers: ['Poland', 'France', 'Germany', 'Austria'],
    correctAnswerIndex: 1,
  },
  {
    id: 7,
    question: 'What was the name of Chopin’s writer partner?',
    answers: ['Jane Austen', 'George Sand', 'Emily Brontë', 'Marie Curie'],
    correctAnswerIndex: 1,
  },
  {
    id: 8,
    question: 'Which illness did Chopin most likely suffer from?',
    answers: ['Cancer', 'Tuberculosis', 'Asthma', 'Diabetes'],
    correctAnswerIndex: 1,
  },
  {
    id: 9,
    question: 'At what age did Frédéric Chopin die?',
    answers: ['39', '36', '45', '50'],
    correctAnswerIndex: 0,
  },
  {
    id: 10,
    question: 'Where is Frédéric Chopin buried?',
    answers: ['Warsaw', 'Cracow', 'London', 'Paris (Père Lachaise Cemetery)'],
    correctAnswerIndex: 3,
  },
  {
    id: 11,
    question: 'Where is Frédéric Chopin’s heart kept?',
    answers: [
      'Père Lachaise Cemetery',
      'Wawel Cathedral',
      'Church of the Holy Cross in Warsaw',
      'Fryderyk Chopin Museum',
    ],
    correctAnswerIndex: 2,
  },
  {
    id: 12,
    question: 'Which musical style did Chopin represent?',
    answers: ['Romantic', 'Impressionist', 'Baroque', 'Classical'],
    correctAnswerIndex: 0,
  },
  {
    id: 13,
    question: 'Which genre did Chopin develop artistically?',
    answers: ['Symphony', 'Concerto', 'Mazurka', 'Opera'],
    correctAnswerIndex: 2,
  },
  {
    id: 14,
    question: 'What was the origin of Frédéric Chopin’s father?',
    answers: ['Austrian', 'French', 'Italian', 'Polish'],
    correctAnswerIndex: 1,
  },
  {
    id: 15,
    question: 'What was the full name of Frédéric Chopin’s mother?',
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
    question: 'How many works did Frédéric Chopin compose?',
    answers: ['Around 100', 'Around 150', 'Around 230', 'Around 300'],
    correctAnswerIndex: 2,
  },
  {
    id: 17,
    question: 'At what age did Chopin give his first public concert?',
    answers: ['5 years old', '6 years old', '7 years old', '8 years old'],
    correctAnswerIndex: 3,
  },
  {
    id: 18,
    question:
      'Besides the piano, which instrument did Chopin enjoy playing in his childhood?',
    answers: ['Violin', 'Flute', 'Guitar', 'Trumpet'],
    correctAnswerIndex: 1,
  },
  {
    id: 19,
    question: 'Who was Chopin’s composition teacher in Warsaw?',
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
    question: 'Which work is considered one of Chopin’s most famous pieces?',
    answers: [
      'Revolutionary Étude (op. 10 no. 12)',
      'Symphony No. 5',
      'Piano Concerto No. 2',
      'Opera “Carmen”',
    ],
    correctAnswerIndex: 0,
  },
];
