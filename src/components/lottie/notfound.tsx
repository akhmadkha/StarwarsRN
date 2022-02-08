import React from 'react';
import {StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';
export default function Notfound() {
  return (
    <View style={style.wrapper}>
      <LottieView source={require('../../assets/lottie/notfound.json')} autoPlay loop />
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
});
