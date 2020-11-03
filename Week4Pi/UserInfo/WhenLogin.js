import React, { Component } from 'react';
import { View, Text ,Image,Dimensions,StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
const SLIDER_WIDTH = Dimensions.get('window').width;
class WhenLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <View style={{flexDirection: 'row',marginHorizontal: 20,marginVertical:20}}>
            <Image source={require('../imgTest/logo.jpg')} style={{width:95,height:95,borderRadius: 95,}}/>
            <Text style={styles.name}>Đào Xuân Truyền</Text>
        </View>
        <View style={styles.body}>
        <TouchableOpacity style={styles.button}>
            <Text>Điều khoản dịch vụ</Text>
            <Icon name ="chevron-forward" size={20}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text>Điều khoản dịch vụ</Text>
            <Icon name ="chevron-forward" size={20}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text>Điều khoản dịch vụ</Text>
            <Icon name ="chevron-forward" size={20}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text>Điều khoản dịch vụ</Text>
            <Icon name ="chevron-forward" size={20}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text>Điều khoản dịch vụ</Text>
            <Icon name ="chevron-forward" size={20}/>
        </TouchableOpacity>
        <View>
            <TouchableOpacity style={styles.log}>
                <Text style={styles.text}>Đăng xuất</Text>
            </TouchableOpacity>
        </View>
        </View>
      </View>
    );
  }
}

export default WhenLogin;
const styles = StyleSheet.create({
    button:{
      flexDirection: 'row',
      justifyContent:'space-between'
    },
    name:{
      fontSize:23,
      fontWeight:"700",
      marginTop: 35,
      paddingLeft:20

    },
    body:{
      width:"100%",
      borderTopLeftRadius:20,
      borderTopRightRadius: 20,
      backgroundColor:"#9DD6D2",
      height:"100%",
      paddingTop: 40,
    },
    button:{
      flexDirection: 'row',
      justifyContent:'space-between',
      paddingHorizontal: 20,
      marginHorizontal: 20,
      backgroundColor:"#E8FFFE",
      borderRadius: 20,
      paddingVertical:12,
      marginVertical:12,
      shadowOffset:{
        height: 5,
      },
      shadowColor: '#000',
      shadowOpacity:0.3
    },
    log:{
      borderRadius: 20,
      backgroundColor:"#00B3A7",
      width:SLIDER_WIDTH/2-15,
      paddingVertical:15,
      paddingHorizontal:30,
      marginHorizontal: 7,
      justifyContent:"center",
      alignSelf:"center",
      shadowOffset:{
        height: 5,
      },
      shadowColor: '#000',
      shadowOpacity:0.3,
      marginVertical:40
    },
    text:{
      alignSelf:"center",
      color:"#F3ECEC",
      fontWeight:"700",
      fontSize:23
    }
  });