import React, {useRef, useState, useEffect, memo} from 'react';
import { StyleSheet, TouchableOpacity, Text, View, StatusBar, SafeAreaView, ImageBackground, Image, TextInput, ScrollView } from 'react-native';
import { teams, fixtures, results, sortedStandings, matchOfTheDay } from '../data/footballData'
import { AntDesign, Entypo, EvilIcons } from '@expo/vector-icons';
import { icons,  theme, COLORS, SIZES, FONTS} from '../constants/index';
import { Dimensions } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';

//live games

const LiveGames = ({item, index, matchIndex, setMatchIndex}) => {
  //we set the gradient colot of the component based on the component(index) clicked
  let firstColor = index === matchIndex ? COLORS.secondary : '#232232';
  let secondColor = index === matchIndex ? COLORS.secondary : '#232232';
    
  return (
      <TouchableOpacity activeOpacity={0.6} style={styles.liveGame} onPress={()=> setMatchIndex(index)}>
        <LinearGradient
          colors={[firstColor, secondColor]}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          style={{height: '100%', width: '100%', borderRadius: 20,}}
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
}

const Home = () => {
  const [matchIndex, setMatchIndex] = useState(0)

  function renderHeader(){
    return(
      <>
      <View style={styles.header_wrapper}>
        <View style={{flex: 1}}>
          <EvilIcons name='navicon' size={26} color='#fff' />
        </View>
        
        <Image source={require('../assets/images/Logo_2.png')} resizeMode='contain' style={styles.logo}/>
        
        <View style={{flex: 1, alignItems: 'flex-end',}}>
          <AntDesign name='search1' size={22} color='#fff' style={{backgroundColor: COLORS.support_primary, padding: 7, borderTopRightRadius: 12}} />
        </View>
      </View>

      <View>
        <FlatList
          data={teams}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index})=>{
            
            return (
                <TouchableOpacity activeOpacity={0.8} style={styles.teamWrapper}>
                    <Image source={item.team.logo} resizeMode='contain' style={styles.badge}/>
                </TouchableOpacity>
            )
          }}
          keyExtractor={(item , index)=> index }
        />
      </View>

      <Text style={styles.sectionHeading}>
        <Entypo name='dot-single' size={24} color='#925BFF' />
        Live Matches
      </Text>

      {/* LIVE GAMES */}
      <View>
      <FlatList
        data={results}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index})=> <LiveGames item={item} index={index} matchIndex={matchIndex} setMatchIndex={setMatchIndex}/>}
        keyExtractor={(item , index) => index }
      />

      <Text style={styles.sectionHeading}>
        <Entypo name='dot-single' size={24} color='#925BFF' />
        Match Schedule
      </Text>


      </View>
      </>
    )
  }

  function renderFooter(){
    return(
      <>
      <Text style={styles.sectionHeading}>
        <Entypo name='dot-single' size={24} color='#925BFF' />
        Standings
      </Text>
      <View style={{backgroundColor: '#fff', marginHorizontal: 5, marginBottom: 10, paddingHorizontal: 10, borderRadius: 7}}>
        <Text style={{color: '#000', fontSize: 20, marginVertical: 17}}> Table standings </Text>
        <FlatList
          data={sortedStandings}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={()=>{
            return (
              <View style={{flexDirection: 'row', marginHorizontal: 5, borderBottomColor: '#fff', borderBottomWidth: 1}}>
                <View style={{flex: 1.2}}>
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000'}}>Club</Text>
                </View>
                <View style={{flex: 0.8, flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000'}}>P</Text>
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000'}}>W</Text>
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000'}}>L</Text>
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000'}}>Pts</Text>
                </View>
              </View>
            )
          }}
          renderItem={({item, index}) => {
            // console.log(index)
            if(index <= 5){
              return (
                <View style={{flexDirection: 'row', paddingVertical: 10, borderBottomColor: '#fff', borderBottomWidth: 1 }}>
                  <View style={{flex: 1.2, flexDirection: 'row', alignItems: 'center'}}>
                    <Image style={{height: 30, width: 40}} source={item.logo} resizeMode='contain'/>
                    <Text style={{color: '#000', marginLeft: 10}}>{item.name}</Text>
                  </View>
                  <View style={{flex: 0.8, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 18, color: '#000'}}>{item.standings.plays}</Text>
                    <Text style={{fontSize: 18, color: '#000'}}>{item.standings.wins}</Text>
                    <Text style={{fontSize: 18, color: '#000'}}>{item.standings.loses}</Text>
                    <Text style={{fontSize: 18, color: '#000'}}>{item.standings.pts()}</Text>
                  </View>
                </View>
              )
            }
          }}
          keyExtractor={(team, index) => index}
        />
      </View>

      <Text style={styles.sectionHeading}>
        <Entypo name='dot-single' size={24} color='#925BFF' />
        Latest News
      </Text>

      <View style={{height: 320, width: 250, backgroundColor: 'red', marginBottom: 10}}>
        <ImageBackground/>
      </View>
      </>
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
            <TouchableOpacity activeOpacity={0.8} style={{ flexDirection: 'row', margin: 5, height: 85, backgroundColor: '#fff', borderRadius: 10, overflow: 'hidden'}}>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', flex: 1,}}>
                <Text style={{marginLeft: 10, color: '#000'}}>{item.teams.home.name}</Text>
                <Image style={{marginLeft: 10, height: 28, width: 30}} source={item.teams.home.logo} resizeMode='contain'/>
              </View>  

              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 5}}>
                <Text style={{color:'#000'}}>27 Aug</Text>
                <Text style={{color:'#000'}}>{item.fixture.time}</Text>
              </View>

              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', flex: 1}}>
                <Image style={{height: 18, width: 30}} source={item.teams.away.logo} resizeMode='contain'/>
                <Text style={{color: '#000', marginRight: 10}}>{item.teams.away.name}</Text>
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
    color: '#000',
    fontSize: 20,
    fontWeight: '400'
  }, 
  teamWrapper: {
    backgroundColor: '#fff', 
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
    height: '65%',
    width: '90%',
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
    width: '100%', 
    top: -10, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  tournamentIconWrapper: {
    height: 35, 
    width: 35, 
    borderRadius: 35/2, 
    backgroundColor: '#fff', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  tournamentIcon: {
    height: '95%', 
    width: '95%'
  },
  liveTeamsContainer: {
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center', 
    height: '50%',
  },
  liveTeam: {
    height: '50%', 
    width: '50%',
    marginTop: 25
  },
  liveTeamName: {
    color: '#fff', 
    fontWeight: '600', 
    marginLeft: 12, 
    marginTop: 10
  },
})