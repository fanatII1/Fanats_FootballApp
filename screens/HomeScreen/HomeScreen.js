import React, {useRef, useState, useEffect} from 'react';
import { StyleSheet, TouchableOpacity, Text, View, SafeAreaView, Image, InteractionManager, ActivityIndicator} from 'react-native';
import {fixtures} from '../../data/footballData'
import { icons,  theme, COLORS, SIZES, FONTS} from '../../constants/index';
import { FlatList } from 'react-native-gesture-handler';
import HomeListHeader from './HomeListHeader';
import HomeListFooter from './HomeListFooter';

const HomeScreen = () => {
  const [isReady, setIsReady] = useState(false);
  
  useEffect(()=>{
    //delay screen rendering to prevent lagging: maybe wait till thread is done
    setTimeout(()=> setIsReady(true), 10)
  },[])

  //after component is rendered, we wait for animations to finish
  //when finished, set state to true, animations finished
  if(isReady === false){
    // console.log(isReady, 2, !isReady, 'a')
    return(
      <View style={{flex: 1, justifyContent: 'center'}}> 
       <ActivityIndicator size={'large'} color="red"/>
      </View>
    )
   }
  else{
      return (
    <SafeAreaView style={styles.HomeContainer}>
    <FlatList
      data={fixtures}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={HomeListHeader}
      renderItem={({item, index}) =>{
        return(
          <TouchableOpacity activeOpacity={0.5} style={styles.fixture}>
            <View style={styles.fixture_firstTeam}>
              <Text style={styles.firstTeamName}>{item.teams.home.name}</Text>
              <Image style={styles.firstTeamLogo} source={item.teams.home.logo} resizeMode='contain'/>
            </View>  

            <View style={styles.fixtureDetails}>
              <Text style={{color:'#fff'}}>27 Aug</Text>
              <Text style={{color:'#fff'}}>{item.fixture.time}</Text>
            </View>

            <View style={styles.fixture_secondTeam}>
              <Image style={styles.secondTeamLogo} source={item.teams.away.logo} resizeMode='contain'/>
              <Text style={styles.secondTeamName}>{item.teams.away.name}</Text>
            </View>
          </TouchableOpacity>
        )
      }}
      ListFooterComponent={ HomeListFooter}
      keyExtractor={(fixture, index) => index}
    />
  </SafeAreaView>
)
  }
}

export default HomeScreen

const styles = StyleSheet.create({
  HomeContainer:{
    flex: 1,
    backgroundColor: '#eeeeee', 
    paddingTop: 20,
    
  },
  fixture: { 
    flexDirection: 'row', 
    margin: 7, 
    height: 60, 
    backgroundColor: '#000', 
    borderRadius: 20, 
    overflow: 'hidden'
  },
  fixture_firstTeam: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    flex: 1,
  },
  firstTeamName: {
    marginLeft: 10, 
    color: '#fff'
  },
  firstTeamLogo: {
    marginLeft: 10, 
    height: 28, 
    width: 30
  },
  fixtureDetails: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingLeft: 5
  },
  fixture_secondTeam: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    flex: 1
  },
  secondTeamName: {
    color: '#fff', 
    marginRight: 10
  },
  secondTeamLogo: {
    height: 18, 
    width: 30
  }
})