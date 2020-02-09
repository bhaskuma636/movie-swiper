import { TransitionConfig, HeaderTransitionConfig, TransitionProps } from 'react-navigation-stack/lib/typescript/types';
import { Animated } from 'react-native';
import { theme } from '../theme';

export const fromRightWithFade = (transitionProps: TransitionProps): TransitionConfig & HeaderTransitionConfig => ({
  transitionSpec: {
    timing: Animated.timing,
  },
  screenInterpolator: ({ layout, position, scene }) => {
    const { index } = scene;
    const { initWidth } = layout;

    const translateX = position.interpolate({
      inputRange: [index - 1, index, index + 1],
      outputRange: [initWidth * 0.3, 0, 0],
    });

    const opacity = position.interpolate({
      inputRange: [index - 1, index, index + 1],
      outputRange: [0, 1, 1],
    });

    return {
      opacity,
      transform: [{ translateX }],
      // backgroundColor: theme.colors.background,
    };
  },
  containerStyle: {
    // backgroundColor: theme.gray.black,
  },
});