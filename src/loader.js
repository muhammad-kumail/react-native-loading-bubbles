import React, { useState, useEffect } from 'react';
import { View, Animated } from 'react-native';

Loader.defaultProps = {
  leftBubbleColor: 'red',
  middleBubbleColor: 'green',
  rightBubbleColor: 'blue'
}

export default function Loader({
  leftBubbleColor,
  middleBubbleColor,
  rightBubbleColor
}) {
  const [animationValue1, setAnimationValue1] = useState(new Animated.Value(0));
  const [animationValue2, setAnimationValue2] = useState(new Animated.Value(0));
  const [animationValue3, setAnimationValue3] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animationValue1, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true
        }),
        Animated.timing(animationValue1, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true
        })
      ])
    ).start();

    setTimeout(() => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(animationValue2, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true
          }),
          Animated.timing(animationValue2, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true
          })
        ])
      ).start();
    }, 50);

    setTimeout(() => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(animationValue3, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true
          }),
          Animated.timing(animationValue3, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true
          })
        ])
      ).start();
    }, 100);
    // Animated.timing(animationValue1).stop();
    // Animated.timing(animationValue2).stop();
    // Animated.timing(animationValue3).stop();
  }, []);

  const animatedStyles1 = {
    transform: [
      {
        translateY: animationValue1.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 50],
          extrapolate: 'clamp'
        })
      }
    ]
  };

  const animatedStyles2 = {
    transform: [
      {
        translateY: animationValue2.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 50],
          extrapolate: 'clamp'
        })
      }
    ]
  };

  const animatedStyles3 = {
    transform: [
      {
        translateY: animationValue3.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 50],
          extrapolate: 'clamp'
        })
      }
    ]
  };

  return (
    <View style={{ zIndex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
      <Animated.View style={[{
        width: 15,
        height: 15,
        borderRadius: 25,
        backgroundColor: leftBubbleColor,
        marginHorizontal: 5
      }, animatedStyles1]} />
      <Animated.View style={[{
        width: 15,
        height: 15,
        borderRadius: 25,
        backgroundColor: middleBubbleColor,
        marginHorizontal: 5,
      }, animatedStyles2]} />
      <Animated.View style={[{
        width: 15,
        height: 15,
        borderRadius: 25,
        backgroundColor: rightBubbleColor,
        marginHorizontal: 5,
      }, animatedStyles3]} />
    </View>
  );
};
