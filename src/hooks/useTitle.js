import { useEffect } from 'react';

const useTitel = (title) => {
  useEffect(() => {
    document.title = `${title} - GOOD DAY`;
  }, [title]);
};

export default useTitel;
