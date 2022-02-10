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
  Image
} from 'react-native';
import themeStyle from '../../../styles/theme.style';

type Props = {
  show: boolean;
  onClose: () => void;
  data: {
    id: string | any;
    name: string;
    gender: string;
    height: number | string;
    birthYear: string;
    hairColor: string;
    homeworld: {
      id: string;
      name: string;
    };
  };
};

export default function CharacterModal(props: Props) {
  let {id, name, gender, height, birthYear, hairColor, homeworld} = props.data;
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
                source={require('../../../assets/images/avatar.png')}
                style={style.avatar_header_web}
              />
            ) : (
              <Image
                source={require('../../../assets/images/avatar.png')}
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
                {homeworld.name}
              </Text>
            </View>
            <View style={style.summary_wrapper}>
              <View style={style.summary_row}>
                <Text style={style.summary_text}>Gender</Text>
                <Text style={style.summary_text}>{gender}</Text>
              </View>
              <View style={style.summary_row}>
                <Text style={style.summary_text}>Height</Text>
                <Text style={style.summary_text}>{height} cm</Text>
              </View>
              <View style={style.summary_row}>
                <Text style={style.summary_text}>Birth Year</Text>
                <Text style={style.summary_text}>{birthYear}</Text>
              </View>
            </View>
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
    borderRadius: 50,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  summary_text: {color: 'white', textTransform: 'capitalize'},
});
