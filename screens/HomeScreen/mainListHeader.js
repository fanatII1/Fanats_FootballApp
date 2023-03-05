import React, {useRef, useState, useEffect} from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';
import { teams, results } from '../../data/footballData'
import { AntDesign, Entypo, EvilIcons } from '@expo/vector-icons';
import { COLORS } from '../../constants/index';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';


const mainListHeader = () => {
  const [matchIndex, setMatchIndex] = useState(0);
  const refFlatList = useRef();

  useEffect(()=>{
    if(refFlatList.current){
      refFlatList.current.scrollToIndex({animated: true, index: matchIndex})
    }
  }, [matchIndex])

  const getItemLayout = (data, index) =>{
    return  {length: 180, offset: 180 * index, index}
  }

  return (
    <>
      <View style={styles.header_wrapper}>
        <View style={{flex: 1}}>
          <EvilIcons name='navicon' size={26} color='#fff' />
        </View>
        
        <Image source={require('../../assets/images/Logo_2.png')} resizeMode='contain' style={styles.logo}/>
        
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
        ref={refFlatList}
        data={results}
        horizontal
        showsHorizontalScrollIndicator={false}
        getItemLayout={getItemLayout}
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

const LiveGames = ({item, index, matchIndex, setMatchIndex}) => {
  const navigation = useNavigation();
  // console.log(item)

  //set gradient color based on the component(index) clicked
  var firstColor = index === matchIndex ? COLORS.secondary : '#232232';
  var secondColor = index === matchIndex ? COLORS.secondary : '#232232';
  
  //navigate to live games and pass details of live game as parameters
  const navigateToLiveGames = () =>{
    setMatchIndex(index)
    navigation.navigate('LiveGames', {liveGame: item})
  }
    
  return (
      <TouchableOpacity activeOpacity={0.6} style={styles.liveGame} onPress={navigateToLiveGames}>
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

export default mainListHeader

const styles = StyleSheet.create({
    header_wrapper:{
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo:{
        width: 200
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
  sectionHeading:{
    fontWeight: '500',
    fontSize: 22,
    paddingLeft: 5,
    marginVertical: 10,
    color: COLORS.text
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