export * from './helpers';

export function delayFor(timeout = 500) {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export function retryFor(cb: () => void, maxTries = 5): Promise<boolean> {
  let tries = 0;
  const _retry = async (timeout = 500) => {
    try {
      ++tries;
      cb();
      return true;
    } catch (e) {
      if (tries < maxTries) {
        await delayFor(timeout);
        _retry(timeout);
      }
      return false;
    }
  };

  return _retry();
}
