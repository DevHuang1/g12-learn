export type selectType = {
  unit: string;
  lessons: string[];
};

interface Question {
  id: number;
  question: string;
  answer: string[];
}

export interface QuesDB {
  [lessonName: string]: Question[];
}
