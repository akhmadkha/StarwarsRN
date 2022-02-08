import React from 'react';
import styled from 'styled-components/native';
import Categories from './components/categories';
import Header from './components/header';
import {ScrollView, StyleSheet, View} from 'react-native';
import AllFilms from './components/all_films';

const CustomView = styled.View`
  display: flex;
  flex: 1;
`;

export default function Home() {
  return (
    <CustomView>
      <ScrollView>
        <Header />
        <Categories />
        <View style={style.home_wrapper}>
          <AllFilms />
        </View>
      </ScrollView>
    </CustomView>
  );
}

const style = StyleSheet.create({
  home_wrapper: {
    paddingHorizontal: 20,
  },
});
