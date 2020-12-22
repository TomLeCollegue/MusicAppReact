import React from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';
import { NeuView } from 'react-native-neu-element';
import { NeuButton } from 'react-native-neu-element'
import { NeuBorderView } from 'react-native-neu-element';
import * as Font from 'expo-font';


const ColorBack = '#D7D7D9';

export default class HomeScreenView extends React.Component {
  

  async componentDidMount(){
    await Font.loadAsync({
      bold: require('./../assets/fonts/Roboto-Bold.ttf'),
      Black: require('./../assets/fonts/Roboto-Black.ttf'),
      Light: require('./../assets/fonts/Roboto-Light.ttf'),
      Medium: require('./../assets/fonts/Roboto-Medium.ttf'),

    });
    
  }

  render(){ 
    return (

      
      <View style={styles.container}>
        <NeuBorderView
                //Required
                width={210}
                height={210}
                color={ColorBack}
                borderWidth={10}
                borderRadius={105}
              >
                <NeuButton
                      color={ColorBack}
                      width={200}
                      height={200}
                      borderRadius={100}
                      style={{}}
                      convex
                      onPress={() => this.props.navigation.navigate('Credit')}
                      >
                      <Image source={require ("./../icons/music.png")} style={styles.image}></Image>
                </NeuButton>
              </NeuBorderView>
              <NeuButton
                  color={ColorBack}
                  width={200}
                  height={50}
                  borderRadius={100}
                  style={{marginTop: 50}}
                  convex>
                  <Text style={styles.textCopyright}>Let's Jam !</Text>
              </NeuButton>
              <NeuButton
                  color={ColorBack}
                  width={200}
                  height={50}
                  borderRadius={100}
                  style={{marginTop: 20}}
                  convex>
                  <Text style={styles.textCopyright} >Compose</Text>
              </NeuButton>
              <NeuBorderView
                  //Required
                  width={210}
                  height={60}
                  color={ColorBack}
                  borderWidth={10}
                  borderRadius={105}
                  style={{marginTop: 100}}
              >
              <NeuButton 
                color={ColorBack} 
                height={40} width={190} 
                borderRadius={100} 
                inset
                onPress={() => this.props.navigation.navigate('Credit')}>
                  <Text style={styles.textButton}>Tom Kubasik ©</Text>
              </NeuButton>
              </NeuBorderView>



      </View>
    );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorBack,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    color:'#184059',
    
  },
  textButton:{
    fontSize: 15,
    fontFamily: 'Light',
    color:'#184059'
  },
  textCopyright:{
    fontSize: 20,
    fontFamily: 'Black',
    color:'#184059'
  }
});
