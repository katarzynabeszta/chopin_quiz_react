import { useState } from 'react';

type QuestionCardProps = {
  question: string;
  currentQuestionIndex: number;
  answers: string[];
  onAnswerCheck: (selectedAnswer: number) => void;
  selectAnswerLabel: string;
  nextQuestionLabel: string;
};

export function QuestionCard({
  question,
  currentQuestionIndex,
  answers,
  onAnswerCheck,
  selectAnswerLabel,
  nextQuestionLabel,
}: QuestionCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showWarning, setShowWarning] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  function handleNextClick() {
    if (selectedAnswer === null) {
      setShowWarning(true);
    } else {
      onAnswerCheck(selectedAnswer);
      setIsAnswered(true);
    }
  }

  return (
    <>
      <fieldset className="lg:mb-6">
        <legend className="text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed font-light min-h-12 sm:min-h-16 mb-4 sm:mb-6">
          {question}
        </legend>
        <div className="flex flex-col gap-3">
          {answers.map((answer, index) => {
            return (
              <div key={`question${currentQuestionIndex}-answer${index}`}>
                <input
                  type="radio"
                  name={`question${currentQuestionIndex}`}
                  id={`question${currentQuestionIndex}-answer${index}`}
                  aria-label={`answer${index + 1}: ${answer}`}
                  checked={selectedAnswer === index}
                  onChange={() => {
                    setSelectedAnswer(index);
                    setShowWarning(false);
                  }}
                  className="hidden"
                ></input>
                <label
                  className={`block p-4 sm:p-5 rounded-xl border border-white/10 cursor-pointer transition-all duration-200  hover:bg-[#1d1f29] text-sm sm:text-base lg:text-lg
                    ${
                      selectedAnswer === index
                        ? 'bg-[#1d1f29]'
                        : 'bg-transparent'
                    }`}
                  htmlFor={`question${currentQuestionIndex}-answer${index}`}
                >
                  {answer}
                </label>
              </div>
            );
          })}
        </div>
      </fieldset>
      <button
        className="my-4 bg-linear-to-r from-indigo-600 to-pink-500 text-white h-12 sm:h-14 w-full rounded-xl font-medium text-sm sm:text-base active:scale-[0.98] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        disabled={isAnswered}
        onClick={handleNextClick}
      >
        {nextQuestionLabel} ({currentQuestionIndex + 1}/20)
      </button>
      <div className="min-h-5">
        {showWarning && (
          <p className="text-[#5897b8] text-sm">{selectAnswerLabel}</p>
        )}
      </div>
    </>
  );
}
