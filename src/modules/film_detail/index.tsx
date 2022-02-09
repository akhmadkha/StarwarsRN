import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from './components/header';
import {useQuery, gql} from '@apollo/client';
import theme from '../../styles/theme.style';
import {Clock, User} from 'react-native-feather';
import Loading from '../../components/lottie/loading';
import Error from '../../components/lottie/error';

export default function FilmDetail(props: any) {
  const {film_id} = props?.route?.params;
  const GET_FILM = gql`
    query Root {
      film(id: "${film_id}") {
        id
        title
        episodeID
        producers
        releaseDate
        director
        openingCrawl
      }
    }
  `;
  const {loading, error, data, refetch} = useQuery(GET_FILM);

  if (loading) {
    return (
      <ScrollView>
        <Header />
        <Loading />
      </ScrollView>
    );
  }
  if (error) {
    return (
      <ScrollView>
        <Header />
        <Error refetch={() => refetch} />
      </ScrollView>
    );
  }
  if (data) {
    const {episodeID, title, director, releaseDate, openingCrawl} = data.film;
    return (
      <ScrollView>
        <Header episodeID={episodeID} />
        <View>
          <View style={style.top_title_wrapper}>
            <View style={style.top_title_box}>
              <Clock width={14} stroke="orange" />
              <Text style={style.top_title_text}>{releaseDate}</Text>
            </View>
            <View style={style.top_title_box}>
              <User width={14} stroke="orange" />
              <Text style={style.top_title_text}>{director}</Text>
            </View>
          </View>
          <Text style={style.title}>{title}</Text>
          <View style={style.opening_wrapper}>
            <Text style={style.opening}>{`${openingCrawl}`}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView>
      <Header />
      <Loading />
    </ScrollView>
  );
}

const style = StyleSheet.create({
  top_title_wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  top_title_box: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  top_title_text: {
    marginLeft: 5,
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.FONT_PRIMARY_COLOR,
    textAlign: 'center',
  },
  title: {
    fontSize: 30,
    color: theme.FONT_PRIMARY_COLOR,
    textAlign: 'center',
    fontWeight: '900',
  },
  opening_wrapper: {
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  opening: {
    color: theme.FONT_PRIMARY_COLOR,
    fontSize: theme.FONT_SIZE_LARGE,
    textAlign: 'center',
  },
});
