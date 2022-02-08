import React from 'react';
import {ChevronLeft} from 'react-native-feather';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import theme from '../../styles/theme.style';
import { useNavigation } from '@react-navigation/native';

export default function BackButton(props: any) {
  const navigate = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigate.goBack()} style={style.wrapper}>
      <View style={style.button_back}>
        <ChevronLeft stroke="orange"/>
      </View>
      <Text style={style.back_title}>{props?.title ?? "Back"}</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  wrapper:{
    flexDirection: "row",
    alignItems: "center"
  },
  button_back: {
    backgroundColor: '#eaeaea',
    borderRadius: 5,
  },
  back_title: {
    color: theme.FONT_PRIMARY_COLOR,
    fontWeight: '700',
    marginLeft: 10
  },
});
