// deno-lint-ignore-file
import { animation, keyframes } from 'twind/css';

export const underlined = animation('0.7s ease infinite', {
  'from, 0%, to': {
    width: '0%',
  },
  '100%': {
    width: '100%',
  },
});

export const animatePhoto = animation('1.2s ease-in-out', {
  'from, 0%, to': {
    opacity: 0,
    transform: 'translateX(-120%)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateX(0%)',
  },
});

export const revealAnimation = (time: number, ease: string = 'easa-in-out') => {
  return animation(`${time}s ${ease}`, {
    'from, 0%, to': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  });
};

export const revealAnimationV2 = (time: number) => {
  return animation(`${time}s ease`, {
    'from, 0%, to': {
      opacity: 0,
      transform: 'translateX(-100%)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateX(0%)',
    },
  });
};

export const glow = keyframes({
  'from, 0%, to': {
    transform: ' rotate(180deg)',
    backgroundSize: '60%',
  },
  '50%': {
    transform: ' rotate(-180deg)',
    backgroundSize: '200%',
  },
  '80%': {
    transform: ' rotate(0deg)',
    backgroundSize: '100%',
  },
});

export const slideTop = animation('1.4s ease-in-out', {
  'from, 0%, to': {
    transform: 'translateY(-90%)',
  },
  '100%': {
    transform: 'translateY(0%)',
  },
});
