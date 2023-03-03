import React, {useRef, useState, useEffect} from 'react';
import { StyleSheet, TouchableOpacity, Text, View, SafeAreaView, ImageBackground, Image} from 'react-native';
import { teams, fixtures, results, sortedStandings, news } from '../data/footballData'
import { AntDesign, Entypo, EvilIcons } from '@expo/vector-icons';
import { icons,  theme, COLORS, SIZES, FONTS} from '../constants/index';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import mainListHeader from '../components/HomeComponents/mainListHeader';

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

  const getItemLayout = (data, index) =>{
    return  {length: 180, offset: 180 * index, index}
  }

  function renderFooter(){
    return(
      <>
      <Text style={styles.sectionHeading}>
        <Entypo name='dot-single' size={24} color='#925BFF' />
        Standings
      </Text>

      <View style={{marginHorizontal: 7}}>
        <FlatList
          data={sortedStandings}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={()=>{
            return (
              <View style={{flexDirection: 'row', marginHorizontal: 5}}>
                <View style={{flex: 1.2}}>
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>Club</Text>
                </View>
                <View style={{flex: 0.8, flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>P</Text>
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>W</Text>
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>L</Text>
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>Pts</Text>
                </View>
              </View>
            )
          }}
          renderItem={({item, index}) => {
            // console.log(index)
            if(index <= 5){
              return (
                <View style={{backgroundColor: '#fff', marginHorizontal: 5, marginBottom: 10, paddingHorizontal: 10, borderRadius: 7}}>
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
                </View>
              )
            }
          }}
          ListFooterComponent={()=>{
            return(
            <>
            <Text style={styles.sectionHeading}>
              <Entypo name='dot-single' size={24} color='#925BFF' />
              Latest News
            </Text>
      
            <View>
              <FlatList
                data={news}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => {
                  console.log(item)
                  return(
                    <View style={{height: 320, width: 250, marginRight: 10, marginBottom: 15}}>
                        <ImageBackground source={item.pic} resizeMode='cover' style={{height: '100%', width: '100%'}} imageStyle={{borderRadius: 20}}>
                           <LinearGradient
                              colors={['transparent', '#000']}
                              start={{x: 0.5, y: 0}}
                              end={{x: 0.5, y: 1}}
                              style={{height: "100%", width: "100%", justifyContent: 'flex-end', padding: 10, borderRadius: 20}}
                            >
                              <Text style={{color: COLORS.text, fontSize: 13, fontStyle: 'italic', marginBottom: 5}}>{item.writer} :</Text>
                              <Text style={{color: COLORS.text, fontSize: 23, marginBottom: 20}}>{item.title}</Text>
                            </LinearGradient>
                        </ImageBackground>
                    </View>
                  )
                }}
                keyExtractor={(item, index) => index}
              />
            </View>
            </>
            )
          }}
          keyExtractor={(team, index) => index}
        />
      </View>
      </>
    )
  }

  return (
    <SafeAreaView style={styles.HomeContainer}>
      <FlatList
        data={fixtures}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={mainListHeader}
        renderItem={({item, index}) =>{
          return(
            <TouchableOpacity activeOpacity={0.8} style={{ flexDirection: 'row', margin: 7, height: 85, backgroundColor: '#fff', borderRadius: 10, overflow: 'hidden'}}>
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
    paddingLeft: 5,
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
})