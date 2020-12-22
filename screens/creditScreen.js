import React from 'react';
import { StyleSheet, Text, View, Image, Linking } from 'react-native';
import { NeuView } from 'react-native-neu-element';
import { NeuButton } from 'react-native-neu-element'
import { NeuBorderView } from 'react-native-neu-element';
import * as Font from 'expo-font';
import { color } from 'react-native-reanimated';


const ColorBack = '#D7D7D9';
export default class CreditView extends React.Component {

  async componentDidMount(){
    await Font.loadAsync({
      bold: require('./../assets/fonts/Roboto-Bold.ttf'),
      Black: require('./../assets/fonts/Roboto-Black.ttf'),
      Light: require('./../assets/fonts/Roboto-Light.ttf'),
      Medium: require('./../assets/fonts/Roboto-Medium.ttf'),

    });
    
  }

  render(){ 
    return(
          
    <View style={styles.container}>
        <View style={styles.header}>
          <NeuButton
          color={ColorBack}
          width={60}
          height={60}
          borderRadius={30}
          style={{marginTop: 30, marginLeft: 10}}
          onPress={()=> this.props.navigation.navigate('Home')}
        >
            <Image source={require ("./../icons/left-arrow.png")}
             style={{width:40, height:40}}></Image> 

          </NeuButton>
        </View>

      <View style={styles.main}>
        <NeuBorderView
          //Required
          width={210}
          height={210}
          color={ColorBack}
          borderWidth={10}
          borderRadius={105}
        >      
          <Image source={require ("./../icons/tomkubasik.jpg")} style={styles.image}></Image>    
        </NeuBorderView>

        <NeuBorderView
            //Required
            width={210}
            height={80}
            color={ColorBack}
            borderWidth={10}
            borderRadius={20}
            style={{marginTop: 30}}
        >
          
              <Text style={styles.textButton}>Tom Kubasik</Text>
              <Text style={styles.textHobby}>Guitarist and IT student</Text>
          
        </NeuBorderView>
        <NeuButton
            color={ColorBack}
            width={200}
            height={50}
            borderRadius={100}
            style={{marginTop: 50}}
            convex
            onPress={()=>{
              Linking.canOpenURL("https://github.com/TomLeCollegue").then(supported => {
              if (supported) {
                Linking.openURL("https://github.com/TomLeCollegue");
              } 
              else {
                console.log("Don't know how to open URI: " + "https://github.com/TomLeCollegue");
              }
              });
            }}
        >
            <Text style={styles.textCopyright}>My GitHub</Text>
        </NeuButton>

        <NeuButton
            color={ColorBack}
            width={200}
            height={50}
            borderRadius={100}
            style={{marginTop: 20}}
            convex
            onPress={()=>{
              Linking.canOpenURL("https://open.spotify.com/artist/3C1YhEksna9ahvqT2BVOvT").then(supported => {
              if (supported) {
                Linking.openURL("https://open.spotify.com/artist/3C1YhEksna9ahvqT2BVOvT");
              } 
              else {
                console.log("Don't know how to open URI: " + "https://open.spotify.com/artist/3C1YhEksna9ahvqT2BVOvT");
              }
              });
            }}
        >
            <Text style={styles.textCopyright}>Listen to me</Text>
        </NeuButton>
        </View>
    </View>
    );
}
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: ColorBack
  },

  main:{
    
    backgroundColor: ColorBack,
    alignItems: 'center',
    justifyContent: 'center',
  },

  header:{
    marginBottom:10,
  },
  image: {
    width:190,
    height: 190,
    color:'#184059',
    borderRadius:100
    
  },
  textHobby:{
    fontSize: 15,
    fontFamily: 'Light',
    color:'#184059'
  },
  textButton:{
    fontSize: 18,
    fontFamily: 'Black',
    color:'#184059'
  },
  textCopyright:{
    fontSize: 20,
    fontFamily: 'Black',
    color:'#184059'
  }
});
