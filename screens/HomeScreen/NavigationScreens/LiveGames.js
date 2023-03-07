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
          style={{height: 270}}
        >
          <View style={{flexDirection: 'row', marginTop: 35, alignItems: 'center',}}>
            <TouchableOpacity>
              <Ionicons name="arrow-back-circle-outline" size={30} color="black" style={{marginLeft: 10, color: '#fff'}}/>
            </TouchableOpacity>
            <Text style={{flex: 1.9,  marginRight: 10, paddingRight: 10,fontSize: 19, color: '#fff', textAlign: 'center',}}>{fixture.tournamentName}</Text>
          </View>

          <View style={{flexDirection: 'row', flex: 1.4, alignItems: 'center'}}>
           <View style={{flex: 1, alignItems:'center'}}>
             <Image source={home.logo} style={{width: 100, height: 110}} resizMode='contain'/>
             <Text style={{color: '#fff', fontSize: 14, fontWeight: '600', marginTop: 15}}>{home.name}</Text>
           </View>

           <View style={{flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize:26, color: '#fff', fontWeight:'bold'}}>{home.score}</Text>
            <Text style={{fontSize:26, color: '#fff', fontWeight:'bold'}}> - </Text>
            <Text style={{fontSize:26, color: '#fff', fontWeight:'bold'}}>{away.score}</Text>
           </View>

           <View style={{flex: 1, alignItems: 'center'}}>
             <Image source={away.logo} style={{width: 110, height: 110}} resizMode='contain'/>
             <Text style={{color: '#fff', fontSize: 14, fontWeight: '600', marginTop: 15}}>{away.name}</Text>
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
    backgroundColor: '#232232',
    height: 300,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  }
})