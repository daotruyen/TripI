import React, { Component } from 'react';
import { View, Text ,Image,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Info from '../InfoRoom/Info'
import StarRating from 'react-native-star-rating';
const DetailItem = ({navigation}) => {
    const [star,setStar] =  React.useState('');
    return (
        <View style={styles.Item}
        onStartShouldSetResponder={() => navigation.navigate('Info')}
        >
            <View>
            <Icon name="heart-circle-outline" size={20} style={styles.heart} onPress={() => {}}/>
            <Image
                style={{height:100,position:'relative'}}
                source={{
                    uri:
                        'data:image/jpeg;base64,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',
                }}
                
            />
            <View style={styles.allStar}>
            <Icon name="star" style={{ color: '#F2C042' }} />
              <Icon name="star" style={{ color: '#F2C042' }} />
              <Icon name="star" style={{ color: '#F2C042' }} />
              <Icon name="star" style={{ color: '#F2C042' }} />
              <Icon name="star" style={{ color: '#F2C042' }} />
            </View>
            </View>
            <View style={{padding:7}}>
                <Text style={{fontSize:15,fontWeight:"700",}}>InterContinental Hanoi Landmark 72</Text>
                <View style={{flexDirection:'row'}}>
                    <Icon name="location" size={20} style={{fontSize:11.06,color:"red"}}/>
                    <Text style={{fontSize:12,fontWeight:"400"}}>Cách trung tâm 6km</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Icon name="md-chatbox-ellipses" size={20} style={{fontSize:11.06,color:"red"}}/>
                    <Text style={{fontSize:12,fontWeight:"400"}}>99 Đánh giá</Text>
                </View>
                <View style={{alignItems:'flex-end',}}>
                    <Text style={{fontSize:18,fontWeight:'700',color:"#00BC9A"}}>2.370.000 VND</Text>
                    <Text style={{fontSize:11,fontWeight:'400'}}>mỗi đêm</Text>
                </View>
            </View>
           
            
        </View>
    );
}


export default DetailItem;
const styles = StyleSheet.create({
  Item:{borderRadius:10, 
    margin:16,
    borderWidth: 1,
    backgroundColor: "#FFF",
},
heart:{
    position:"absolute",
    zIndex:1,
    right:10,
    color:'white',
}, 
allStar:{
    flexDirection:'row',
    color:"yellow",
    position:"absolute",
    right:10,
    bottom:-6
},
});