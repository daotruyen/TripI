import React, { useEffect, useState} from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Autocomplete from 'react-native-autocomplete-input';


const Header =({navigation})=>{
//const [value, onChangeValue]= useState();
  const [MainJSON, setMainJSON] = useState([]);
 
  // Used to set Filter JSON Data.
  const [FilterData, setFilterData] = useState([]);
  
  // Used to set Selected Item in State.
  const [selectedItem, setselectedItem] = useState({});
  
  //const [data,setData]=useState([]);

 useEffect(() => {
    fetch('https://tripiii.herokuapp.com/api/hotels')
      .then((res) => res.json())
      .then((json) => {
        setMainJSON(json.data);
        
       // console.log(json.data);
        console.log(MainJSON);
      })
      .catch((e) => {
        alert(e);
      });
  }, []);
  
  const SearchDataFromJSON = (query) => {
    if (query) {
      //Making the Search as Case Insensitive.
      const regex = new RegExp(`${query.trim()}`, 'i');
      setFilterData(
        MainJSON.hotels.filter((data) => data.root_name.search(regex) >= 0)
      );
    } else {
      setFilterData([]);
    }
  };
  
    
    return (
      <View style={styles.container}>
        <View style={styles.boxSearch}>
          <Icon name="search" size={25} style={styles.iconSearch}/>

           <Autocomplete
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            data={FilterData}
            defaultValue={
              JSON.stringify(selectedItem) === '{}' ?
              '' :
              selectedItem.root_name
              }
            keyExtractor={(item, i) => i.toString()}
            onChangeText={(text) => SearchDataFromJSON(text)}
            placeholder="Type The Search Keyword..."
            renderItem={({item}) => (
              <TouchableOpacity style={{position:'relative',zIndex:10}}
                onPress={() => {
                  setselectedItem(item);
                  setFilterData([]);
                  //onChangeText(value);
                }}>
                <Text style={styles.SearchBoxTextItem}>
                  {item.root_name}
                </Text>
              </TouchableOpacity>
            )}
          /> 
          <Icon 
          name="map" size={30} style={styles.iconMap}
          onPress={() => navigation.navigate('Maps')}
          />
        </View>

        <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('Detail',{
            //search:value,
          })}
        >
          <Text style={{textAlign:"center",lineHeight:45,fontSize:18,fontWeight:"700",color:"#FFFFFF"}}
          >Gửi</Text>
        </TouchableOpacity>

      </View>
    );
  
}
export default Header;
const styles = StyleSheet.create({
    container: {
      borderRadius:30,
      opacity:0.8,
      margin:10,
      padding:25,
      backgroundColor:"#A4EBE7",
      flexDirection:'column'
    },
    iconSearch:{
      position:'absolute',
      zIndex:2,
      top:10,
      left:5,
      color:"#26AE90"
    },
    input:{
      width:310,
      height:45,
      borderRadius:30,
      backgroundColor:"#F2FFFE",
      paddingLeft:30,
      
      lineHeight:16.41,
      position:'relative',
      zIndex:1,
      // borderWidth:1,
      borderColor:'#C9CFDF'
    },
    iconMap:{
      top:6,
      left:6,
      color:"#DB2323",
    },
    button: {
      width: 335,
      height: 45,
      backgroundColor: '#26AE90',
      borderRadius: 40,
      marginTop:30,
      position: 'relative',
      zIndex:1,
    },
    infoRoom:{
      flexDirection:'row',
      paddingVertical:20
    },
    day:{
      width:144,
      // borderRightWidth:1,
      borderRightColor:"#26AE90",
    },
    room:{
      paddingStart:15,
    },
   
    AutocompleteStyle: {
      width:345,
      height:45,
      borderRadius:30,
      backgroundColor:"#F2FFFE",
      paddingLeft:30,
      fontSize:14,
      lineHeight:16.41,
      // borderWidth: 0,
    },
    SearchBoxTextItem: {
      margin: 5,
      fontSize: 16,
      paddingTop: 4,
      backgroundColor:"green",
      position:'relative',
      zIndex:999,
    },
    selectedTextContainer: {
      justifyContent: 'center',
    },
    selectedTextStyle: {
      textAlign: 'center',
      fontSize: 18,
    },
    boxSearch: {
      flexDirection:'row',
      position:'relative',
      zIndex:1000
    },
  });