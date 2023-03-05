import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';

const LiveGames = () => {
  const route = useRoute();
  const liveGameDetails = route.params.liveGame;
  const {fixture, teams, status} = liveGameDetails;

  return (
    <SafeAreaView style={styles.LiveGamesContainer}>
      <View style={styles.main_stats}>

      </View>

    </SafeAreaView>
  )
}

export default LiveGames

const styles = StyleSheet.create({
  LiveGamesContainer:{
    flex: 1,
    backgroundColor: '#151727', 
  },
  main_stats: {
    backgroundColor: '#232232',
    height: 300,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  }
})