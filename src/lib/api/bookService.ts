import { BehaviorAnalysis, Book, UserResponse } from '../../types';

// Function to analyze user behavior based on quiz responses using WorqHat API
export const analyzeBehavior = async (responses: UserResponse[]): Promise<BehaviorAnalysis> => {
  try {
    // Format the user responses into a prompt for the AI
    const userResponsesText = responses.map(r => `Question ${r.questionId}: ${r.answer}`).join('\n');
    
    const prompt = `Based on the following quiz responses about reading preferences, analyze the user's behavior, mood, and what kind of books would suit them best:\n${userResponsesText}\n\nProvide an analysis with these three aspects:\n1. Current mood\n2. Reading preference\n3. A brief personality insight related to their reading choices`;
    
    const options = {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer wh_m98i5sr8Dh2c0W7fj3t8z8E13mKs8l5xfPtiNAhm',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        question: prompt,
        model: "aicon-v4-nano-160824",
        randomness: 0.5,
        stream_data: false,
        training_data: "You are a literary expert who analyzes reading preferences. Your analysis should be insightful and personalized.",
        response_type: "text"
      })
    };

    const response = await fetch('https://api.worqhat.com/api/ai/content/v4', options);
    const data = await response.json();
    
    // Parse the AI response
    const aiResponse = data.content || '';
    
    // Extract the mood, reading preference, and personality insight
    // This is a simple parsing approach - you might need to adjust based on actual API responses
    const moodMatch = aiResponse.match(/mood:?\s*([^\n]+)/i);
    const preferenceMatch = aiResponse.match(/preference:?\s*([^\n]+)/i);
    const insightMatch = aiResponse.match(/insight:?\s*([^\n]+)/i);
    
    return {
      mood: moodMatch ? moodMatch[1].trim() : 'Introspective',
      readingPreference: preferenceMatch ? preferenceMatch[1].trim() : 'Varied genres with depth',
      personalityInsight: insightMatch ? insightMatch[1].trim() : 'You appreciate depth and meaning in your reading choices.'
    };
  } catch (error) {
    console.error('Error analyzing behavior:', error);
    // Return fallback analysis in case of error
    return {
      mood: 'Contemplative',
      readingPreference: 'Thought-provoking literature',
      personalityInsight: 'You seek meaning and connection in your reading choices.'
    };
  }
};

// Function to recommend books based on quiz responses using WorqHat API
export const getBookRecommendations = async (responses: UserResponse[]): Promise<Book[]> => {
  try {
    // Format the user responses into a prompt for the AI
    const userResponsesText = responses.map(r => `Question ${r.questionId}: ${r.answer}`).join('\n');
    
    const prompt = `Based on the following quiz responses about reading preferences, suggest three books that would be perfect for this reader:\n${userResponsesText}\n\nProvide the output in JSON format with an array of books, each containing title, author, description, coverImage (use placeholder URLs), and genre.`;
    
    const options = {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer wh_m98i5sr8Dh2c0W7fj3t8z8E13mKs8l5xfPtiNAhm',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        question: prompt,
        model: "aicon-v4-nano-160824",
        randomness: 0.5,
        stream_data: false,
        training_data: "You are a literary expert who recommends books based on readers' preferences. Your recommendations should be specific and diverse.",
        response_type: "json"
      })
    };

    const response = await fetch('https://api.worqhat.com/api/ai/content/v4', options);
    const data = await response.json();
    console.log("data", data);
    
    // Parse the AI response
    if (data.content && Array.isArray(data.content)) {
      return data.content.map((book: any) => ({
        title: book.title || 'Recommended Book',
        author: book.author || 'Unknown Author',
        description: book.description || 'A fascinating read that matches your preferences.',
        coverImage: book.coverImage || 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1287&auto=format&fit=crop',
        genre: book.genre || 'Fiction'
      }));
    }
    
    // If the API doesn't return the expected format, return fallback recommendations
    return getFallbackRecommendations();
  } catch (error) {
    console.error('Error getting book recommendations:', error);
    // Return fallback recommendations in case of error
    return getFallbackRecommendations();
  }
};

// Fallback book recommendations if the API fails
const getFallbackRecommendations = (): Book[] => [
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
