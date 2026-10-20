import { useEffect, useRef, useState, type RefObject } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useScrollReveal = <T extends HTMLElement = HTMLDivElement>(
  { threshold = 0.12, rootMargin = '0px 0px -8% 0px' }: ScrollRevealOptions = {}
): [RefObject<T>, boolean] => {
  const ref = useRef<T>(null) as RefObject<T>;
  // No IntersectionObserver (old browsers, some crawlers): show content immediately.
  const [isVisible, setIsVisible] = useState<boolean>(() => typeof IntersectionObserver === 'undefined');

  useEffect(() => {
    const node = ref.current;
    if (!node || isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, isVisible]);

  return [ref, isVisible];
};
