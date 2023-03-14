import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, ImageBackground, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const MatchSummaryContent = ({ index, teams, statsNames, homeStats, awayStats, homeLineup, awayLineup }) => {
  var homeTeamColors = teams.home.color;
  var awayTeamColors = teams.away.color;

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
  } else if (index === 1) {
    return (
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
                {homeLineup.map((player, index) => <HomePlayers player={player} key={index} position='GK' homeTeamColor={homeTeamColors}/> )}
              </View>

              <View style={styles.layerFieldPosition}>
                {homeLineup.map((player, index) => <HomePlayers player={player} key={index} position='DEF' homeTeamColor={homeTeamColors}/> )}
              </View>

              <View style={styles.layerFieldPosition}>
                {homeLineup.map((player, index) => <HomePlayers player={player} key={index} position='MID' homeTeamColor={homeTeamColors}/> )}
              </View>

              <View style={styles.layerFieldPosition}>
                {homeLineup.map((player, index) => <HomePlayers player={player} key={index} position='FWD' homeTeamColor={homeTeamColors}/>)}
              </View>
            </View>

            {/* AWAY LINEUP --- FWD: FOWARDS, MID: MIDFIELDERS< DEF: DEFENDERS, GK: GOALKEEPRS */}
            <View style={{ flex: 1 }}>

              <View style={styles.layerFieldPosition}>
                {awayLineup.map((player, index) => <AwayPlayers player={player} key={index} position='FWD' awayTeamColor={awayTeamColors}/> )}
              </View>

              <View style={styles.layerFieldPosition}>
                <View style={styles.layerFieldPosition}>
                  {awayLineup.map((player, index) => <AwayPlayers player={player} key={index} position='MID' awayTeamColor={awayTeamColors}/> )}
                </View>
              </View>

              <View style={styles.layerFieldPosition}>
                <View style={styles.layerFieldPosition}>
                  {awayLineup.map((player, index) => <AwayPlayers player={player} key={index} position='DEF' awayTeamColor={awayTeamColors}/>)}
                </View>
              </View>

              <View style={styles.layerFieldPosition}>
                <View style={styles.layerFieldPosition}>
                  {awayLineup.map((player, index) => <AwayPlayers player={player} key={index} position='GK' awayTeamColor={awayTeamColors}/> )}
                </View>
              </View>

            </View>
          </ImageBackground>
        </ScrollView>
      </View>
    );
  } else if (index === 2) {
    return <Text>Hi {index} ...</Text>;
  }
};


//return players based on position
// main(outside <view>) -- box position
//inside view -- player info
function AwayPlayers({player, index, position, awayTeamColor}){
  let returnPosition = position;

  if (player.position[0] === returnPosition){
  return (
    <View style={styles.playersPositionBox} key={index}>
      <View style={[styles.player, {backgroundColor: awayTeamColor}]}>
        <Text style={styles.playerNumber}>{player.number}</Text>
      </View>
      <Text style={styles.playerName}>{player.name}</Text>
    </View>
  )
  }
}

//return players based on position
// main(outside <view>) -- box position
//inside view -- player info
function HomePlayers({player, index, position, homeTeamColor}){
  let returnPosition = position;

  if (player.position[0] === returnPosition){
  return (
    <View style={styles.playersPositionBox} key={index}>
      <View style={[styles.player, {backgroundColor: homeTeamColor,}]}>
        <Text style={styles.playerNumber}>{player.number}</Text>
      </View>
      <Text style={styles.playerName}>{player.name}</Text>
    </View>
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
    alignItems: 'center' ,
  },
  pitchScroll: { 
    flex: 1,
    width: '110%', 
    borderRadius: 20 
  },
  pitchScrollContainer: { 
    alignItems: 'center' ,
    
  },
  ImageBackgroundContainer: { 
    height: 700, 
    width: "100%",
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
    marginBottom: 10 
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
});
