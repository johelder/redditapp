import { formatDate } from './dateFormat';

describe('dateFormat Function', () => {
  it('should return a formatted date from a timestamp', () => {
    const currentTime = Date.now() / 1000;
    const formattedDate = formatDate(currentTime);

    expect(formattedDate).toBe('0 segundo atrás');
  });
});
