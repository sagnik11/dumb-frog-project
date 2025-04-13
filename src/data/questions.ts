import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    text: 'How would you describe your current mood?',
    options: ['Relaxed', 'Energetic', 'Contemplative', 'Curious', 'Melancholic']
  },
  {
    id: 2,
    text: 'What kind of escape are you looking for right now?',
    options: ['Adventure', 'Knowledge', 'Emotional journey', 'Laughter', 'Mystery']
  },
  {
    id: 3,
    text: 'How much time do you have for reading?',
    options: ['Just a quick read', 'A few hours', 'I can dedicate a weekend', 'I want to get lost in a series', 'Just looking to browse']
  },
  {
    id: 4,
    text: 'Which setting appeals to you most?',
    options: ['Fantasy world', 'Historical period', 'Contemporary life', 'Futuristic society', 'Psychological landscape']
  },
  {
    id: 5,
    text: 'What's your preferred writing style?',
    options: ['Poetic and descriptive', 'Direct and fast-paced', 'Philosophical and thought-provoking', 'Humorous and witty', 'Atmospheric and immersive']
  }
];
