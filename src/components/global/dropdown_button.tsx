import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import themeStyle from '../../styles/theme.style';
const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];

type Props = {
  data: object[];
  onSelect: (params: any) => void;
};

export default function DropdownButton(props: Props) {
  const {data} = props;
  return (
    <SelectDropdown
      defaultValueByIndex={0}
      data={data ?? []}
      buttonStyle={style.button_dropdown}
      buttonTextStyle={style.button_text_dropdown}
      rowTextStyle={style.button_row_text}
      dropdownStyle={style.button_row}
      onSelect={(selectedItem, index) => {
        props.onSelect({selectedItem, index});
      }}
      buttonTextAfterSelection={(selectedItem, index) => {
        return selectedItem.title ?? selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        return item.title ?? item;
      }}
    />
  );
}
const style = StyleSheet.create({
  button_dropdown: {
    borderRadius: 10,
    padding: 0,
    width: 100,
    height: 30,
    backgroundColor: themeStyle.BG_SECONDARY_COLOR,
  },
  button_text_dropdown: {
    margin: 0,
    fontSize: 12,
    color: 'white',
  },
  button_row: {
    backgroundColor: 'orange',
    borderRadius: 10,
  },
  button_row_text: {
    fontSize: 12,
    fontWeight: '700',
  },
});
