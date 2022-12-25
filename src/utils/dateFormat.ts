const TIME_UNITS = [
  { unit: 'ano', milliseconds: 356 * 30 * 24 * 60 * 60 * 1000 },
  { unit: 'mês', milliseconds: 30 * 24 * 60 * 60 * 1000 },
  { unit: 'dia', milliseconds: 24 * 60 * 60 * 1000 },
  { unit: 'hora', milliseconds: 60 * 60 * 1000 },
  { unit: 'minuto', milliseconds: 60 * 1000 },
];

export const formatDate = (oldTimestamp: number): string => {
  const currentTimestamp = Date.now();
  const timeDifference = currentTimestamp - oldTimestamp * 1000;

  for (const { unit, milliseconds } of TIME_UNITS) {
    const value = Math.floor(timeDifference / milliseconds);
    if (value > 0) {
      return `${value} ${unit}${value > 1 ? 's' : ''} atrás`;
    }
  }

  return `${Math.round(timeDifference / 1000)} segundo${
    timeDifference / 1000 > 1 ? 's' : ''
  } atrás`;
};
