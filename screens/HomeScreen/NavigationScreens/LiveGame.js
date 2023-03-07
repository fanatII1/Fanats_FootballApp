import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, ImageBackground, StatusBar, SafeAreaView, FlatList} from 'react-native';
import { teams, results, news } from '../../../data/footballData'
import { AntDesign, Entypo, EvilIcons, Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../../constants/index';
import { LinearGradient } from 'expo-linear-gradient';
import { Shadow } from 'react-native-shadow-2';
import { useRoute } from '@react-navigation/native';

const nav_items = ['Statistics', 'Lineups', 'Summary']

const LiveGame = () => {
  const route = useRoute();
  const liveGameDetails = route.params.liveGame;
  const {fixture, teams, status} = liveGameDetails;
  const {home, away} = teams;
  const [matchDetailIndex, setMatchDetailIndex] = useState(0)
  const matchDetailRef = useRef(0);

  //when click nav-menu(mathcDetailIndex). scroll to that nav-menu using its index
  useEffect(()=>{
    //works if matchDetailRef is defined(true)
    if(matchDetailRef.current){
     matchDetailRef.current.scrollToIndex({animated: true, index: matchDetailIndex})
    }
  }, [matchDetailIndex])

  const getItemLayout = (data, index) =>{
    return  {length: 180, offset: 180 * index, index}
  }

  return (
    <SafeAreaView style={styles.LiveGamesContainer}>
      <StatusBar barStyle={'light-content'} translucent={true}/>
        <LinearGradient
          colors={[COLORS.quatenary_support, COLORS.quinary_support]}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={styles.main_stats}
        >
          <View style={styles.stats_header}>
            <TouchableOpacity onPress={()=> setMatchDetailIndex()}>
              <Ionicons name="arrow-back-circle-outline" size={30} color="black" style={styles.backBtn}/>
            </TouchableOpacity>
            <Text style={styles.tournamentName}>{fixture.tournamentName}</Text>
          </View>

          <View style={styles.teams}>
           <View style={styles.team}>
             <Image source={home.logo} style={{width: 100, height: 110}} resizMode='contain'/>
             <Text style={styles.teamName}>{home.name}</Text>
           </View>

           <View style={styles.scores}>
            <Text style={styles.scoreDetail}>{home.score}</Text>
            <Text style={styles.scoreDetail}> - </Text>
            <Text style={styles.scoreDetail}>{away.score}</Text>
           </View>

           <View style={styles.team}>
             <Image source={away.logo} style={{width: 110, height: 110}} resizMode='contain'/>
             <Text style={styles.teamName}>{away.name}</Text>
           </View>
          </View>
        </LinearGradient>
        
        <View style={{height: 50, backgroundColor: '#000', flexDirection:'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <FlatList
            ref={matchDetailRef}
            data={nav_items}
            horizontal
            showsHorizontalScrollIndicator={false}
            getItemLayout={getItemLayout}
            contentContainerStyle={{ flex: 1, justifyContent: 'space-between', alignItems: "stretch", marginHorizontal: 10 }}
            renderItem={({item, index})=>{
              
              return(
                <TouchableOpacity onPress={()=> setMatchDetailIndex(index)}>
                  <Text style={{color: '#fff'}}>{item}</Text>
                </TouchableOpacity>
              )
            }}
            keyExtractor={(item, index) => index}
        />
        </View>
    </SafeAreaView>
  )
}

export default LiveGame

const styles = StyleSheet.create({
  LiveGamesContainer:{
    flex: 1,
    backgroundColor: COLORS.tetiary_main, 
  },
  main_stats: {
    height: 270
  },
  stats_header: {
    flexDirection: 'row', 
    marginTop: 35, 
    alignItems: 'center'
  },
  backBtn: {
    marginLeft: 10, 
    color: '#fff'
  },
  tournamentName: {
    flex: 1.9, 
    marginRight: 10, 
    paddingRight: 10,
    fontSize: 19, 
    color: '#fff', 
    textAlign: 'center'
  },
  teams: {
    flexDirection: 'row', 
    flex: 1.4, 
    alignItems: 'center'
  },
  team: {
    flex: 1, 
    alignItems:'center'
  },
  teamName: {
    color: '#fff', 
    fontSize: 14, 
    fontWeight: '600', 
    marginTop: 15
  },
  scores: {
    flexDirection: 'row', 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  scoreDetail: {
    fontSize:26, 
    color: '#fff', 
    fontWeight:'bold'
  },
})