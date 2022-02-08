import React from 'react';
import {StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';
export default function Loading() {
  return (
    <View style={style.wrapper}>
      <LottieView source={require('../../assets/lottie/loading.json')} autoPlay loop style={style.lottie} />
    </View>
  );
}

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: 120
  }
});
