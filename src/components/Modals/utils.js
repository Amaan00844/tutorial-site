export const LEVEL_SCORE_MAP = {
  basic: 50,
  intermediate: 70,
  hard: 100,
  project_basic: 150,
  project_intermediate: 225,
  project_hard: 300
};

export const MAX_ATTEMPTS = 10;
export const TIME_LIMIT = 120;

export const normalizeLevel = (level) =>
  level.charAt(0).toUpperCase() + level.slice(1).toLowerCase();

export const calculateScore = (attempts, duration, level) => {
  const maxScore = LEVEL_SCORE_MAP[level] || LEVEL_SCORE_MAP[level.split('_')[1]] || 50;
  const passScore = 0.6 * maxScore;
  const attemptScore =
    attempts < MAX_ATTEMPTS
      ? ((MAX_ATTEMPTS + 1 - attempts) / MAX_ATTEMPTS) * (0.2 * maxScore)
      : 0;
  const timeScore =
    duration < TIME_LIMIT
      ? ((TIME_LIMIT - duration) / TIME_LIMIT) * (0.2 * maxScore)
      : 0;

  return {
    total: Math.round(passScore + attemptScore + timeScore),
    breakdown: {
      passScore: Math.round(passScore),
      attemptScore: Math.round(attemptScore),
      timeScore: Math.round(timeScore),
    },
  };
};