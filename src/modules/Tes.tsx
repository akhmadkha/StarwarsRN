import React from 'react';
import {Text, View} from 'react-native';
import {useQuery, gql} from '@apollo/client';
import styled from 'styled-components/native';
import Image from '../components/global/Image';

const GET_FILM = gql`
  query Root {
    allFilms {
      films {
        id
        title
        episodeID
      }
      totalCount
    }
  }
`;

const CustomView = styled.View`
  display: flex;
  min-height: 100vh;
  /* background-color: aqua; */
`;
const img = '../assets/images/star-wars-logo-black.png'

export default function Tes() {
  const {loading, error, data} = useQuery(GET_FILM);

  
  return (
    <CustomView>
      <Image source={require('../assets/images/star-wars-logo-black.png')}/>
      {/* <Image source={require('../assets/images/star-wars-logo-black.png')} style={{ width: '100%', height: '100%' }}/> */}
      {/* <Image source={img} /> */}
      <View>
        <Text style={{color: "white"}}>Good Morning 👋</Text>
        <Text>Akhmad Khalif</Text>
      </View>
    </CustomView>
  );
}
