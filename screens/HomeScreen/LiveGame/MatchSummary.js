import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, ImageBackground, StatusBar, SafeAreaView} from 'react-native';
import { teams, results, news } from '../../../data/footballData'
import { AntDesign, Entypo, EvilIcons, Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../../constants/index';
import { LinearGradient } from 'expo-linear-gradient';
import { Shadow } from 'react-native-shadow-2';
import { useRoute } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

///nav menu headings
const nav_items = ['Statistics', 'Lineups', 'Summary'];
const{width} = Dimensions.get('window');

const MatchSummaryContent =({matchDetailIndex, index, statsNames, item, statBackground, statText, homeStats, awayStats}) =>{
    if(index === 0){
      return(
        <FlatList 
          data={statsNames}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index})=> {
            var statBackground = index % 2 === 0 ? '#00092C' : '#FF5F00';
            var statText = index % 2 === 0 ? '#fff' : '#000';
            return(
              <View style={[styles.statDetailWrapper, {backgroundColor: statBackground}]}>
                <Text style={[styles.statDetailText,{ color: statText}]}>{homeStats[index]}</Text>
                <Text style={[styles.statDetailText,{ color: statText}]}>{item}</Text>
                <Text style={[styles.statDetailText,{ color: statText}]}>{awayStats[index]}</Text>
              </View>
            )
          }}
          keyExtractor={(item, index)=> index}
        />
      )
    }
    else if(index === 1 ){
      return (
        <View style={{flex: 1, backgroundColor: 'red'}}>
            <Text>Hi {index}</Text>
        </View>
      )
    }
    else if(index === 2){
      return <Text>Hi {index} ...</Text>
    }
  }
  
  const MatchSummary= ({matchDetailIndex, index, statsNames, item, statBackground, statText, homeStats, awayStats}) => {
    const matchDetailRef = useRef(0);
    //scroll to that nav-menu screen when nav-menu item(matchDetailIndex) changes
    useEffect(()=>{
      if(matchDetailRef.current){
       matchDetailRef.current.scrollToIndex({animated: true, index: matchDetailIndex})
      }
    }, [matchDetailIndex])

    const getItemLayout = (data, index) =>{
        return  {length: width, offset: width * index, index}
    }
    
    // HORIZONTAL SCREENS, thus they exceed width of parent(bounded width not height)
    return(
      <View style={{height: 500}}>
        <FlatList
         ref={matchDetailRef}
         data={nav_items}
         horizontal
         showsHorizontalScrollIndicator={false}
         getItemLayout={getItemLayout}
         renderItem={({item, index})=> {
           return(
             <View style={[styles.matchSummaryContentWrapper,{ height: 480}]}>
               <MatchSummaryContent matchDetailIndex={matchDetailIndex} index={index} item={item} statBackground={statBackground} statsNames={statsNames} statText={statText} homeStats={homeStats} awayStats={awayStats}/>
             </View>
           )
        }}
        keyExtractor={(item, index)=> index}
        />
      </View>
    )
  }

export default MatchSummary

const styles = StyleSheet.create({
    statDetailWrapper: {
        flexDirection: 'row', 
        marginHorizontal: 10, 
        marginBottom: 15, 
        padding: 7, 
        justifyContent: 'space-between', 
        borderRadius: 5
    },
    statDetailText: {
        fontWeight: '550'
    },
    matchSummaryContentWrapper: {
        width: width, 
        paddingHorizontal: 10
    }
})