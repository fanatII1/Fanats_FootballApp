import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, Modal, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Shadow } from 'react-native-shadow-2';
import { Dimensions } from 'react-native';
import { COLORS } from '../../../constants/index';
import { FontAwesome } from '@expo/vector-icons';
import PlayerInfoModal from './PlayerInfoModal';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';

const MatchSummaryContent = ({ index, teams, statsNames, homeStats, awayStats, homeLineup, awayLineup, commentary }) => {
  var homeTeamColors = teams.home.color;
  var awayTeamColors = teams.away.color;
  const modalizeRef = useRef(null);

  const onOpen = () => {
    console.log('hi', modalizeRef)
    modalizeRef.current?.open();
  }

  if (index === 0) {
    return (
      <FlatList
        data={statsNames}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          //set text color and background color of stats for rach even number
          var statBackground = index % 2 === 0 ? '#00092C' : '#FF5F00';
          var statText = index % 2 === 0 ? '#fff' : '#000';
          
          return (
            <View style={[styles.statDetailWrapper, { backgroundColor: statBackground }]}>
              <Text style={[styles.statDetailText, { color: statText }]}>{homeStats[index]}</Text>
              <Text style={[styles.statDetailText, { color: statText }]}>{item}</Text>
              <Text style={[styles.statDetailText, { color: statText }]}>{awayStats[index]}</Text>
            </View>
          );
        }}
        keyExtractor={(item, index) => index}
      />
    );
  } 
  else if (index === 1) {
    return (
    <>
      {/* PLAYER INFORMATION MODAL */}
      <TouchableOpacity onPress={onOpen}>
      <Text>Open the modal</Text>
    </TouchableOpacity>

    <Portal>
      <Modalize ref={modalizeRef} 
        avoidKeyboardLikeIOS={true} 
        scrollViewProps={{ contentContainerStyle: { height: '100%' }}}
        modalHeight={300}
      >
        <PlayerInfoModal/>
      </Modalize>
    </Portal>
      
      {/* MAIN PITCH CONTAINER */}
      <View style={styles.pitchContainter}>
        
        <ScrollView contentContainerStyle={styles.pitchScrollContainer} style={styles.pitchScroll} nestedScrollEnabled={true}>
          <ImageBackground
            source={require('../../../assets/images/pitch.png')}
            resizeMode='contain'
            style={styles.ImageBackgroundContainer}
            imageStyle={styles.imageStyle}
          >
            {/* HOME LINEUP --- FWD: FOWARDS, MID: MIDFIELDERS< DEF: DEFENDERS, GK: GOALKEEPRS */}
            <View style={{ flex: 1 }}>

              <View style={styles.layerFieldPosition}>
                {homeLineup.map((player, index) => <HomePlayers player={player} playerKey={index} position='GK' homeTeamColor={homeTeamColors}/> )}
              </View>

              <View style={styles.layerFieldPosition}>
                {homeLineup.map((player, index) => <HomePlayers player={player} playerKey={index} position='DEF' homeTeamColor={homeTeamColors}/> )}
              </View>

              <View style={styles.layerFieldPosition}>
                {homeLineup.map((player, index) => <HomePlayers player={player} playerKey={index} position='MID' homeTeamColor={homeTeamColors}/> )}
              </View>

              <View style={styles.layerFieldPosition}>
                {homeLineup.map((player, index) => <HomePlayers player={player} playerKey={index} position='FWD' homeTeamColor={homeTeamColors}/>)}
              </View>
            </View>

            {/* AWAY LINEUP --- FWD: FOWARDS, MID: MIDFIELDERS< DEF: DEFENDERS, GK: GOALKEEPRS */}
            <View style={{ flex: 1 }}>

              <View style={styles.layerFieldPosition}>
                {awayLineup.map((player, index) => <AwayPlayers player={player} playerKey={index} position='FWD' awayTeamColor={awayTeamColors}/> )}
              </View>

              <View style={styles.layerFieldPosition}>
                <View style={styles.layerFieldPosition}>
                  {awayLineup.map((player, index) => <AwayPlayers player={player} playerKey={index} position='MID' awayTeamColor={awayTeamColors}/> )}
                </View>
              </View>

              <View style={styles.layerFieldPosition}>
                <View style={styles.layerFieldPosition}>
                  {awayLineup.map((player, index) => <AwayPlayers player={player} playerKey={index} position='DEF' awayTeamColor={awayTeamColors}/>)}
                </View>
              </View>

              <View style={styles.layerFieldPosition}>
                <View style={styles.layerFieldPosition}>
                  {awayLineup.map((player, index) => <AwayPlayers player={player} playerKey={index} position='GK' awayTeamColor={awayTeamColors}/> )}
                </View>
              </View>

            </View>
          </ImageBackground>
        </ScrollView>
      </View>
    </>
    );
  } 
  else if (index === 2) {
    return (
      <FlatList
        data={commentary}
        renderItem={({item})=> {
          return(
            <>
            <Shadow
             offset={[0,10]}
             distance={6}
             style={styles.commentaryWrapper}>
              <FontAwesome name="soccer-ball-o" size={17} color={COLORS.quinary_support} />
              <View style={styles.commentaryDetails}>
                <Text style={styles.minute}>{item.Min}</Text>
                <Text style={styles.comment}>{item.Txt}</Text>
              </View>
            </Shadow>
            </>
          )
        }}
      />
    )
  }
};


