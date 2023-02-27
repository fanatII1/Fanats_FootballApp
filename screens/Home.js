import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, StatusBar, SafeAreaView, ImageBackground, Image, TextInput } from 'react-native';
import { teams, fixtures, matchOfTheDay } from '../data/footballData'
import { AntDesign, Entypo, EvilIcons } from '@expo/vector-icons';
import { icons,  theme, COLORS, SIZES, FONTS} from '../constants/index';
import { Dimensions } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';

const Home = () => {
  return (
    <SafeAreaView style={styles.HomeContainer}>
      {/*HEADER*/}
      <View style={styles.headerWrapper}>
        <View>
          <EvilIcons name="navicon" size={26} color="black" />
        </View>
        <View style={styles.logoWrapper}>
          <Image source={require('../assets/images/Logo.png')} resizeMode='contain' style={styles.logo}/>
          <Text style={styles.appHeaderText}>Fanat Scouts</Text>
        </View>
        <View>
          <AntDesign name="search1" size={22} color={'black'} />
        </View>
      </View>

      {/* TEAMS */}
      <View>
        <FlatList
          data={teams}
          horizontal
          renderItem={(item, index)=>{
            return (
              <View>
                <Image source={require('../assets/images/Logo.png')} resizeMode='contain' style={styles.logo}/>
              </View>
            )
          }}
          keyExtractor={(item , index)=> index }
        />
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  HomeContainer:{
    flex: 1,
    backgroundColor: '#f2f2f2'
  },
  headerWrapper:{
    height: "10%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  logoWrapper:{
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  logo:{
    width: 40,
    height: 40,
    borderRadius: 40/2,
    marginRight: 10
  },
  appHeaderText:{
    color: "#000",
    fontSize: 16
  }
})