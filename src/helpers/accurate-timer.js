export const setExactTimeout = function (callback, duration, resolution) {
  const start = new Date().getTime();
  const timeout = setInterval(function () {
    if (new Date().getTime() - start > duration) {
      callback();
      clearInterval(timeout);
    }
  }, resolution);

  return timeout;
};
