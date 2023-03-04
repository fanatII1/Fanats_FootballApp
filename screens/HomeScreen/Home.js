import React, {useRef, useState, useEffect} from 'react';
import { StyleSheet, TouchableOpacity, Text, View, SafeAreaView, Image} from 'react-native';
import {fixtures} from '../../data/footballData'
import { icons,  theme, COLORS, SIZES, FONTS} from '../../constants/index';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import mainListHeader from './mainListHeader';
import mainListFooter from './mainListFooter';

const Home = () => {

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
        ListFooterComponent={ mainListFooter}
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