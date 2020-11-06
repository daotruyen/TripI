import React, { useState} from 'react';
import { View, Text ,TextInput,TouchableOpacity,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const Header =({navigation})=>{
    const [value, onChangeText] = useState('Useless Placeholder');

   
    return (
      <View style={styles.container}>
        <View style={styles.search}>
            <View style={styles.boxSearch}>
                <Icon name="search" size={20} style={styles.iconSearch}/>
                <TextInput
                    style={styles.input}
                    onChangeText={text => onChangeText(text)}
                    placeholder="Tên khách sạn, địa điểm ..."
                />
            </View>
            <Icon name="map" size={25} style={styles.iconMap}
            onPress={() => navigation.navigate('Maps')}
            />
        </View>
        
        <TouchableOpacity style={styles.button}>
            <Text style={{textAlign:"center",lineHeight:35,fontSize:16,fontWeight:"700",color:"#FFFFFF"}}>Gửi</Text>
        </TouchableOpacity>
      </View>
    );
  
}
export default Header;
const styles = StyleSheet.create({
    container: {
      borderRadius:30,
      opacity:0.8,
      margin:20,
      padding:20,
      backgroundColor:"#A4EBE7",
    },
    search:{
      flexDirection:'row'
    },
    iconSearch:{
      position:'absolute',
      zIndex:2,
      top:6,
      left:5,
      color:"#26AE90"
    },
    input:{
      width:305,
      height:35,
      borderRadius:30,
      backgroundColor:"#F2FFFE",
      paddingLeft:30,
      fontSize:14,
      lineHeight:16.41,
    },
    iconMap:{
      top:6,
      left:6,
      color:"#DB2323",
    },
    button: {
      width: 335,
      height: 37.01,
      backgroundColor: '#26AE90',
      borderRadius: 40,
      marginTop:30
    },
    infoRoom:{
      flexDirection:'row',
      paddingVertical:20
    },
    day:{
      width:144,
      borderRightWidth:1,
      borderRightColor:"#26AE90",
    },
    room:{
      paddingStart:15,
    },


  });