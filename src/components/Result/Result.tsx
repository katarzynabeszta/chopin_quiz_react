import type { Question } from '../../data/questions.en';

type ResultProps = {
  points: number;
  questions: Question[];
  resultLabel: string;
  retryLabel: string;
  resultHigh: string;
  resultMedium: string;
  resultLow: string;
  resetQuiz: () => void;
};

export function Result({
  points,
  questions,
  resultLabel,
  retryLabel,
  resetQuiz,
  resultHigh,
  resultMedium,
  resultLow,
}: ResultProps) {
  const scorePercentage = Math.round((points / questions.length) * 100);
  let performance: 'high' | 'medium' | 'low';
  if (scorePercentage >= 80) {
    performance = 'high';
  } else if (scorePercentage >= 50) {
    performance = 'medium';
  } else {
    performance = 'low';
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-start px-4 text-center mt-8 mb-8">
      <div className="w-full max-w-sm rounded-2xl bg-white/5 p-6 backdrop-blur-sm md:mb-8">
        <h2 className="text-lg font-medium text-white/80">{resultLabel}</h2>

        <div className="mt-2 mb-8 text-6xl font-bold tracking-tight">
          {scorePercentage}%
        </div>

        <div className="mt-2 mb-8 text-5xl">
          {performance === 'high' && '🎉'}
          {performance === 'medium' && '🙂'}
          {performance === 'low' && '☹️'}
        </div>

        <p className="mt-2 text-base text-white/70">
          {performance === 'high' && resultHigh}
          {performance === 'medium' && resultMedium}
          {performance === 'low' && resultLow}
        </p>
      </div>

      <button
        onClick={() => resetQuiz()}
        className="my-4 bg-linear-to-r from-indigo-600 to-pink-500 text-white h-12 sm:h-14 w-full rounded-xl font-medium text-sm sm:text-base active:scale-[0.98] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {retryLabel}
      </button>
    </div>
  );
}
