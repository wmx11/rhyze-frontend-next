import { animate, inView, stagger } from 'motion';
import { useEffect } from 'react';

const baseAnimation = {
  opacity: [0, 1],
  transform: ['translateY(-90px)', 'translateY(0px)'],
} as Record<string, string[] | number[]>;

const useAnimation = ({
  selector = '.animate',
  animation = baseAnimation,
  duration = 0.7,
  staggerDuration = 0.1,
}) => {
  useEffect(() => {
    if (typeof window === undefined) {
      return;
    }

    inView(
      'section',
      (info) => {
        animate(
          info.target.querySelectorAll(selector),
          {
            ...animation,
          },
          {
            duration: duration,
            delay: stagger(staggerDuration),
          }
        );
      },
      { margin: '-25%' }
    );
  }, []);
};

export default useAnimation;
