export interface Question {
  id: number;
  text: string;
  options: string[];
}

export interface UserResponse {
  questionId: number;
  answer: string;
}

export interface Book {
  title: string;
  author: string;
  description: string;
  coverImage: string;
  genre: string;
}

export interface BehaviorAnalysis {
  mood: string;
  readingPreference: string;
  personalityInsight: string;
}
