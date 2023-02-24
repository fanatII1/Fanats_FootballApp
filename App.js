import { StyleSheet, TouchableOpacity, Text, View, StatusBar, SafeAreaView, ImageBackground, Image, TextInput } from 'react-native';
import { icons,  theme, COLORS, SIZES, FONTS} from './constants/index';
import { Dimensions } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

const { height } = Dimensions.get('window');

const App = () => {
  console.log(height)

  return (
    <SafeAreaView style={styles.AppContainer}>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent={true}/>
      <View style={styles.LoginHeader}>
         <ImageBackground source={icons.login_wallpaper} resizeMode='cover' style={styles.wallpaperImg}>
         <LinearGradient
           colors={['transparent', COLORS.primary]}
           start={{x: 0.5, y: 0}}
           end={{x: 0.5, y: 1}}
           style={{flex: 1}}
         />
         </ImageBackground>
      </View>

      {/* Login Details*/}
      <View style={styles.LoginDetails}>
        <Text style={styles.welcomeText}>
          Smartest Analytics In The Game
        </Text>
        <Text style={styles.subText}>
          Discover the latest football teams & player performance metrics, 
          {'\n'}
          game preview, live scores and more ++
        </Text>

        <View style={styles.emailContainer}>
          <TextInput onChangeText={(text)=> console.log(text)} style={styles.passwordForms} placeholder='Email..' placeholderTextColor='#7c7b7bd2'/>
          <TextInput onChangeText={(text)=> console.log(text)} style={styles.passwordForms} placeholder='Password...' placeholderTextColor='#7c7b7bd2'/>
          <TouchableOpacity style={styles.emailBtn}>
            <Text style={styles.formBtnText}>Continue</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.authBtns}>
          <Shadow startColor={COLORS.secondary}  distance={4} offset={[0,0]}>
            <TouchableOpacity activeOpacity={0.5} style={styles.logInBtn}>
              <Text style={styles.formBtnText}>Google</Text>
            </TouchableOpacity>
          </Shadow>
          <Shadow startColor={COLORS.secondary}  distance={4} offset={[0,0]}>
            <TouchableOpacity activeOpacity={0.5} style={styles.signInBtn}>
              <Text style={styles.formBtnText}>Facebook</Text>
            </TouchableOpacity>
          </Shadow>
        </View>
      </View>

    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  AppContainer: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  LoginHeader:{
    height: height > 700 ? '55%' : '53%',
  },
  wallpaperImg:{
    flex: 1,
  },
  LoginDetails:{
    height: height > 700 ? '45%' : '33%',
    justifyContent: 'space-between',
  },
  welcomeText:{
    color: '#fff', 
    textAlign: 'center', 
    fontSize: 33,
    fontWeight: 'bold'
  },
  subText: {
    color: '#fff', 
    textAlign: 'center', 
    fontSize: 12,
    fontStyle: 'italic'
  },
  emailContainer: {
    alignItems: 'center', 
    justifyContent: 'space-between'
  },
  passwordForms:{
    color: COLORS.text,
    borderColor: '#7c7b7bd2', 
    borderWidth: 2, 
    borderRadius: 30, 
    width: '75%', 
    padding: 10,
    marginVertical: '2%'
  },
  emailBtn: {
    backgroundColor: COLORS.support_primary, 
    padding: 20, 
    width: '75%', 
    borderRadius: 30
  },
  formBtnText:{
    color: COLORS.text,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18
  },
  authBtns:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '5%'
  },
  logInBtn:{
    backgroundColor: COLORS.secondary,
    height: 50,
    width: 160,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30
  },
  signInBtn:{
    backgroundColor: COLORS.secondary,
    height: 50,
    width: 160,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30
  },
})