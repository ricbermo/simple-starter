Date.now = jest.fn(() => new Date(Date.UTC(2019, 5, 1, 0, 0, 0)));

/* eslint-disable-next-line no-global-assign */
Date = class extends Date {
  constructor(date) {
    if (date) {
      /* eslint-disable-next-line constructor-super */
      return super(date);
    }

    return new Date('2019-06-01T00:00:00Z');
  }
};
