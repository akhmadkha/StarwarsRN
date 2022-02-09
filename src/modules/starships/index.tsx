import React, {createRef, useState, useEffect} from 'react';
import {
  ScrollView,
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import BackButton from '../../components/global/back_button';
import SearchBar from '../../components/global/search_bar';
import themeStyle from '../../styles/theme.style';
import {useQuery, gql} from '@apollo/client';
import Pagination from '../../components/global/pagination';
import Notfound from '../../components/lottie/notfound';
import StarshipCard from './components/starship_card';
import DropdownButton from '../../components/global/dropdown_button';
import HeaderSecond from '../../components/global/header_second';
import Loading from '../../components/lottie/loading';
import Error from '../../components/lottie/error';

const GET_STARSHIPS = gql`
  query Root {
    allStarships{
      totalCount
      starships{
        id
        name
        hyperdriveRating
        starshipClass
        maxAtmospheringSpeed
      }
    }
  }
`;

const filterOptions: any = [
  {
    title: 'Name',
    key: 'name',
    subkey: null,
  },
  {
    title: 'Starship Class',
    key: 'starshipClass',
    subkey: null,
  },
];

const viewPageOptions: any = [
  6,
  10,
  20,
  40
]

export default function Starships() {
  const [searchedData, setsearchedData] = useState<[]>([]);
  const [onSearch, setonSearch] = useState(false);
  const [viewPerPage, setviewPerPage] = useState<number>(6);
  const {loading, error, data, refetch} = useQuery(GET_STARSHIPS);

  let starships: object[] = []

  if(data){
    starships = data.allStarships.starships
  }

  function renderStarships() {
    if (onSearch) {
      if (searchedData.length < 1) {
        return <Notfound />;
      } else {
        return (
          <Pagination perPage={viewPerPage} data={searchedData} >
            {(val: any) => {
              return (
                <View style={style.container}>
                  {val.map((val: any, idx: any) => {
                    return <StarshipCard key={idx} data={val} />;
                  })}
                </View>
              );
            }}
          </Pagination>
        );
      }
    }

    return (
      <Pagination perPage={viewPerPage} data={starships}>
        {(val: any) => {
          return (
            <View style={style.container}>
              {val.map((val: any, idx: any) => {
                return <StarshipCard key={idx} data={val} />;
              })}
            </View>
          );
        }}
      </Pagination>
    );
  }

  return (
    <SafeAreaView>
      <View style={style.header}>
        <BackButton />
      </View>

      <ScrollView style={style.scroll_wrapper}>
        <HeaderSecond title={"Star Wars \nStarships"} image={require("../../assets/images/background/bg-starship.jpg")}/>
        <SearchBar
          optionsBy={filterOptions}
          dataToSearch={starships}
          result={result => {
            setonSearch(true);
            setsearchedData(result as any);
          }}
          onClear={() => {
            setonSearch(false);
          }}
        />
        <View style={style.list_wrapper}>
          <View style={style.header_list_wrapper}>
            <Text style={style.text_header}>
              {`List \nStarships`}
            </Text>
            <View style={style.sort_wrapper}>
              <Text style={style.sort_title}>Item per page</Text>
              <DropdownButton data={viewPageOptions} onSelect={(x) => {setviewPerPage(x.selectedItem)}}/>
            </View>
          </View>
        {
          loading 
          ? <Loading/> 
          : error 
            ? <Error refetch={() => refetch}/>
            : renderStarships()
        }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  header: {
    padding: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  scroll_wrapper: {
    
  },
  list_wrapper: {
    marginBottom: 100
  },
  header_list_wrapper:{
    paddingHorizontal: 20,
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text_header: {
    fontWeight: '700',
    color: themeStyle.FONT_HEADER_COLOR,
    fontSize: themeStyle.FONT_SIZE_XLARGE
  },
  sort_wrapper: {

  },
  sort_title: {
    fontSize: themeStyle.FONT_SIZE_SMALL,
    color: themeStyle.FONT_PRIMARY_COLOR,
    marginBottom: 4,
  }
});
