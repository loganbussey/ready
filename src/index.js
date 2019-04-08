const ready = () => {
  const promise = new Promise((resolve) => {
    if (/complete|interactive/.test(document.readyState)) {
      resolve();
    } else {
      document.addEventListener('readystatechange', () => {
        if (document.readyState === 'interactive') {
          resolve();
        }
      });
    }
  });

  return promise;
};

export default ready;
