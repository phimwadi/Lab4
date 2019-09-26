import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class Home extends React.Component {

    static navigationOptions = {

        title: 'Home'



    };


    render() {

        const { navigate } = this.props.navigation;

        return (

            <View style={styles.container}>
                <Text style={{ fontSize: 10, color: 'black' }}>By Phimwadi Kanjanopas 6035512004</Text>
                <Text style={{ paddingTop: 10, color: 'black', fontSize: 20, }}>3 อันดับพันธุ์แมวยอดฮิตที่นิยมเลี้ยง</Text>
                <Image source={require('./home.jpg')} style={{ width: 400, height: 250 }} />
                <Button title="1.Persian" style={styles.settinglayou} onPress={() => navigate('Persian')} />
                <Button title="2.American Shorthair" style={styles.settinglayou} onPress={() => navigate('Ameriacn')} />
                <Button title="3.Scottich Fold" style={styles.settinglayou} onPress={() => navigate('Scottich')} />

            </View>


        );
    }
}


const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',

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
