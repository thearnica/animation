import {createUseStyles} from 'react-jss'

export const useSVGStyles = createUseStyles<{ height: number }>({
  side: {
    transform: props => `translateY(${props.height - 15}px)`,
  },

  sideVisible: {
    '&&': {
      transform: 'translateY(0)',

      transitionTimingFunction: 'linear',
      transitionDuration: '4s',
      transitionProperty: 'transform',
    }
  },

  top: {
    transform: props => `scale(0) translateY(${props.height - 15}px)`,
    transformOrigin: 'center bottom',
  },

  topVisible: {
    opacity: 1,
    transform: props =>  `scale(1) translateY(${props.height - 15}px)`,

    transitionTimingFunction: 'linear',
    transitionDuration: '1s',
    transitionProperty: 'transform opacity',
  },

  topSecondStep: {
    '&&': {
      transform: 'scale(1) translateY(0)',

      transitionTimingFunction: 'linear',
      transitionDuration: '4s',
      transitionProperty: 'transform',
    }
  },
});
