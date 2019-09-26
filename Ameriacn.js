import React from 'react';
import App from './App';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class Ameriacn extends React.Component {
    static navigationOptions = {

        title: 'American' };
   

  render() {
    const {navigate} = this.props.navigation;
    return (

        

      <View style={styles.container}>
        <Text style={{ fontSize: 20, color: 'black' }}>      อันดับ 2 แมวอเมริกัน ชอร์ตแฮร์(American Shorthair)</Text>
        <Text style={{ paddingTop: 10, color: 'black', fontSize: 10, }}>      แมวสายพันธุ์นี้สืบเชื้อสายมาจากประเทศในแถบยุโรป และเเพร่พันธุ์มายังอเมริกา เมื่อสมัยที่ชาวยุโรปเดินทางไปแสวงหาที่อยู่ใหม่ 
        โดยที่พวกเขาได้นำแมวอเมริกันชอร์ตแฮร์ติดเรือไปด้วย เพื่อป้องกันไม่ให้หนูทำลายข้าวของ และได้มีการพัฒนาสายพันธุ์ในเวลาต่อมา จนกระทั่งกลายเป็นแมวพื้นเมืองขนสั้นของอเมริกาไปในที่สุด</Text>
        <Image source={require('./short.jpg')} style={{ width: 350, height: 300 }} />
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
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',

  },
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  settinglayout: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }


});
