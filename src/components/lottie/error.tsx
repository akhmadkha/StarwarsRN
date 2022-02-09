import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import theme from "../../styles/theme.style";

type Props = {
  refetch: () => void
}
export default function Error(props: Props) {
  return (
    <View style={style.wrapper}>
      <LottieView
        source={require('../../assets/lottie/error.json')}
        autoPlay
        loop
        style={style.lottie}
      />
      <TouchableOpacity style={style.button_reload} onPress={() => props.refetch()}>
        <Text style={style.reload_text}>Click to reload</Text>
      </TouchableOpacity>
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
    width: 120,
  },
  button_reload: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  reload_text: {
    color: theme.FONT_PRIMARY_COLOR,
  },
});
