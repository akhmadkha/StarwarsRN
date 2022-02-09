import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Platform, ImageBackground} from 'react-native';
import Image from '../../../components/global/Image';
import themeStyle from '../../../styles/theme.style';
import CharacterModal from './character_modal';

type Props = {
  key: any;
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

export default function CharacterCard(props: Props) {
  let {id, name, gender, height, birthYear, hairColor, homeworld} = props.data;
  const [modalVisible, setmodalVisible] = useState<boolean>(false);
  return (
    <>
      <CharacterModal
        show={modalVisible}
        onClose={() => setmodalVisible(!modalVisible)}
        data={props.data}
      />
      <View style={style.item}>
        <TouchableOpacity
          onPress={() => setmodalVisible(!modalVisible)}
          style={style.card}>
          <View style={style.avatar_wrapper}>
            {Platform.OS === 'web' ? (
              <ImageBackground
                source={require('../../../assets/images/avatar.png')}
                style={style.avatar_web}
              />
            ) : (
              <Image
                source={require('../../../assets/images/avatar.png')}
                style={style.avatar}
              />
            )}
            <View>
              <View>
                <Text style={style.side_text}>{gender}</Text>
              </View>
              <View>
                <Text style={style.side_text}>{height} cm</Text>
              </View>
            </View>
          </View>
          <Text style={style.card_name}>{name}</Text>
          <Text style={style.card_birth}>{birthYear}</Text>
          <Text style={style.card_homeworld}>{homeworld.name}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  item: {
    width: '50%',
    padding: 10,
  },
  card: {
    padding: 10,
    backgroundColor: themeStyle.BG_SECONDARY_COLOR,
    margin: 10,
    borderRadius: 10,
  },
  side_text: {
    color: themeStyle.FONT_PRIMARY_COLOR,
    fontSize: themeStyle.FONT_SIZE_SMALL,
  },
  card_name: {
    color: 'white',
    fontWeight: '700',
    marginTop: 5,
  },
  card_homeworld: {
    color: themeStyle.FONT_HEADER_COLOR,
    fontSize: themeStyle.FONT_SIZE_SMALL,
  },
  card_birth: {
    color: themeStyle.FONT_HEADER_COLOR,
    fontSize: themeStyle.FONT_SIZE_SMALL,
  },
  avatar_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  avatar_web: {
    // width: "100%",
    // height: "100%",
    position: 'relative',
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 10,
  },
});