//return players based on position
// main(outside <view>) -- box position
//inside view -- player info
function AwayPlayers({player, playerKey, position, homeTeamColor}){
  let returnPosition = position;
  // console.log(playerKey)

  //if player position matches that of the returned one(position layer), we set the player into that position
  if (player.position[0] === returnPosition){
  return (
    <TouchableOpacity style={styles.playersPositionBox} key={playerKey} >
      <View style={[styles.player, {backgroundColor: homeTeamColor,}]}>
        <Text style={styles.playerNumber}>{player.number}</Text>
      </View>
      <Text style={styles.playerName}>{player.name}</Text>
    </TouchableOpacity>
  )
  }
}

function HomePlayers({player, playerKey, position, homeTeamColor , open}){
  let returnPosition = position;

  //if player position matches that of the returned one(position layer), we set the player into that position
  if (player.position[0] === returnPosition){
  return (
    <TouchableOpacity style={styles.playersPositionBox} key={playerKey} onPress={open}>
      <View style={[styles.player, {backgroundColor: homeTeamColor,}]}>
        <Text style={styles.playerNumber}>{player.number}</Text>
      </View>
      <Text style={styles.playerName}>{player.name}</Text>
    </TouchableOpacity>
  )
  }
}

export default MatchSummaryContent;

const styles = StyleSheet.create({
  statDetailWrapper: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginBottom: 15,
    padding: 7,
    justifyContent: 'space-between',
    borderRadius: 5,
  },
  statDetailText: {
    fontWeight: '550',
  },
  pitchContainter: { 
    flex: 1, 
    alignItems: 'center',
  },
  pitchScroll: { 
    flex: 1,
    width: '105%', 
    borderRadius: 20 
  },
  pitchScrollContainer: { 
    alignItems: 'center' ,
  },
  ImageBackgroundContainer: { 
    height: 700, 
    width: "110%",
    marginVertical: -15,
  },
  imageStyle: {
    width:'100%',
  },
  layerFieldPosition: { 
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 10,
    paddingHorizontal: 7
  },
  playersPositionBox: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  player: {
    height: 27,
    width: 27,
    borderRadius: 27 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerName: { 
    color: '#fff', 
    fontWeight: '670', 
    fontSize: 14
  },
  playerNumber: {
    color: '#fff'
  },
  commentaryWrapper: {
    flexDirection:'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    width: '100%', 
    height: 45, 
    backgroundColor: '#fff', 
    marginVertical: 10, 
    paddingHorizontal: 10, 
    borderRadius: 5, 
    borderWidth: 0
  },
  commentaryDetails: {
    flexDirection: 'row', 
    flex: 1, 
    paddingLeft: 10, 
    justifyContent: 'space-between'
  },
  minute: {
    fontWeight: 'bold', 
    color: COLORS.blue_support
  },
  comment: {
    fontWeight: '400',
    textAlign: 'center'
  }
});
