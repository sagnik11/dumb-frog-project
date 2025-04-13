import { motion } from 'framer-motion';
import { useState } from 'react';
import { Question, UserResponse } from '../../types';

interface QuizCardProps {
  question: Question;
  onAnswer: (response: UserResponse) => void;
  onComplete: () => void;
  isActive: boolean;
}

export function QuizCard({ question, onAnswer, onComplete, isActive }: QuizCardProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    onAnswer({ questionId: question.id, answer: option });
    
    // Add a small delay before transitioning to the next question
    setTimeout(() => {
      onComplete();
    }, 500);
  };

  return (
    <motion.div
      className="w-full max-w-md mx-auto"
      initial={{ opacity: 0, x: 100 }}
      animate={{
        opacity: isActive ? 1 : 0,
        x: isActive ? 0 : -100,
        scale: isActive ? 1 : 0.8,
      }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-pink-200 dark:border-pink-900">
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {question.text}
          </h3>
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <motion.button
                key={index}
                className={`w-full text-left p-3 rounded-lg transition-colors ${selectedOption === option
                  ? 'bg-pink-500 text-white'
                  : 'bg-pink-50 dark:bg-pink-950 hover:bg-pink-100 dark:hover:bg-pink-900 text-gray-700 dark:text-gray-200'
                  }`}
                onClick={() => handleOptionSelect(option)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {option}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
