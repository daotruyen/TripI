import React, { useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'


const Star = [
  { key: 1, name: '5 sao' },
  { key: 2, name: '4 sao' },
  { key: 3, name: '3 sao' },
  { key: 4, name: '2 sao' },
  { key: 5, name: '1 sao' },
]
const Number = [
  { key: 1, name: '5+'},
  { key: 2, name: '6+' },
  { key: 3, name: '7+'},
  { key: 4, name: '8+' },
  { key: 5, name: '9+'},
]

const Filter = () => {
  const [min, onChangeText] = React.useState('0' + 'VND');
  const [max, onChangeText1] = React.useState('0' + 'VND');
  const [check, setCheck] = React.useState(-1);
  const [starChoosen, setStarChoosen] = React.useState(-1);

  useEffect(() => {
   
  });
  return (
    <View style={{ paddingVertical: 20, backgroundColor: "#F1FFFD" }}>
      <Text style={{ justifyContent: "center", alignSelf: 'center' }}>Bộ lọc</Text>
      <View>
        <View >
          <Text style={{ padding: 6 }}>Giá</Text>
          <Text style={{ padding: 6 }}>Chọn khoảng giá</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
            <TextInput
              style={{ height: 40, width: 150, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10, }}
              onChangeText={text => onChangeText(text)}
              value={min}
            />
            <Text style={{ paddingTop: 10, fontSize: 20 }}>-</Text>
            <TextInput
              style={{ height: 40, width: 150, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10, }}
              onChangeText={text => onChangeText1(text)}
              value={max}
            />
          </View>
        </View>
      </View>
      <View style={{ margin: 10 }}>
        <Text style={{ padding: 6 }}>Số sao</Text>
        <View style={styles.list}>
          {Star.map((star, index) => {
            return (
              <TouchableOpacity
                key={index + 'star'}
                style={{
                  borderWidth: 1,
                  padding: 10,
                  margin: 10,
                  backgroundColor: starChoosen == star.key ? 'red' : 'transparent'
                }} onPress={() => {
                  setStarChoosen(star.key); 
                }}><Text>{star.name}</Text></TouchableOpacity>
            )
          })}

        </View>
      </View>
      <View>
        <Text style={{ padding: 10 }}>Điểm</Text>
        <View style={styles.list}>
          {Number.map((number, index) => {
            return (
              <TouchableOpacity style={{
                borderWidth: 1,
                padding: 10,
                margin: 10,
                backgroundColor: check == number.key ? 'red' : 'transparent'
              }} onPress={() => {
                setCheck(number.key); 
              }} ><Text>{number.name}</Text></TouchableOpacity>
            )
          })}
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around", paddingVertical: 20, }}>
        <TouchableOpacity style={[styles.button1]}><Text>Thiết lập lại</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button2}
        onPress={()=>{
          
        }}
        ><Text>Áp dụng</Text></TouchableOpacity>

      </View>
    </View>

  );
}


export default Filter;
const styles = StyleSheet.create({
  list: {
    flexDirection: "row",
    flexWrap: 'wrap'
  },
  button: {
    borderWidth: 1,
    padding: 10,
    margin: 10,

  },
  button1: {
    borderWidth: 1,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 40,

  },
  button2: {
    borderWidth: 1,
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor: '#00B3A7',
    borderRadius: 40,
  },
  active: {
    backgroundColor: "#00B3A7",
    borderWidth: 1,
    padding: 10,
    margin: 10

  }
});