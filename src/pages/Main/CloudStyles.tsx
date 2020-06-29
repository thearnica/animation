import {createUseStyles} from 'react-jss'

export const useCloudStyles = createUseStyles({
  '@keyframes dash': {
    'from': {
      strokeDashoffset: 1000,
    },
    'to': {
      strokeDashoffset: 0,
    }
  },

  cloudVisible: {
    animation: `$dash 5s linear both`,
  },


  cloud: {
    strokeDasharray: 1000,
    strokeDashoffset: 1000,
  },

  shadow: {
    opacity: 0,
  },

  shadowVisible: {
    opacity: 1,
    transform: 'translate(-5px, -4px)',

    transitionProperty: 'opacity, transform',
    transitionDuration: '400ms',
    transitionTimingFunction: 'linear',
    transitionDelay: '3s',
  }
});
