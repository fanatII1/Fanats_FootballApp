import React, {useRef, useState, useEffect} from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, ImageBackground, StatusBar} from 'react-native';
import { teams, results, news } from '../../data/footballData'
import { AntDesign, Entypo, EvilIcons } from '@expo/vector-icons';
import { COLORS } from '../../constants/index';
import { LinearGradient } from 'expo-linear-gradient';
import { Shadow } from 'react-native-shadow-2';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import { SafeAreaView } from 'react-navigation';

SafeAreaView.setStatusBarHeight(0);

const {width} = Dimensions.get('window');

const LiveGames = ({item, index, matchIndex, setMatchIndex}) => {
  const navigation = useNavigation();
  const firstGradientColor = index === matchIndex ? '#B20600' : '#000';  
  const secondGradientColor = index === matchIndex ? '#FF5F00' : '#00092C';  
  const liveGameOpacity = index === matchIndex ? {opacity: 1} : {opacity: 0.75};
  const liveGameText = index === matchIndex ? {color: '#fff'} : {color: '#fff'};

  //navigate to live games and pass details of live game as parameters
  const navigateToLiveGames = () =>{
    setMatchIndex(index)
    navigation.navigate('LiveGames', {liveGame: item})
  }
    
  return (
  <>
    <Shadow offset={[10, 10]}>
      <LinearGradient
        colors={[firstGradientColor, secondGradientColor]}
        start={{x:0, y:1}}
        end={{x: 1, y:0}}
        style={[styles.liveGame, {backgroundColor: firstGradientColor, opacity: liveGameOpacity.opacity}]}
      > 
      <TouchableOpacity style={{flex: 1}} onPress={navigateToLiveGames}>
        <View style={styles.tournamentContainer}>
          <View style={styles.tournamentIconWrapper}>
            <Image source={item.fixture.tournament} resizeMode='contain' style={styles.tournamentIcon}/>
          </View>
        </View>
        <View style={styles.liveTeamsContainer}>
          <Image source={item.teams.home.logo} resizeMode='contain' style={styles.liveTeam}/>
          <Image source={item.teams.away.logo} resizeMode='contain' style={styles.liveTeam}/>     
        </View>
        <Text style={[styles.liveTeamName, {color: liveGameText.color }]}>{item.teams.home.name}   {item.teams.home.score}</Text>
        <Text style={[styles.liveTeamName, {color: liveGameText.color }]}>{item.teams.away.name}   {item.teams.away.score}</Text>
      </TouchableOpacity>
      </LinearGradient>
      </Shadow>
    </>
  )
}

const mainListHeader = () => {
  const [matchIndex, setMatchIndex] = useState(0);
  const refFlatList = useRef();

  //when matchIndex changes( the selected live game), scroll to tht live game
  useEffect(()=>{
    if(refFlatList.current){
      refFlatList.current.scrollToIndex({animated: true, index: matchIndex})
    }
  }, [matchIndex])

  //calculate total height of rows needed to position list scrollview correctly
  const getItemLayout = (data, index) =>{
    return  {length: 180, offset: 180 * index, index}
  }

  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor='transparent' hidden/>
      <View style={styles.header_wrapper}>
        <View style={{flex: 1}}>
          <EvilIcons name='navicon' size={26} color='#000' />
        </View>
        
        <Image source={require('../../assets/images/Logo_3.png')} resizeMode='contain' style={styles.logo}/>
        
        <View style={{flex: 1, alignItems: 'flex-end',}}>
          <AntDesign name='search1' size={22} color='#fff' style={{backgroundColor: '#000', padding: 7, borderTopRightRadius: 12}} />
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

      <Text style={styles.sectionHeading}>
        <Entypo name='dot-single' size={24} color='#925BFF' />
        Live Matches
      </Text>

      {/* LIVE GAMES */}
        <FlatList
        ref={refFlatList}
        data={results}
        horizontal
        showsHorizontalScrollIndicator={false}
        getItemLayout={getItemLayout}
        renderItem={({item, index})=> <LiveGames item={item} index={index} matchIndex={matchIndex} setMatchIndex={setMatchIndex}/>}
        keyExtractor={(item , index) => index }
      />
      </View>


      <Text style={styles.sectionHeading}>
        <Entypo name='dot-single' size={24} color='#925BFF' />
        Latest News
      </Text>
      <View style={{padding: 5, }}>
        <FlatList
          data={news}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
          // console.log(item)
            return(
              <Shadow offset={[5,5]} distance={4} style={styles.latestArticlesContainer}>
                <ImageBackground source={item.pic} resizeMode='cover' style={styles.articlesBackgroundImg} imageStyle={{borderRadius: 20}}>
                <LinearGradient
                  colors={['transparent', '#00092C']}
                  start={{x: 0.5, y: 0}}
                  end={{x: 0.5, y: 1}}
                  style={styles.articleGradient}
                >
                 <Text style={styles.articleWriter}>{item.writer} :</Text>
                 <Text style={styles.articleHeading}>{item.title}</Text>
               </LinearGradient>
             </ImageBackground>
             </Shadow>
            )
            }}
            keyExtractor={(item, index) => index}
            />
      </View>

      <Text style={styles.sectionHeading}>
        <Entypo name='dot-single' size={24} color='#925BFF' />
        Match Schedule
      </Text>
      </>
  )
}

export default mainListHeader

const styles = StyleSheet.create({
  header_wrapper:{
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 5
  },
  logo:{
      width: 200
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
    color: '#000'
  },
  teamWrapper: {
    backgroundColor: '#fff',
    marginLeft: 10, 
    marginRight: 7,
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
    marginVertical: 10,
    marginRight: 10,
    marginLeft: 5,
    backgroundColor: 'red',
    borderRadius: 20,
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
    marginLeft: 12, 
    marginTop: 10
  },
  latestArticlesContainer: {
    height: 220, 
    width: 220, 
    marginLeft: 5,
    marginRight: 15,
    marginVertical: 5,
    overflow: 'hidden',
    borderRadius: 30
  },
  articleGradient: {
    height: "100%", 
    width: "100%", 
    justifyContent: 'flex-end', 
    padding: 10,
    borderRadius: 20
  },
  articleWriter: {
    color: COLORS.text, 
    fontSize: 13, 
    fontStyle: 'italic', 
    marginBottom: 5
  },
  articleHeading: {
    color: COLORS.text, 
    fontSize: 19, 
    marginBottom: 20
  },
})