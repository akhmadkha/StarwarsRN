import React, {createRef, useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Delete, Search} from 'react-native-feather';
import themeStyle from '../../styles/theme.style';
import DropdownButton from './dropdown_button';

type Props = {
  optionsBy: object[],
  dataToSearch: object[],
  result: (results: object[]) => void,
  onClear: () => void
}
export default function SearchBar(props: Props) {
  let {dataToSearch, optionsBy} = props
  const [searchBy, setsearchBy] = useState<any>(optionsBy[0]);
  let textInputRef = createRef<any>();
  const [searchValue, setsearchValue] = useState<string>('');

  // console.log(dataToSearch)

  function search() {
    let results: object[] = []
    let tes: any = dataToSearch[0]
    if (Boolean(searchBy.subkey)) {
      results = dataToSearch.filter((x: any) => x[searchBy.key][searchBy.subkey].includes(searchValue))
    } else {
      results = dataToSearch.filter((x: any) => x[searchBy.key].includes(searchValue))
    }
    // console.log(result)
    props.result(results)
  }
  return (
    <View>
      <View style={style.search_container}>
        <View style={style.search_wrapper}>
          <TextInput
            ref={textInputRef as any}
            style={style.search_bar}
            onChangeText={e => {
              setsearchValue(e)
              if(e === ""){
                props.onClear()
              }
            }}
            placeholder="Search something"
            autoCorrect={false}
            placeholderTextColor={themeStyle.FONT_SECONDARY_COLOR}
          />
          {Boolean(searchValue) && (
            <TouchableOpacity
              onPress={() => {
                setsearchValue('');
                textInputRef.current.clear();
                props.onClear()
              }}
              style={style.button_clear}>
              <Delete width={20} stroke={themeStyle.SECONDARY_COLOR} />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity onPress={() => search()} style={style.button_search}>
          <Search width={20} stroke={themeStyle.FONT_PRIMARY_COLOR} />
        </TouchableOpacity>
      </View>
      <View style={style.search_by_container}>
        <Text style={style.text_search_by}>Search by:</Text>
        <DropdownButton data={optionsBy} onSelect={(data) => setsearchBy(data.selectedItem)}/>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  search_container: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  search_wrapper: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: themeStyle.BG_SECONDARY_COLOR,
  },
  search_bar: {
    flex: 1,
    padding: 10,
    color: themeStyle.FONT_PRIMARY_COLOR,
  },
  button_clear: {
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 10,
  },
  button_search: {
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    marginLeft: 10,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: themeStyle.SECONDARY_COLOR,
  },
  search_by_container: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  text_search_by: {
    color: 'white',
    marginRight: 12,
    fontSize: 12
  },
});
