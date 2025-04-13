import { BehaviorAnalysis, Book, UserResponse } from '../../types';

// Dummy function to analyze user behavior based on quiz responses
export const analyzeBehavior = async (responses: UserResponse[]): Promise<BehaviorAnalysis> => {
  // Simulate API call with a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      // This would normally be determined by the API based on the responses
      const analysis: BehaviorAnalysis = {
        mood: responses.length > 3 ? 'Introspective' : 'Adventurous',
        readingPreference: responses.some(r => r.answer.includes('Fantasy')) ? 'Imaginative Fiction' : 'Thought-provoking Non-fiction',
        personalityInsight: 'You appreciate depth and meaning in your reading choices.'
      };
      resolve(analysis);
    }, 1000);
  });
};

// Dummy function to recommend books based on quiz responses
export const getBookRecommendations = async (responses: UserResponse[]): Promise<Book[]> => {
  // Simulate API call with a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      // This would normally be determined by the API based on the responses
      const books: Book[] = [
        {
          title: 'The Midnight Library',
          author: 'Matt Haig',
          description: 'Between life and death there is a library. When Nora Seed finds herself in the Midnight Library, she has a chance to make things right.',
          coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1287&auto=format&fit=crop',
          genre: 'Fiction'
        },
        {
          title: 'Atomic Habits',
          author: 'James Clear',
          description: 'An Easy & Proven Way to Build Good Habits & Break Bad Ones.',
          coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1298&auto=format&fit=crop',
          genre: 'Self-Help'
        },
        {
          title: 'The Song of Achilles',
          author: 'Madeline Miller',
          description: 'A tale of gods, kings, immortal fame, and the human heart.',
          coverImage: 'https://images.unsplash.com/photo-1629992101753-56d196c8aabb?q=80&w=1290&auto=format&fit=crop',
          genre: 'Historical Fiction'
        }
      ];
      resolve(books);
    }, 1500);
  });
};
