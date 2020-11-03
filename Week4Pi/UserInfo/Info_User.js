import React, { Component } from 'react';
import { View, Text ,Image,Dimensions,StyleSheet,SafeAreaView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
const SLIDER_WIDTH = Dimensions.get('window').width;
class Info_User extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView>
      <View>
        <Text style={styles.title}>Đi cùng Pi, chẳng lo chi phí</Text>
        <Image source={require('../imgTest/logoLocation.png')}
        style={{width:SLIDER_WIDTH,height:247,marginVertical: 10,}}
        />
        <View style={styles.body}>
        <TouchableOpacity style={styles.button}>
            <Text style={{fontSize:16,fontWeight:"400"}}>Điều khoản dịch vụ</Text>
            <Icon name ="chevron-forward" size={20}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text style={{fontSize:16,fontWeight:"400"}} >Điều khoản dịch vụ</Text>
            <Icon name ="chevron-forward" size={20}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text style={{fontSize:16,fontWeight:"400"}}>Điều khoản dịch vụ</Text>
            <Icon name ="chevron-forward" size={20}/>
        </TouchableOpacity>
        <View style={{flexDirection:'row',marginVertical: 30,}}>
          <TouchableOpacity style={styles.log}>
            <Text style={styles.text}>Đăng ký</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.log}>
            <Text style={styles.text}>Đăng nhập</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
      </SafeAreaView>
    );
  }
}

export default Info_User;
const styles = StyleSheet.create({
  title:{
    
    alignSelf:"center",
    fontSize:23,
    fontWeight:"700",
    color:"#109E95",
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
  body:{
    width:"100%",
    borderTopLeftRadius:20,
    borderTopRightRadius: 20,
    backgroundColor:"#9DD6D2",
    height:"100%",
    paddingTop: 40,
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
    shadowOpacity:0.3
  },
  text:{
    alignSelf:"center",
    color:"#F3ECEC",
    fontWeight:"700",
    fontSize:23
  }
});