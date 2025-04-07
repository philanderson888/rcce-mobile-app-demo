import { useEffect, useRef } from 'react';

export function usePullToRefresh(onRefresh: () => Promise<void>) {
  const startY = useRef(0);
  const pulling = useRef(false);

  useEffect(() => {
    const touchStart = (e: TouchEvent) => {
      if (window.scrollY === 0) {
        startY.current = e.touches[0].pageY;
        pulling.current = true;
      }
    };

    const touchMove = (e: TouchEvent) => {
      if (!pulling.current) return;

      const currentY = e.touches[0].pageY;
      const diff = currentY - startY.current;

      if (diff > 50) {
        pulling.current = false;
        onRefresh();
      }
    };

    const touchEnd = () => {
      pulling.current = false;
    };

    document.addEventListener('touchstart', touchStart);
    document.addEventListener('touchmove', touchMove);
    document.addEventListener('touchend', touchEnd);

    return () => {
      document.removeEventListener('touchstart', touchStart);
      document.removeEventListener('touchmove', touchMove);
      document.removeEventListener('touchend', touchEnd);
    };
  }, [onRefresh]);
}