import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import themeStyle from '../../../styles/theme.style';
import Films from './films';
function AllFilms() {
  return (
    <View style={style.wrapper}>
      <Text style={style.text_header}>All Films</Text>
      <View>
        <Films/>
      </View>
    </View>
  );
}

export default AllFilms


const style = StyleSheet.create({
  wrapper: {
    marginTop: 20,
  },
  text_primary_color: {
    color: themeStyle.FONT_PRIMARY_COLOR,
  },
  text_header: {
    color: themeStyle.FONT_HEADER_COLOR,
    fontSize: themeStyle.FONT_SIZE_LARGE,
    fontWeight: '800',
    marginBottom: 40,
  },
});
