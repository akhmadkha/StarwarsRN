import React from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import Image from '../../../components/global/Image';
import CategoriesStore from '../../../stores/categories.store';
import themeStyle from '../../../styles/theme.style';
import {useQuery, gql} from '@apollo/client';

const GET_FILM = gql`
  query Root {
    allFilms {
      films {
        id
        title
        episodeID
        producers
        releaseDate
        director
      }
      totalCount
    }
  }
`;

function Films() {
  const {loading, error, data} = useQuery(GET_FILM);
  if (error) {
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }
  if (data) {
    let {films} = data.allFilms;
    return films.map((val: any, idx: any) => {
      return (
        <View key={idx} style={style.card}>
          <View style={style.image_wrapper}>
            <Image
              style={style.film_img}
              source={require('../../../assets/images/header-bg.png')}
            />
          </View>
          <View style={style.desc_wrapper}>
            <View style={style.desc_top}>
              <Text style={style.film_episode}>Episode {val?.episodeID}</Text>
              <Text style={style.film_release}>{val?.releaseDate} </Text>
            </View>
            <Text adjustsFontSizeToFit={true} style={style.film_title}>{val?.title}</Text>
            <Text style={style.film_director}>{val?.director}</Text>
          </View>
        </View>
      );
    });
  }
  return (
    <View>
      <Text>Loading</Text>
    </View>
  );
}
export default function AllFilms() {
  return (
    <View style={style.wrapper}>
      <Text style={style.text_header}>All Films</Text>
      <View>
        <Films />
      </View>
    </View>
  );
}

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
  card: {
    marginBottom: 30,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: '#292929',
  },
  film_img: {
    width: 100,
    height: 150,
  },
  image_wrapper: {
    width: 100,
    height: 150,
    overflow: 'hidden',
    borderRadius: 10,
    bottom: 15,
  },
  desc_wrapper: {
    padding: 20,
    width: '90%',
  },
  desc_top: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  film_title: {
    color: themeStyle.FONT_PRIMARY_COLOR,
    fontSize: themeStyle.FONT_SIZE_XLARGE,
    fontWeight: '700',
    width: "80%",
    marginVertical: 10,
  },
  film_episode: {
    flex: 1,
    color: themeStyle.FONT_HEADER_COLOR,
    fontSize: themeStyle.FONT_SIZE_SMALL,
    fontWeight: '400',
  },
  film_release: {
    flex: 1,
    color: themeStyle.FONT_HEADER_COLOR,
    fontSize: themeStyle.FONT_SIZE_SMALL,
    fontWeight: '400',
  },
  film_director: {
    color: themeStyle.FONT_PRIMARY_COLOR,
    fontSize: themeStyle.FONT_SIZE_SMALL,
  },
});
