import { selectType } from "./types";
import { QuesDB } from "./types";
const quesDB: QuesDB = {
  "Can, Should, Must": [
    {
      id: 1,
      question: "You look sick. You ____ see the doctor.",
      answer: "should",
    },
    {
      id: 2,
      question: "The students ____ obey the school rules",
      answer: "must",
    },
    {
      id: 3,
      question: "____ you do me a favor? I want you to grab that book.",
      answer: "Can",
    },
  ],
  "Compound Nouns/Adjectives": [
    {
      id: 1,
      question: "Hello a sentence using 'go' in past tense.",
      answer: "I went to the park yesterday.",
    },
    {
      id: 2,
      question: "Make a sentence using the word 'beautiful'.",
      answer: "The sunset was beautiful.",
    },
    {
      id: 3,
      question: "Use 'because' in a sentence.",
      answer: "I stayed home because it was raining.",
    },
  ],
};

const selectUnits: selectType[] = [
  {
    unit: "Unit1",
    lessons: ["Compound Nouns/Adjectives", "Can, Should, Must"],
  },
  {
    unit: "Unit2",
    lessons: ["Synonyms", "Relative Clauses"],
  },
  {
    unit: "Unit3",
    lessons: [
      "Affixes in English",
      "Participle Phrases",
      "It is/ It was",
      "Not only ... but also",
    ],
  },
  {
    unit: "Unit4",
    lessons: ["-ed and -ing adjectives", "Adjectives with prepositions"],
  },
  {
    unit: "Unit5",
    lessons: [
      "Colour idioms",
      "Subordinating conjunctions in adverbial clauses",
    ],
  },
];

export default { quesDB, selectUnits };
