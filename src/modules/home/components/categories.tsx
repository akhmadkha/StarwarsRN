import React from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import CategoriesStore from '../../../stores/categories.store';
import themeStyle from '../../../styles/theme.style';

export default function Categories() {
  return (
    <View style={style.wrapper}>
      <Text style={style.text_header}>Categories</Text>
      <ScrollView
        bounces={true}
        bouncesZoom={true}
        // contentOffset={{x: -20, y: 0}}
        horizontal={true}
        style={style.horizontal_scroll}>
        {CategoriesStore.map((val, idx) => {
          return (
            <View style={[style.card, val.id === 1 && style.card_active]} key={idx}>
              <Text style={style.text_logo}>{val.logo}</Text>
              <Text style={style.text_primary_color}>{val.title}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  wrapper: {
    marginTop: 60,
  },
  horizontal_scroll: {
    paddingBottom: 20,
    paddingLeft: 20,
  },
  text_primary_color: {
    color: themeStyle.FONT_PRIMARY_COLOR,
    fontSize: themeStyle.FONT_SIZE_SMALL
  },
  text_logo: {
    fontSize: 30,
    marginBottom: 10,
  },
  text_header: {
    color: themeStyle.FONT_HEADER_COLOR,
    fontSize: themeStyle.FONT_SIZE_LARGE,
    fontWeight: '800',
    marginBottom: 20,
    marginHorizontal: 20,
  },
  card: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 20,
    maxWidth: 110,
    minWidth: 110,
    paddingVertical: 14,
    borderWidth: 1,
    backgroundColor: '#292929',
    borderRadius: 10,
    marginRight: 10,
  },
  card_active: {
    borderColor: themeStyle.SECONDARY_COLOR
  }
});
