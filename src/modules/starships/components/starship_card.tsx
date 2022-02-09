import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Image, Text} from 'react-native';
import {Star, Wind} from 'react-native-feather';
import themeStyle from '../../../styles/theme.style';
import StarshipModal from './starship_modal';

type Props = {
  data: any;
};
export default function StarshipCard(props: Props) {
  const [modalVisible, setModalVisible] = useState(false);
  let {name, hyperdriveRating, starshipClass, maxAtmospheringSpeed} =
    props.data;
  return (
    <>
      {
        modalVisible && <StarshipModal
        data={props.data}
        show={modalVisible}
        onClose={() => setModalVisible(!modalVisible)}
      />
      }
      <View style={style.item}>
        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={style.card}>
          <View style={style.avatar_wrapper}>
            <Image
              source={require('../../../assets/images/ic-starship.png')}
              style={style.avatar}
            />
            <View>
              <View style={style.side_wrapper}>
                <Star fill="orange" stroke="orange" width={15} />
                <Text style={style.side_text}>{hyperdriveRating}</Text>
              </View>
              <View style={style.side_wrapper}>
                <Wind fill="orange" stroke="orange" width={15} />
                <Text style={style.side_text}>
                  {maxAtmospheringSpeed ?? 'No data'}{' '}
                  {maxAtmospheringSpeed && 'Knot'}
                </Text>
              </View>
            </View>
          </View>
          <Text style={style.card_name}>{name}</Text>
          <Text style={style.card_starship_class}>{starshipClass}</Text>
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
  side_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  side_text: {
    marginLeft: 5,
    color: themeStyle.FONT_PRIMARY_COLOR,
    fontSize: themeStyle.FONT_SIZE_SMALL,
  },
  card_name: {
    color: 'white',
    fontWeight: '700',
    marginTop: 5,
  },
  card_starship_class: {
    color: themeStyle.FONT_HEADER_COLOR,
    fontSize: themeStyle.FONT_SIZE_SMALL,
  },
});
