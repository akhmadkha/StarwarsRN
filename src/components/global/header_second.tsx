import React from 'react'
import { ImageBackground, StyleSheet, View, Text } from 'react-native'
import themeStyle from '../../styles/theme.style'

type Props = {
  image: any,
  title: string
}
export default function HeaderSecond(props: Props) {
  return (
    <ImageBackground source={props.image} style={{marginBottom: 20}}>
      <View style={style.header_wrapper}>
        <Text style={style.title}>{props.title}</Text>
      </View>
    </ImageBackground>
  )
}

const style = StyleSheet.create({
  header_wrapper:{
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  title: {
    color: themeStyle.FONT_PRIMARY_COLOR,
    fontSize: 25,
    fontWeight: "900"
  }
})
