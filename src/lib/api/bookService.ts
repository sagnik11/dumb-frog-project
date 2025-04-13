import { BehaviorAnalysis, Book, UserResponse } from '../../types';

// Function to analyze user behavior based on quiz responses using WorqHat API
export const analyzeBehavior = async (responses: UserResponse[]): Promise<BehaviorAnalysis> => {
  try {
    // Format the user responses into a prompt for the AI
    const userResponsesText = responses.map(r => `Question ${r.questionId}: ${r.answer}`).join('\n');
    
    const prompt = `You are a friendly book enthusiast who loves to chat about reading preferences. Based on the following quiz responses, have a friendly conversation with the user about their reading style and book preferences. Start with a warm greeting and talk as if you're a friend who's excited to recommend some books. Don't use any formatted text or bullet points - just a natural, flowing conversation.\n\nHere are their quiz responses:\n${userResponsesText}\n\nYour response should feel like a casual chat that includes insights about their current mood, reading preferences, and mention 2-3 specific book titles that they might enjoy based on their preferences. Make it personal and warm!`;
    
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
        training_data: "You are a friendly book enthusiast who loves chatting about reading preferences. Always start with a warm greeting, speak in a conversational tone, and mention specific book titles the person might enjoy.",
        response_type: "text"
      })
    };

    const response = await fetch('https://api.worqhat.com/api/ai/content/v4', options);
    const data = await response.json();
    console.log("data behavior", data);
    
    // Parse the AI response
    const aiResponse = data.content || '';
    
    // Extract the mood, reading preference, and personality insight
    // This is a more flexible approach to extract information from conversational text
    let mood = 'Thoughtful';
    let readingPreference = 'Varied and interesting books';
    let personalityInsight = 'You have a unique and thoughtful approach to reading';
    
    // Try to extract mood from the response
    const moodIndicators = ['feeling', 'mood', 'seem', 'sounds like', 'sense'];
    for (const indicator of moodIndicators) {
      const regex = new RegExp(`${indicator}[^.!?]*[.!?]`, 'i');
      const match = aiResponse.match(regex);
      if (match) {
        const sentence = match[0];
        // Extract adjectives that might describe mood
        const moodWords = ['relaxed', 'energetic', 'contemplative', 'curious', 'melancholic', 'excited', 
                          'calm', 'adventurous', 'introspective', 'thoughtful', 'peaceful', 'imaginative'];
        for (const word of moodWords) {
          if (sentence.toLowerCase().includes(word)) {
            mood = word.charAt(0).toUpperCase() + word.slice(1);
            break;
          }
        }
        if (mood !== 'Thoughtful') break; // Found a mood, stop looking
      }
    }
    
    // Try to extract reading preference
    if (aiResponse.toLowerCase().includes('fantasy') || aiResponse.toLowerCase().includes('magical')) {
      readingPreference = 'Fantasy and magical worlds';
    } else if (aiResponse.toLowerCase().includes('adventure') || aiResponse.toLowerCase().includes('action')) {
      readingPreference = 'Adventure and action-packed stories';
    } else if (aiResponse.toLowerCase().includes('mystery') || aiResponse.toLowerCase().includes('thriller')) {
      readingPreference = 'Mysteries and thrillers';
    } else if (aiResponse.toLowerCase().includes('romance') || aiResponse.toLowerCase().includes('relationship')) {
      readingPreference = 'Romance and relationship stories';
    } else if (aiResponse.toLowerCase().includes('non-fiction') || aiResponse.toLowerCase().includes('learning')) {
      readingPreference = 'Thought-provoking non-fiction';
    }
    
    // Use the entire response as the personality insight
    personalityInsight = aiResponse;
    
    return {
      mood,
      readingPreference,
      personalityInsight
    };
  } catch (error) {
    console.error('Error analyzing behavior:', error);
    // Return fallback analysis in case of error
    return {
      mood: 'Contemplative',
      readingPreference: 'Thought-provoking literature',
      personalityInsight: 'Hey there! You seem like someone who enjoys books that make you think and feel. I love how youre drawn to stories with depth and meaning. I think youll really enjoy the recommendations Ive picked out for you! You might enjoy books like "The Night Circus" by Erin Morgenstern or "Circe" by Madeline Miller - both have beautiful writing and immersive worlds.'
    };
  }
};

// Function to recommend books based on quiz responses using WorqHat API
export const getBookRecommendations = async (responses: UserResponse[]): Promise<Book[]> => {
  try {
    // Format the user responses into a prompt for the AI
    const userResponsesText = responses.map(r => `Question ${r.questionId}: ${r.answer}`).join('\n');
    
    const prompt = `Based on the following quiz responses about reading preferences, suggest three books that would be perfect for this reader:\n${userResponsesText}\n\nProvide the output in JSON format with an array of books, each containing title, author, description, and genre.`;
    
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
    
    // Predefined cover images
    const coverImages = [
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1287&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1298&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1629992101753-56d196c8aabb?q=80&w=1290&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1495640388908-05fa85288e61?q=80&w=1287&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=1287&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1531928351158-2f736078e0a1?q=80&w=1287&auto=format&fit=crop'
    ];
    
    // Parse the AI response
    if (data.content) {
      // Handle the case where content is a string containing JSON
      let booksData;
      if (typeof data.content === 'string') {
        try {
          booksData = JSON.parse(data.content);
        } catch (e) {
          console.error('Error parsing JSON string from API:', e);
          return getFallbackRecommendations();
        }
      } else if (Array.isArray(data.content)) {
        // If content is already an array
        booksData = data.content;
      } else {
        console.error('Unexpected content format from API');
        return getFallbackRecommendations();
      }
      
      // Now booksData should be an array we can map over
      if (Array.isArray(booksData)) {
        return booksData.map((book: any, index: number) => ({
          title: book.title || 'Recommended Book',
          author: book.author || 'Unknown Author',
          description: book.description || 'A fascinating read that matches your preferences.',
          // Always use predefined cover images, ignoring what the model returns
          coverImage: coverImages[index % coverImages.length],
          genre: book.genre || 'Fiction'
        }));
      }
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
