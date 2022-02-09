import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import BackButton from '../../../components/global/back_button';
import theme from '../../../styles/theme.style';

const images: any = {
  '1': require('../../../assets/images/posters/episode1.jpeg'),
  '2': require('../../../assets/images/posters/episode2.jpeg'),
  '3': require('../../../assets/images/posters/episode3.jpeg'),
  '4': require('../../../assets/images/posters/episode4.jpeg'),
  '5': require('../../../assets/images/posters/episode5.jpeg'),
  '6': require('../../../assets/images/posters/episode6.jpeg'),
};
export default function Header(props: any) {
  
  console.log(images[props.episodeID], "yuhu")
  return (
    <ImageBackground
      source={require('../../../assets/images/header-bg.png')}
      style={style.wrapper}>
      <View style={style.header_wrapper}>
        <BackButton title="Movie Detail" />
      </View>
      {/* <View style={style.cover_wrapper}>
        <Image source={images[props.episodeID]} style={style.cover} />
      </View> */}
      {
        props.episodeID && <Image source={images[props.episodeID]} style={style.cover} /> 
      }
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  wrapper: {
    // height: '30%',
    paddingBottom: 50,
    paddingHorizontal: 30,
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 300,
    maxHeight: 500
    
  },
  header_wrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 25,
    marginBottom: 30,
  },
  cover_wrapper: {
    borderRadius: 20,
    // width: '60%',
    // overflow: 'hidden',
  },
  cover: {
    height: "70%",
    // width: '100%',
    resizeMode: 'contain',
  },
  greeting: {
    color: theme.FONT_PRIMARY_COLOR,
    fontSize: theme.FONT_SIZE_XSMALL,
  },
});
