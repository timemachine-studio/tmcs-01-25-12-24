import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import { MessageProps } from '../../types/chat';
import { textGlowStyle, holographicTextStyle, wordAnimationVariants } from '../../utils/animations';
import { AnimatedWords } from './AnimatedWords';
import { ErrorMessage } from './ErrorMessage';

export function AIMessage({ content }: MessageProps) {
  const isError = content.includes('API key');
  const words = content.split(' ');
  const isLongResponse = words.length > 13;
  const isVeryLongResponse = words.length > 30;

  // Dynamic text size classes based on content length
  const getTextSizeClass = () => {
    if (isVeryLongResponse) return 'text-xl sm:text-2xl md:text-3xl';
    if (isLongResponse) return 'text-2xl sm:text-3xl md:text-4xl';
    return 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl';
  };

  // Dynamic max width based on content length
  const getMaxWidthClass = () => {
    if (isVeryLongResponse) return 'max-w-2xl';
    if (isLongResponse) return 'max-w-xl';
    return 'max-w-lg';
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center min-h-[200px] w-full"
    >
      <div className={`text-center mx-auto px-4 sm:px-8 ${getMaxWidthClass()}`}>
        {isError ? (
          <ErrorMessage content={content} />
        ) : (
          <AnimatedWords 
            text={content}
            className={`ai-message font-bold ${getTextSizeClass()}`}
            style={{
              ...holographicTextStyle,
              lineHeight: isVeryLongResponse ? '1.4' : '1.2',
              whiteSpace: 'pre-wrap',
            }}
          />
        )}
      </div>
    </motion.div>
  );
}