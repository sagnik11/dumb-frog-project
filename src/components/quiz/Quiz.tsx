import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QuizCard } from './QuizCard';
import { questions } from '../../data/questions';
import { UserResponse, BehaviorAnalysis, Book } from '../../types';
import { analyzeBehavior, getBookRecommendations } from '../../lib/api/bookService';
import { Progress } from '../ui/progress';
import { Button } from '../ui/button';

export function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<UserResponse[]>([]);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [behaviorAnalysis, setBehaviorAnalysis] = useState<BehaviorAnalysis | null>(null);
  const [bookRecommendations, setBookRecommendations] = useState<Book[]>([]);

  const progress = Math.round(((currentQuestionIndex) / questions.length) * 100);

  const handleAnswer = (response: UserResponse) => {
    // Check if we already have a response for this question
    const existingResponseIndex = responses.findIndex(
      (r) => r.questionId === response.questionId
    );

    if (existingResponseIndex !== -1) {
      // Update existing response
      const updatedResponses = [...responses];
      updatedResponses[existingResponseIndex] = response;
      setResponses(updatedResponses);
    } else {
      // Add new response
      setResponses([...responses, response]);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizComplete(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setResponses([]);
    setIsQuizComplete(false);
    setBehaviorAnalysis(null);
    setBookRecommendations([]);
  };

  useEffect(() => {
    if (isQuizComplete && responses.length === questions.length) {
      const fetchResults = async () => {
        setIsLoading(true);
        try {
          // Make parallel API calls
          const [behavior, books] = await Promise.all([
            analyzeBehavior(responses),
            getBookRecommendations(responses)
          ]);
          
          setBehaviorAnalysis(behavior);
          setBookRecommendations(books);
        } catch (error) {
          console.error('Error fetching results:', error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchResults();
    }
  }, [isQuizComplete, responses]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-white dark:from-pink-950 dark:via-pink-900 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-pink-600 dark:text-pink-300 mb-2">
            Find the Right Book for Every Mood
          </h1>
          <p className="text-pink-700 dark:text-pink-400">
            Answer a few questions and we'll suggest the perfect books for you.
          </p>
        </div>

        {!isQuizComplete ? (
          <div className="space-y-6">
            <div className="mb-8">
              <div className="flex justify-between text-sm font-medium text-pink-600 dark:text-pink-400 mb-2">
                <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-2 bg-pink-100 dark:bg-pink-900" />
            </div>

            <AnimatePresence mode="wait">
              <QuizCard
                key={currentQuestionIndex}
                question={questions[currentQuestionIndex]}
                onAnswer={handleAnswer}
                onComplete={handleNextQuestion}
                isActive={true}
              />
            </AnimatePresence>
          </div>
        ) : (
          <div className="space-y-8">
            {isLoading ? (
              <div className="text-center py-12">
                <motion.div
                  className="inline-block h-12 w-12 rounded-full border-4 border-pink-500 border-t-transparent"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <p className="mt-4 text-pink-600 dark:text-pink-400">Analyzing your preferences...</p>
              </div>
            ) : (
              <>
                {behaviorAnalysis && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-pink-200 dark:border-pink-800"
                  >
                    <h2 className="text-2xl font-bold text-pink-600 dark:text-pink-300 mb-4">Your Reading Profile</h2>
                    <div className="space-y-3">
                      <p className="text-pink-700 dark:text-pink-300"><span className="font-medium">Current Mood:</span> {behaviorAnalysis.mood}</p>
                      <p className="text-pink-700 dark:text-pink-300"><span className="font-medium">Reading Preference:</span> {behaviorAnalysis.readingPreference}</p>
                      <p className="text-pink-700 dark:text-pink-300"><span className="font-medium">Insight:</span> {behaviorAnalysis.personalityInsight}</p>
                    </div>
                  </motion.div>
                )}

                {bookRecommendations.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h2 className="text-2xl font-bold text-pink-600 dark:text-pink-300 mb-6">Your Book Recommendations</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {bookRecommendations.map((book, index) => (
                        <motion.div
                          key={index}
                          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-pink-200 dark:border-pink-800 h-full flex flex-col"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                          whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        >
                          <div className="h-48 overflow-hidden">
                            <img 
                              src={book.coverImage} 
                              alt={book.title} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-4 flex-grow">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{book.title}</h3>
                            <p className="text-sm text-pink-600 dark:text-pink-400 mb-2">{book.author}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{book.description}</p>
                            <span className="inline-block bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 text-xs px-2 py-1 rounded">
                              {book.genre}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                <div className="text-center mt-8">
                  <Button 
                    onClick={handleRestartQuiz}
                    className="bg-pink-600 hover:bg-pink-700 text-white"
                  >
                    Take the Quiz Again
                  </Button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
