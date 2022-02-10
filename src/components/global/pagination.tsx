import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import groupArrayItem from '../../utils/group_array_item';

type Props = {
  data: object[];
  children: any;
  perPage: number | 6;
};

export default function Pagination(props: Props) {
  const [active, setactive] = useState<number>(0);
  let {data, perPage} = props;
  const groups: any = groupArrayItem({data, perPage})

  let indicator = new Array(groups.length).fill(0);
  let indicator2 = Array.from(Array(groups.length).keys());

  let limit = active;
  if (active < 2) {
    limit = active + 2;
  } else if (active === 2) {
    limit = active + 1;
  }
  return (
    <>
      {/* Presentation */}
      {props.children(groups[active] ?? [])}
      
      {/* Indicator and Controller */}
      <View style={style.pagination_container}>
        <View style={style.pagination_wrapper}>
          {indicator2
            .splice(active < 1 ? 0 : active - 1, limit)
            .map((val, idx) => {
              return (
                <TouchableOpacity
                  key={idx}
                  onPress={() => setactive(val)}
                  style={
                    active === val
                      ? style.pagination_btn_active
                      : style.pagination_btn
                  }>
                  <Text style={style.text_ind}>{val + 1}</Text>
                </TouchableOpacity>
              );
            })}
          {indicator.length - active < 5 ? null : (
            <>
              <Text style={style.text_ind_dot}>...</Text>
              <TouchableOpacity
                onPress={() => setactive(indicator.length - 1)}
                style={style.pagination_btn}>
                <Text style={style.text_ind}>{indicator.length}</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  pagination_container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagination_wrapper: {
    flexDirection: 'row',
  },
  pagination_btn: {
    margin: 5,
    padding: 8,
    paddingHorizontal: 6,
  },
  pagination_btn_active: {
    margin: 5,
    backgroundColor: 'orange',
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 10 / 2,
  },
  text_ind: {
    color: 'white',
  },
  text_ind_dot: {
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    margin: 8,
  },
});
