import React, {useRef, useState, useEffect} from 'react';
import { StyleSheet, TouchableOpacity, Text, View, SafeAreaView, Image} from 'react-native';
import {fixtures} from '../../data/footballData'
import { icons,  theme, COLORS, SIZES, FONTS} from '../../constants/index';
import { FlatList } from 'react-native-gesture-handler';
import mainListHeader from './mainListHeader';
import mainListFooter from './mainListFooter';

const MainHomeScreen = () => {
  return (
      <SafeAreaView style={styles.HomeContainer}>
      <FlatList
        data={fixtures}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={mainListHeader}
        // renderItem={({item, index}) =>{
        //   return(
        //     <TouchableOpacity activeOpacity={0.8} style={styles.fixture}>
        //       <View style={styles.fixture_firstTeam}>
        //         <Text style={styles.firstTeamName}>{item.teams.home.name}</Text>
        //         <Image style={styles.firstTeamLogo} source={item.teams.home.logo} resizeMode='contain'/>
        //       </View>  

        //       <View style={styles.fixtureDetails}>
        //         <Text style={{color:'#000'}}>27 Aug</Text>
        //         <Text style={{color:'#000'}}>{item.fixture.time}</Text>
        //       </View>

        //       <View style={styles.fixture_secondTeam}>
        //         <Image style={styles.secondTeamLogo} source={item.teams.away.logo} resizeMode='contain'/>
        //         <Text style={styles.secondTeamName}>{item.teams.away.name}</Text>
        //       </View>
        //     </TouchableOpacity>
        //   )
        // }}
        // ListFooterComponent={ mainListFooter}
        keyExtractor={(fixture, index) => index}
      />
    </SafeAreaView>
  )
}

export default MainHomeScreen

const styles = StyleSheet.create({
  HomeContainer:{
    flex: 1,
    backgroundColor: '#EEEEEE', 
    paddingTop: 20,
    
  },
  fixture: { 
    flexDirection: 'row', 
    margin: 7, 
    height: 85, 
    backgroundColor: '#fff', 
    borderRadius: 10, 
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
    color: '#000'
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
  secondTeamName: {color: '#000', marginRight: 10},
  secondTeamLogo: {height: 18, width: 30}
})