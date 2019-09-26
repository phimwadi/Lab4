import React from 'react';
import App from './App';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class Persian extends React.Component {
    static navigationOptions = {

        title: 'Persian' };
   

  render() {
    const {navigate} = this.props.navigation;
    return (

      <View style={styles.container}>
        <Text style={{ fontSize: 20, color: 'black' }}>อันดับ 1 แมวเปอร์เซีย(Persian)</Text>
        <Text style={{ paddingTop: 10, color: 'black', fontSize: 10, }}>      ราชินีแมวจากแดนตะวันออกกลาง ซึ่งมีถิ่นกำเนิดอยู่ในแถบเปอร์เซีย แมวเปอร์เซียถือเป็นแมว
        ต่างประเทศหสายพันธุ์แรกที่ถูกนำเข้ามาในประเทศไทย แมวพันธุ์นี้นอกจากจะมีหน้าตาที่น่าเอ็นดูแล้ว ขนปุกปุยของแมวเปอร์เซียยังมีสีสันต์ที่หลากหลาย และนิสัยส่วนตัวก็น่ารักด้วย</Text>
        <Image source={require('./per.jpg')} style={{ width: 350, height: 300 }} />
        <Button title="Home" style={styles.settinglayou} onPress={ () => navigate('Home')}/>
     </View>

    );
  }
}


const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    justifyContent: 'flex-start',

  },
  container: {
    flex: 1,
    alignItems: 'center',
 
  },
  settinglayout: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }


});
