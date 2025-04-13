# 📚 Book Mood Matcher

A React TypeScript application that helps users find the perfect book based on their mood and preferences through an interactive quiz experience.

![Book Mood Matcher](https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1287&auto=format&fit=crop)

## 🌟 Features

- Interactive quiz with sliding card animations
- Personalized book recommendations based on user responses
- AI-powered behavior analysis that understands reading preferences
- Beautiful UI with pinkish theme and animated flower decorations
- Responsive design that works on all devices
- Integration with WorqHat AI API for intelligent recommendations

## 🚀 Tech Stack

- **React 19**: For building the user interface
- **TypeScript**: For type-safe code
- **Framer Motion**: For smooth animations and transitions
- **Tailwind CSS**: For styling and responsive design
- **shadcn/ui**: For beautiful, accessible UI components
- **WorqHat AI API**: For intelligent analysis and recommendations

## 📂 Project Structure

```
src/
├── assets/            # Static assets like images
├── components/        # UI components
│   ├── decorative/    # Decorative components like animated flowers
│   ├── quiz/          # Quiz-related components
│   └── ui/            # shadcn UI components
├── data/              # Static data like quiz questions
├── lib/               # Utility functions and services
│   └── api/           # API services for WorqHat integration
├── types/             # TypeScript type definitions
├── App.tsx           # Main application component
└── main.tsx          # Application entry point
```

## 🧩 Key Components

### Quiz Flow

1. **Quiz Component** (`src/components/quiz/Quiz.tsx`)
   - The main component that manages the quiz flow
   - Handles user responses and transitions between questions
   - Makes API calls to analyze behavior and get book recommendations
   - Displays loading states, results, and book recommendations

2. **QuizCard Component** (`src/components/quiz/QuizCard.tsx`)
   - Renders individual quiz questions as animated cards
   - Handles option selection and animations
   - Uses Framer Motion for smooth transitions

3. **FlowerAnimations Component** (`src/components/decorative/FlowerAnimations.tsx`)
   - Creates and manages the animated flower SVGs
   - Randomly positions and animates flowers across the screen
   - Adds visual interest and a playful feel to the application

### API Integration

1. **Book Service** (`src/lib/api/bookService.ts`)
   - Contains functions for interacting with the WorqHat AI API
   - `analyzeBehavior`: Analyzes user responses to understand reading preferences
   - `getBookRecommendations`: Gets personalized book recommendations based on user preferences
   - Includes error handling and fallback responses

### Data Models

1. **Types** (`src/types/index.ts`)
   - `Question`: Represents a quiz question with options
   - `UserResponse`: Captures user's answer to a question
   - `Book`: Represents a book recommendation
   - `BehaviorAnalysis`: Contains analysis of user's reading preferences

2. **Questions** (`src/data/questions.ts`)
   - Contains the quiz questions and options
   - Each question explores different aspects of reading preferences

## 🔄 Application Flow

1. **Quiz Initialization**:
   - The application starts by displaying the first question
   - A progress bar shows the user's progress through the quiz

2. **Question Navigation**:
   - User selects an answer for each question
   - The card animates out and the next question animates in
   - Progress bar updates to reflect current position

3. **API Requests**:
   - After completing all questions, two API requests are made:
     - `analyzeBehavior`: Gets a personalized analysis of reading preferences
     - `getBookRecommendations`: Gets book recommendations based on preferences

4. **Results Display**:
   - User's reading profile is displayed with mood and preferences
   - Book recommendations are shown with cover images, titles, authors, and descriptions
   - User can restart the quiz to get new recommendations

## 🎨 Styling and Animations

1. **Theme**:
   - Pinkish color scheme throughout the application
   - Custom color variables in `index.css`
   - Semi-transparent backgrounds with backdrop blur for a modern look

2. **Animations**:
   - Card sliding animations for question transitions
   - Fade and scale animations for results
   - Randomly appearing and disappearing flower decorations
   - Loading spinner animation during API requests

## 🔌 WorqHat AI API Integration

### Behavior Analysis

The `analyzeBehavior` function sends user responses to the WorqHat AI API to get a personalized analysis:

```typescript
const analyzeBehavior = async (responses: UserResponse[]): Promise<BehaviorAnalysis> => {
  // Format user responses into a prompt
  // Make API request to WorqHat
  // Parse the response to extract mood, preferences, and insights
  // Return the analysis or fallback if there's an error
};
```

The API is prompted to respond in a friendly, conversational tone that starts with a greeting and includes specific book recommendations.

### Book Recommendations

The `getBookRecommendations` function gets personalized book recommendations:

```typescript
const getBookRecommendations = async (responses: UserResponse[]): Promise<Book[]> => {
  // Format user responses into a prompt
  // Request book recommendations in JSON format
  // Parse the response and format the books
  // Return the recommendations or fallbacks if there's an error
};
```

The function uses predefined cover images to ensure consistent, high-quality visuals.

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd dumb-frog-project
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Environment Variables

To use the WorqHat AI API, you'll need to provide your API key in the `bookService.ts` file:

```typescript
headers: {
  'Authorization': 'Bearer YOUR_WORQHAT_API_KEY',
  'Content-Type': 'application/json'
}
```

## 🧪 Customization

### Adding New Questions

To add new questions, edit the `src/data/questions.ts` file:

```typescript
export const questions: Question[] = [
  {
    id: 6, // Use the next available ID
    text: 'Your new question text',
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']
  },
  // ... existing questions
];
```

### Changing the Theme

To modify the color scheme, edit the CSS variables in `src/index.css`:

```css
:root {
  --primary: oklch(0.698 0.191 351.092); /* Pink primary */
  --ring: oklch(0.698 0.191 351.092); /* Pink ring */
  /* ... other variables */
}
```

### Adding More Flower Designs

To add new flower designs, edit the `src/components/decorative/FlowerAnimations.tsx` file:

```typescript
const FlowerFive = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="1">
    <!-- Your SVG path data -->
  </svg>
);

// Then add it to the switch statement in the Flower component
```

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [WorqHat](https://worqhat.com) for their powerful AI API
- [shadcn/ui](https://ui.shadcn.com) for the beautiful UI components
- [Framer Motion](https://www.framer.com/motion/) for the animation library
- [Unsplash](https://unsplash.com) for the book cover images
