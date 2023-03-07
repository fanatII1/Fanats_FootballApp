import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, ImageBackground, StatusBar, SafeAreaView} from 'react-native';
import { teams, results, news } from '../../../data/footballData'
import { AntDesign, Entypo, EvilIcons, Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../../constants/index';
import { LinearGradient } from 'expo-linear-gradient';
import { Shadow } from 'react-native-shadow-2';
import { useRoute } from '@react-navigation/native';

const LiveGames = () => {
  const route = useRoute();
  const liveGameDetails = route.params.liveGame;
  const {fixture, teams, status} = liveGameDetails;
  const {home, away} = teams;
  console.log(fixture)

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
            <TouchableOpacity>
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
      <View>

      </View>
    </SafeAreaView>
  )
}

export default LiveGames

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