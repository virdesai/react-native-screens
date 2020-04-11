import React from 'react';
import { Animated, View } from 'react-native';

let ENABLE_SCREENS = true;

export function enableScreens(shouldEnableScreens = true) {
  if (shouldEnableScreens) {
    console.warn(
      'react-native-screens is not fully supported on this platform yet.'
    );
  }

  ENABLE_SCREENS = shouldEnableScreens;
}

export function screensEnabled() {
  return ENABLE_SCREENS;
}

export class NativeScreen extends React.Component {
  static defaultProps = {
    active: true,
  };

  render() {
    const { active, style, ...rest } = this.props;

    return (
      <View
        style={[style, ENABLE_SCREENS && !active ? { display: 'none' } : null]}
        {...rest}
      />
    );
  }
}

export const Screen = Animated.createAnimatedComponent(NativeScreen);

export const ScreenContainer = View;

export const NativeScreenContainer = View;
