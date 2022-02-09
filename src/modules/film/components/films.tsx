import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Image from '../../../components/global/Image';
import themeStyle from '../../../styles/theme.style';
import {useQuery, gql} from '@apollo/client';
import Error from '../../../components/lottie/error';
import Loading from '../../../components/lottie/loading';
import Notfound from '../../../components/lottie/notfound';
import {useNavigation} from '@react-navigation/native';
// import { NavigationStackProp } from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';

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

type mainScreenProp = StackNavigationProp<
  {FilmDetail: {film_id: any}},
  'FilmDetail'
>;

function Films() {
  const navigation = useNavigation<mainScreenProp>();
  const images: any = {
    '1': require('../../../assets/images/posters/episode1.jpeg'),
    '2': require('../../../assets/images/posters/episode2.jpeg'),
    '3': require('../../../assets/images/posters/episode3.jpeg'),
    '4': require('../../../assets/images/posters/episode4.jpeg'),
    '5': require('../../../assets/images/posters/episode5.jpeg'),
    '6': require('../../../assets/images/posters/episode6.jpeg'),
  };
  const {error, data, refetch} = useQuery(GET_FILM);
  if (error) {
    return <Error refetch={() => refetch}/>;
  }
  if (data) {
    let {films} = data.allFilms;
    if (films.length < 1) {
      return <Notfound />;
    } else {
      return films.map((val: any, idx: any) => {
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('FilmDetail', {
                film_id: val.id,
              })
            }
            key={idx}
            style={style.card}>
            <View style={style.image_wrapper}>
              <Image style={style.film_img} source={images[val?.episodeID]} />
            </View>
            <View style={style.desc_wrapper}>
              <View style={style.desc_top}>
                <Text style={style.film_episode}>Episode {val?.episodeID}</Text>
                <Text style={style.film_release}>{val?.releaseDate} </Text>
              </View>
              <Text adjustsFontSizeToFit={true} style={style.film_title}>
                {val?.title}
              </Text>
              <Text style={style.film_director}>{val?.director}</Text>
            </View>
          </TouchableOpacity>
        );
      });
    }
  }
  return <Loading />;
}

const style = StyleSheet.create({
  card: {
    marginBottom: 30,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: themeStyle.BG_SECONDARY_COLOR,
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
    borderColor: themeStyle.BG_SECONDARY_COLOR,
    borderWidth: 4,
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
    width: '80%',
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

export default Films;
