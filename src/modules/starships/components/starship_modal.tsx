import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
  Platform,
  ImageBackground,
} from 'react-native';
import {useQuery, gql} from '@apollo/client';
import Image from '../../../components/global/Image';
import themeStyle from '../../../styles/theme.style';
import Error from '../../../components/lottie/error';
import Loading from '../../../components/lottie/loading';
import CharacterCard from '../../character/components/character_card';
import Notfound from '../../../components/lottie/notfound';

type Props = {
  show: boolean;
  onClose: () => void;
  data: any;
};

export default function StarshipModal(props: Props) {
  let {id, name, starshipClass} = props.data;
  const GET_STARSHIP = gql`
  query Root {
    starship(id: "${id}"){
      hyperdriveRating
      length
      starshipClass
      maxAtmospheringSpeed
      model
      cargoCapacity
      passengers
      manufacturers
      crew
      pilotConnection {
        pilots{
          id
          name
          gender
          height
          birthYear
          hairColor
          homeworld {
            id
            name
          }
        }
      }
    }
  }
`;
  const {loading, error, data, refetch} = useQuery(GET_STARSHIP);

  function renderSummary() {
    if (data) {
      let {
        hyperdriveRating,
        length,
        maxAtmospheringSpeed,
        model,
        cargoCapacity,
        passengers,
        manufacturers,
        crew,
        pilotConnection,
      } = data.starship;
      let summaryData = [
        {
          title: 'Hyper Drive Rating',
          value: hyperdriveRating,
        },
        {
          title: 'Length',
          value: length,
        },
        {
          title: 'Max Atmosphering Speed',
          value: maxAtmospheringSpeed,
        },
        {
          title: 'Cargo Capacity',
          value: cargoCapacity,
        },
        {
          title: 'Passengers',
          value: passengers,
        },
        {
          title: 'Manufactures',
          value: manufacturers,
        },
        {
          title: 'Crew',
          value: crew,
        },
      ];
      return (
        <>
          <View style={style.summary_wrapper}>
            {summaryData.map((val, idx) => (
              <View key={idx} style={style.summary_row}>
                <Text style={[style.summary_text, style.summary_text_title]}>
                  {val.title}
                </Text>
                <Text style={style.summary_text}>{val.value ?? 'No data'}</Text>
              </View>
            ))}
          </View>
          <Text
            style={{
              marginTop: 20,
              fontSize: themeStyle.FONT_SIZE_XLARGE,
              color: themeStyle.FONT_HEADER_COLOR,
              marginHorizontal: 20,
              fontWeight: '800',
            }}>
            Pilots
          </Text>
          <View style={style.container_pilot}>
            {pilotConnection.pilots.length < 1 ? (
              <Notfound />
            ) : (
              pilotConnection?.pilots.map((val: any, idx: any) => {
                return <CharacterCard key={idx} data={val} />;
              })
            )}
          </View>
        </>
      );
    }
    if (error) return <Error refetch={() => refetch} />;
    return <Loading />;
  }
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.show}
      onRequestClose={() => {
        props.onClose();
      }}>
      <View
        style={
          Platform.OS === 'web' ? style.modal_overlay_web : style.modal_overlay
        }>
        <View
          style={
            Platform.OS === 'web'
              ? style.modal_presentation_web
              : style.modal_presentation
          }>
          <View style={style.avatar_header_wrapper}>
            {Platform.OS === 'web' ? (
              <ImageBackground
                source={require('../../../assets/images/ic-starship.png')}
                style={style.avatar_header_web}
              />
            ) : (
              <Image
                source={require('../../../assets/images/ic-starship.png')}
                style={style.avatar_header}
              />
            )}
          </View>
          <ScrollView>
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: themeStyle.FONT_SIZE_XLARGE,
                  fontWeight: '900',
                  color: 'white',
                }}>
                {name}
              </Text>
              <Text style={{color: themeStyle.FONT_SECONDARY_COLOR}}>
                {starshipClass}
              </Text>
            </View>
            {renderSummary()}
          </ScrollView>
          <View style={style.modal_footer}>
            <TouchableOpacity
              style={style.button_modal_close}
              onPress={() => {
                props.onClose();
              }}>
              <Text style={{color: themeStyle.FONT_HEADER_COLOR}}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const style = StyleSheet.create({
  avatar_header_wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar_header: {
    width: 100,
    height: 100,
    bottom: 30,
    borderWidth: 4,
    borderColor: themeStyle.BG_SECONDARY_COLOR,
    borderRadius: 50,
  },
  avatar_header_web: {
    width: 100,
    height: 100,
    bottom: 30,
  },
  modal_overlay: {
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modal_overlay_web: {
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal_presentation: {
    height: '60%',
    marginTop: 'auto',
    backgroundColor: themeStyle.BG_SECONDARY_COLOR,
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modal_presentation_web: {
    height: '60%',
    width: 400,
    marginTop: 'auto',
    backgroundColor: themeStyle.BG_SECONDARY_COLOR,
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modal_footer: {
    paddingBottom: 30,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  button_modal_close: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: themeStyle.SECONDARY_COLOR,
    padding: 10,
  },
  summary_wrapper: {
    padding: 20,
    backgroundColor: 'black',
    borderRadius: 10,
    marginTop: 20,
    marginHorizontal: 20,
  },
  summary_row: {
    flexDirection: 'column',
    marginVertical: 5,
  },
  summary_text: {color: 'white', textTransform: 'capitalize'},
  summary_text_title: {
    color: themeStyle.FONT_SECONDARY_COLOR,
    fontSize: themeStyle.FONT_SIZE_SMALL,
  },
  container_pilot: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
});
