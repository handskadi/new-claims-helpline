"use client";

import React, { useState, useRef } from "react";

interface FaqDropdownProps {
  question: string;
  answer: string;
  backgroundColor?: string;
  borderColor?: string;
  questionColor?: string;
  answerColor?: string;
}

const FaqDropdown: React.FC<FaqDropdownProps> = ({ 
  question, 
  answer,
  backgroundColor = '#F5F5F5',
  borderColor = '#D4D4D4',
  questionColor = 'black',
  answerColor = '#374151'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const containerStyle = {
    backgroundColor,
    borderColor
  };

  return (
    <div 
      className="w-full border pb-0.5 rounded-md overflow-hidden" 
      style={containerStyle}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start gap-2 py-2 px-3 text-left"
      >
        <span
          className={`text-xl font-bold transition-transform duration-200 ${
            isOpen ? "rotate-45" : ""
          }`}
          style={{ color: questionColor }}
        >
          +
        </span>
        <span 
          className="mt-1 text-base font-bold"
          style={{ color: questionColor }}
        >
          {question}
        </span>
      </button>

      <div 
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          height: isOpen ? contentRef.current?.scrollHeight + 'px' : '0',
        }}
      >
        <div className="px-4 pb-3">
          <p 
            className="text-base"
            style={{ color: answerColor }}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqDropdown;