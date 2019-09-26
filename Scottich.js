import React from 'react';
import App from './App';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class Scottich extends React.Component {


    static navigationOptions = {

        title: 'Scottich'
   
   
   
       };
   

  render() {

    const {navigate} = this.props.navigation;
    return (

      <View style={styles.container}>

        <Text style={{ fontSize: 20, color: 'black' }}>อันดับ 3 แมวสก็อตติช โฟลด์(Scottich Fold)</Text>
        <Text style={{ paddingTop: 10, color: 'black', fontSize: 10, }}>      Susie เป็นแมวพันธุ์สก็อตติช โฟลด์ ตัวแรกที่ถูกค้นพบในปี ค.ศ.1961 ที่ประเทศสก็อตเเลนด์
        แต่ในตอนนั้นไม่มีใครทราบชื่อสายพันธุ์ที่แท้จริง Susie มีใบหูพับ และยังมีใบหน้าที่คล้ายกับนกฮูก หลังจากที่ Susie ให้กำเนิดลูกแมวน้อยหูพับ 2 ตัว William Ross ชายเลี้ยงแกะ ซึ่งเป็น
        ผู้ค้นพบคนแรกได้นำลูกเเมวตัวเมียไปเลี้ยง เมื่อลูกแมวตัวนั้นโตขึ้น จึงนำไปผสมพันธุ์กับ บริติช ชอร์ตแฮร์ จนกลายเป็นต้นกำเนนิดของสายพันธุ์นี้ และได้รับการจดทะเบียนอย่างถูกต้องที่รับรองโดย
        The Governing Council of the Cat Fancy ของประเทศอังกฤษ ในปี ค.ศ.1966</Text>
        <Image source={require('./scot.jpg')} style={{ width: 350, height: 200 }} />
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
  }


});
