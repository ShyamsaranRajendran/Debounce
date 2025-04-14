import { useEffect, useState } from 'react';
import debounce from 'lodash.debounce'; // Correct import for lodash.debounce

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Create debounced function
    const debouncedFn = debounce(() => {
      setDebouncedValue(value);
    }, delay);

    // Call it
    debouncedFn();

    // Cleanup
    return () => {
      debouncedFn.cancel();
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;