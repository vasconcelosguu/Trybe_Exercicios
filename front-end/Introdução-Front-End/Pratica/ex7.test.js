const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

it('uppercase "test" to equal "TEST"', (done) => {
  uppercase('lontra', (str) => {
    try {
      expect(str).toBe('LONTRA');
      done();
    } catch (error) {
      done(error);
    }
  });
});