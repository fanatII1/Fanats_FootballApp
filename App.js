import { StyleSheet, TouchableOpacity, Text, View, StatusBar, SafeAreaView, ImageBackground, Image } from 'react-native';
import { icons,  theme, COLORS, SIZES, FONTS} from './constants/index';
import { Dimensions } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import React from 'react'

const { height } = Dimensions.get('window');

const App = () => {
  console.log(height)

  return (
    <SafeAreaView style={styles.AppContainer}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true}/>
      <View style={styles.LoginHeader}>
         <ImageBackground source={icons.login_wallpaper} resizeMode='cover' style={styles.wallpaperImg}></ImageBackground>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: '#fff', textAlign: 'center', fontSize: SIZES.h1, fontWeight: 'bold'}}>Welcome</Text>
      <Text style={{color: '#fff', textAlign: 'center', fontSize: SIZES.h3, fontStyle: 'italic'}}>Homeground to the beautiful game's analysis</Text>
      <View style={{width: "90%", height: 2, backgroundColor: COLORS.secondaryOrange, borderRadius: 2, marginTop: 10}}></View>
      </View>
      <View style={styles.LoginAuthentication}>
        <Shadow startColor='#000'  distance={5} offset={[0,0]}>
          <TouchableOpacity activeOpacity={0.5} style={styles.Login}>
            <Text style={{color: "#fff", fontWeight: 'bold', fontSize: 20}}>Login</Text>
          </TouchableOpacity>
        </Shadow>
        <Shadow>
          <TouchableOpacity activeOpacity={0.5} style={styles.SignIn}>
            <Text style={{color: "#fff", fontWeight: 'bold', fontSize: 20}}>Email</Text>
          </TouchableOpacity>
        </Shadow>
      </View>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  AppContainer: {
    flex: 1,
    backgroundColor: COLORS.mainColor,
  },
  LoginHeader:{
    height: height > 700 ? "65%" : "63%"
  },
  wallpaperImg:{
    flex: 1,
    marginTop: 50
  },
  LoginAuthentication:{
    height: height > 700 ? "30%" : "33%",
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  Login:{
    backgroundColor: '',
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.secondaryOrange,
    width: 160,
    justifyContent: 'center',
    alignItems: 'center'
  },
  SignIn:{
    backgroundColor: COLORS.secondaryOrange,
    borderRadius: 7,
    height: 50,
    width: 160,
    justifyContent: 'center',
    alignItems: 'center'
  }
})