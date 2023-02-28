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
  console.log(matchOfTheDay)
  return (
    <SafeAreaView style={styles.HomeContainer}>
      {/*HEADER*/}
      <View style={styles.header_wrapper}>
        <View style={{flex: 1}}>
          <EvilIcons name="navicon" size={26} color="#fff" />
        </View>
        
        <Image source={require('../assets/images/Logo_2.png')} resizeMode='contain' style={styles.logo}/>
        
        <View style={{flex: 1, alignItems: 'flex-end',}}>
          <AntDesign name="search1" size={22} color="#fff" style={{backgroundColor: COLORS.support_primary, padding: 7, borderTopRightRadius: 12}} />
        </View>
      </View>

      <Text style={styles.liveGamesHeading}>
        <Entypo name="dot-single" size={24} color="#925BFF" />
        Live Matches
      </Text>
      
      {/* TOP MATCHES */}
      <View>
      <FlatList
        data={fixtures}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index})=>{
            
          return (
              <TouchableOpacity style={{height: 240, width: 160, margin: 10, backgroundColor: '#1a1c1e', borderRadius: 20}}>
                <View style={{flexDirection: 'row', justifyContent: 'center',alignItems: 'center', height: "50%"}}>
                  <Image source={item.teams.home.logo} resizeMode='contain' style={{height: "50%", width: "50%"}}/>
                  <Image source={item.teams.away.logo} resizeMode='contain' style={{height: "50%", width: "50%"}}/>     
                </View>
                <Text style={{color: '#fff', fontWeight: '600', marginLeft: 12, marginTop: 10}}>{item.teams.home.name}   1</Text>
                <Text style={{color: '#fff', fontWeight: '600', marginLeft: 12, marginTop: 10}}>{item.teams.away.name}   3</Text>
              </TouchableOpacity>
          )
        }}
        keyExtractor={(item , index)=> index }
        style={{height: 260}}
      />
      </View>

      {/* TEAMS */}
      <View>
        <FlatList
          data={teams}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index})=>{
            
            return (
                <TouchableOpacity style={styles.teamWrapper}>
                    <Image source={item.team.logo} resizeMode='contain' style={styles.badge}/>
                </TouchableOpacity>
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
    backgroundColor: '#000', 
    paddingVertical: 20
  },
  header_wrapper:{
    height: "10%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  logo:{
    width: 200
  },
  liveGamesHeading:{
    fontWeight: '500',
    fontSize: 30,
    paddingLeft: 10,
    color: COLORS.text
  },
  app_headerText:{
    color: "#000",
    fontSize: 20,
    fontWeight: '400'
  }, 
  teamWrapper: {
    backgroundColor: "#fff", 
    marginHorizontal: 10,
    height: 45, 
    width: 45, 
    borderRadius: 45/2, 
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 7,
    elevation: 10,
    overflow: 'hidden',
  },
  badge:{
    height: "65%",
    width: "90%",
  },
  top_match_wrapper: { 
    alignItems: 'center',
  }
})