import { QuestionCard } from '../QuestionCard/QuestionCard';
import { Result } from '../Result/Result';
import { useState } from 'react';
import { questionsPL } from '../../data/questions.pl';
import { questionsEN } from '../../data/questions.en';
import { ui } from '../../i18n/ui';
import pianoIcon from '../../../public/piano-icon.svg';

export function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answerStatus, setAnswerStatus] = useState<
    'none' | 'correct' | 'incorrect'
  >('none');
  const [isFinished, setIsFinished] = useState(false);
  const [points, setPoints] = useState<number>(0);
  const [language, setLanguage] = useState<'PL' | 'EN'>(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage === 'EN' ? 'EN' : 'PL';
  });

  const questions = language === 'PL' ? questionsPL : questionsEN;
  const correctAnswer = questions[currentQuestionIndex].correctAnswerIndex;
  const t = ui[language];

  console.log(answerStatus);

  function handleAnswerCheck(selectedAnswer: number) {
    if (selectedAnswer === correctAnswer) {
      setAnswerStatus('correct');
      setPoints((prev: number) => prev + 1);
    } else {
      setAnswerStatus('incorrect');
    }

    setTimeout(() => {
      setAnswerStatus('none');
      if (currentQuestionIndex === questions.length - 1) {
        setIsFinished(true);
      } else {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      }
    }, 1000);
  }

  function changeLanguage(nextLanguage: 'PL' | 'EN') {
    setLanguage(nextLanguage);
    localStorage.setItem('language', nextLanguage);
    setCurrentQuestionIndex(0);
    setAnswerStatus('none');
    setIsFinished(false);
    setPoints(0);
  }

  function resetQuiz() {
    setCurrentQuestionIndex(0);
    setAnswerStatus('none');
    setIsFinished(false);
    setPoints(0);
  }

  return (
    <div className="flex flex-col min-h-dvh w-full bg-[#030712] text-[#fafbfc] text-center px-4 py-4 sm:px-8 lg:px-16">
      <header className="flex flex-col mb-6">
        <div className="mb-6 flex flex-row justify-between items-center sm:mb-10">
          <img
            src={pianoIcon}
            alt="Quiz logo"
            className="h-6 w-6 sm:h-8 sm:w-8"
          />
          <div className="flex gap-2">
            <button
              className="text-sm px-2 py-1 rounded border border-gray-600 disabled:opacity-50 sm:text-base sm:px-3 sm:py-1.5 cursor-pointer"
              disabled={language === 'PL'}
              onClick={() => {
                if (language === 'PL') return;
                changeLanguage('PL');
              }}
            >
              PL
            </button>
            <button
              className="text-sm px-2 py-1 rounded border border-gray-600 disabled:opacity-50 sm:text-base sm:px-3 sm:py-1.5 cursor-pointer"
              disabled={language === 'EN'}
              onClick={() => {
                if (language === 'EN') return;
                changeLanguage('EN');
              }}
            >
              EN
            </button>
          </div>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
          {t.title}
          <span className="relative inline-block">
            {t.name}
            <span className="absolute left-0 -bottom-2 sm:-bottom-3 h-1.5 sm:h-2 w-full rounded-full bg-linear-to-r from-indigo-500 to-pink-500" />
          </span>
        </h1>
      </header>
      <main className="flex flex-1 justify-center mt-6 sm:mt-10">
        <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl flex flex-col justify-evenly sm:justify-start">
          {!isFinished ? (
            <QuestionCard
              question={questions[currentQuestionIndex].question}
              currentQuestionIndex={currentQuestionIndex}
              answers={questions[currentQuestionIndex].answers}
              key={currentQuestionIndex}
              onAnswerCheck={handleAnswerCheck}
              selectAnswerLabel={t.selectAnswer}
              nextQuestionLabel={t.next}
            />
          ) : (
            <Result
              points={points}
              questions={questions}
              resultLabel={t.resultTitle}
              retryLabel={t.retryButton}
              resetQuiz={resetQuiz}
              resultHigh={t.resultHigh}
              resultMedium={t.resultMedium}
              resultLow={t.resultLow}
            />
          )}
        </div>
      </main>
    </div>
  );
}
