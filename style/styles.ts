import { css } from 'twind/css';

export enum BubbleSize {
  xxs = 'w-[150px] h-[150px]',
  xs = 'w-[200px] h-[200px]',
  sm = 'w-[300px] h-[300px]',
  md = 'w-[400px] h-[400px]',
  lg = 'w-[500px] h-[500px]',
  xl = 'w-[600px] h-[600px]',
}

export const bubble = css({
  '&': {
    background:
      'radial-gradient(circle at 50% 55%, rgba(240, 245, 255, 0.9), rgba(240, 245, 255, 0.9) 40%, rgba(225, 238, 255, 0.8) 60%, rgba(43, 130, 255, 0.4))',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '1%',
    left: '9%',
    height: '100%',
    width: '100%',
    borderRadius: '50%',
    background:
      'radial-gradient(circle at 130% 130%, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0) 46%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0.8) 58%, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 0) 100%)',
    filter: 'blur(5px)',
    transform: 'translateX(45%) translateY(35%) rotateZ(165deg) rotateX(10deg)',
    zIndex: 1,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    background:
      'radial-gradient(circle at 50% 90%, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2) 74%, rgba(255,255,255,0.8) 81%, white 100%, rgba(255, 255, 255, 0) 100%)',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    transform: 'translateX(0%) translateY(0%) rotateZ(-40deg) ',
    boxShadow:
      '-5px 5px 15px 1px rgb(0,0,0,0.2), -6px 8px 10px 1px rgb(100,119,188, 0.2)',
    zIndex: 3,
  },
});

export const line = css({
  width: '100%',
  height: '2px',
  backgroundColor: '#00171f',
  opacity: 0.6,
  position: 'relative',
  '&::before': {
    position: 'absolute',
    content: '""',
    display: 'inline-block',
    backgroundColor: '#00171f',
    width: '30%',
    height: '4px',
    top: '0px',
    left: '0px',
  },
});
