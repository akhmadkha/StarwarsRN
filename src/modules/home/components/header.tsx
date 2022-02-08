import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import theme from '../../../styles/theme.style';

export default function Header() {
  return (
    <ImageBackground source={require('../../../assets/images/header-bg.png')} style={style.wrapper}>
      <View style={style.profile_wrapper}>
        <View>
          <Text style={style.greeting}>Good Morning</Text>
          <Text style={style.name}>Akhmad Khalif</Text>
        </View>
        <View>
          <Image
            source={require('../../../assets/images/profile-image.jpg')}
            style={style.profile}
          />
        </View>
      </View>
      <Image
        source={require('../../../assets/images/star-wars-logo-black.png')}
        style={style.logo}
      />
      
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
  },
  profile_wrapper:{
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    
  },
  logo: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },
  greeting: {
    color: theme.FONT_PRIMARY_COLOR,
    fontSize: theme.FONT_SIZE_XSMALL,
  },
  name: {
    color: theme.FONT_PRIMARY_COLOR,
    fontWeight: "700"
  },
  profile: {
    height: 40,
    width: 40,
    borderRadius: 40/2,
    marginLeft: 10
  }
});
