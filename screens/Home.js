import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, StatusBar, SafeAreaView, ImageBackground, Image, TextInput, ScrollView } from 'react-native';
import { teams, fixtures, results, standings, matchOfTheDay } from '../data/footballData'
import { AntDesign, Entypo, EvilIcons } from '@expo/vector-icons';
import { icons,  theme, COLORS, SIZES, FONTS} from '../constants/index';
import { Dimensions } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';

const Home = () => {
  // console.log(matchOfTheDay)

  function renderHeader(){
    return(
      <>
      <View style={styles.header_wrapper}>
        <View style={{flex: 1}}>
          <EvilIcons name="navicon" size={26} color="#fff" />
        </View>
        
        <Image source={require('../assets/images/Logo_2.png')} resizeMode='contain' style={styles.logo}/>
        
        <View style={{flex: 1, alignItems: 'flex-end',}}>
          <AntDesign name="search1" size={22} color="#fff" style={{backgroundColor: COLORS.support_primary, padding: 7, borderTopRightRadius: 12}} />
        </View>
      </View>

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

      <Text style={styles.sectionHeading}>
        <Entypo name="dot-single" size={24} color="#925BFF" />
        Live Matches
      </Text>

      {/* LIVE GAMES */}
      <View>
      <FlatList
        data={results}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index})=>{
          console.log(item.fixture.tournament)
            
          return (
              <TouchableOpacity style={styles.liveGame}>
                <LinearGradient
                  colors={['#2a2e3a', '#2a2e3a']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  style={{height: '100%', width: "100%", borderRadius: 20, borderColor: COLORS.secondary, borderWidth: 4}}
                >
                  <View style={styles.tournamentContainer}>
                    <View style={styles.tournamentIconWrapper}>
                      <Image source={item.fixture.tournament} resizeMode='contain' style={styles.tournamentIcon}/>
                    </View>
                  </View>
                  <View style={styles.liveTeamsContainer}>
                    <Image source={item.teams.home.logo} resizeMode='contain' style={styles.liveTeam}/>
                    <Image source={item.teams.away.logo} resizeMode='contain' style={styles.liveTeam}/>     
                  </View>
                  <Text style={styles.liveTeamName}>{item.teams.home.name}   {item.teams.home.score}</Text>
                  <Text style={styles.liveTeamName}>{item.teams.away.name}   {item.teams.away.score}</Text>
                </LinearGradient>
      
              </TouchableOpacity>
          )
        }}
        keyExtractor={(item , index) => index }
      />

      <Text style={styles.sectionHeading}>
        <Entypo name="dot-single" size={24} color="#925BFF" />
        Match Schedule
      </Text>


      </View>
      </>
    )
  }

  function renderFooter(){
    return(
      <View style={{backgroundColor: '#232232', height: 300, }}>
        <FlatList
          data={standings}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={()=>{
            return (
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1.2}}>
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: COLORS.text}}>Club</Text>
                </View>
                <View style={{flex: 0.8, flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: COLORS.text}}>P</Text>
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: COLORS.text}}>W</Text>
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: COLORS.text}}>L</Text>
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: COLORS.text}}>Pts</Text>
                </View>
              </View>
            )
          }}
          renderItem={({item, index}) => {
            return (
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1.2}}>
                  <Image style={{marginLeft: 10, height: 38, width: 40}} source={item.teams.home.logo} resizeMode='contain'/>
                </View>
                <View style={{flex: 0.8, flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: COLORS.text}}>P</Text>
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: COLORS.text}}>W</Text>
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: COLORS.text}}>L</Text>
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: COLORS.text}}>Pts</Text>
                </View>
              </View>
            )
          }}
          keyExtractor={(team, index) => index}
        />
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.HomeContainer}>
      <FlatList
        data={fixtures}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderHeader}
        renderItem={({item, index}) =>{
          return(
            <TouchableOpacity style={{ flexDirection: 'row', margin: 5, height: 85, backgroundColor: '#232232', borderRadius: 10}}>
              <View style={{flex: 2, justifyContent: 'space-around'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image style={{marginLeft: 10, height: 38, width: 40}} source={item.teams.home.logo} resizeMode='contain'/>
                  <Text style={{marginLeft: 10, color: '#fff'}}>{item.teams.home.name}</Text>
                </View>     
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image style={{marginLeft: 10, height: 38, width: 40}} source={item.teams.away.logo} resizeMode='contain'/>
                  <Text style={{marginLeft: 10, color: '#fff'}}>{item.teams.away.name}</Text>
                </View>
              </View>

              <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={{color:'#fff'}}>27 Aug</Text>
                <Text style={{color:'#fff'}}>{item.fixture.time}</Text>
              </View>
            </TouchableOpacity>
          )
        }}
        ListFooterComponent={ renderFooter }
        keyExtractor={(fixture, index) => index}
      />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  HomeContainer:{
    flex: 1,
    backgroundColor: '#151727', 
    paddingTop: 20,
    paddingHorizontal: 5,
  },
  header_wrapper:{
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo:{
    width: 200
  },
  sectionHeading:{
    fontWeight: '500',
    fontSize: 22,
    paddingLeft: 10,
    marginVertical: 10,
    color: COLORS.text
  },
  app_headerText:{
    color: "#000",
    fontSize: 20,
    fontWeight: '400'
  }, 
  teamWrapper: {
    backgroundColor: "#fff", 
    marginRight: 15,
    height: 45, 
    width: 45, 
    borderRadius: 45/2, 
    borderWidth: 3,
    borderColor: COLORS.support_primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 7,
    overflow: 'hidden',
  },
  badge:{
    height: "65%",
    width: "90%",
  },
  top_match_wrapper: { 
    alignItems: 'center',
  },
  liveGame: {
    height: 180, 
    width: 180, 
    margin: 10,
  },
  tournamentContainer: {
    position: 'absolute', 
    width: "100%", 
    top: -10, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  tournamentIconWrapper: {
    height: 35, 
    width: 35, 
    borderRadius: 35/2, 
    backgroundColor: "#fff", 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  tournamentIcon: {
    height: "95%", 
    width: "95%"
  },
  liveTeamsContainer: {
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center', 
    height: "50%",
  },
  liveTeam: {
    height: "50%", 
    width: "50%",
    marginTop: 25
  },
  liveTeamName: {
    color: '#fff', 
    fontWeight: '600', 
    marginLeft: 12, 
    marginTop: 10
  },
})