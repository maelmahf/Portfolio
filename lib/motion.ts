export const motionDuration = {
  instant: 0,
  fast: 0.22,
  standard: 0.45,
  reveal: 0.7,
} as const;

export const motionEase = {
  standard: [0.22, 1, 0.36, 1],
  entrance: [0.16, 1, 0.3, 1],
} as const;

export const revealViewport = {
  once: true,
  amount: 0.18,
} as const;
