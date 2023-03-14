import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Dimensions } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import MatchSummaryContent from './MatchSummaryContent';

///nav menu headings
const nav_items = ['Statistics', 'Lineups', 'Summary'];
const { width } = Dimensions.get('window');

const MatchSummary = ({ matchDetailIndex, teams, statsNames, statText, homeStats, awayStats, homeLineup, awayLineup, commentary }) => {
  const matchDetailRef = useRef(0);
  //scroll to that nav-menu screen when nav-menu item(matchDetailIndex) changes
  useEffect(() => {
    if (matchDetailRef.current) {
      matchDetailRef.current.scrollToIndex({ animated: true, index: matchDetailIndex });
    }
  }, [matchDetailIndex]);

  const getItemLayout = (data, index) => {
    return { length: width, offset: width * index, index };
  };

  // HORIZONTAL SCREENS, thus they exceed width of parent(bounded width not height)
  return (
    <View style={{ height: 500 }}>
      <FlatList
        ref={matchDetailRef}
        data={nav_items}
        horizontal
        showsHorizontalScrollIndicator={false}
        getItemLayout={getItemLayout}
        renderItem={({ item, index }) => {
          return (
            <View style={[styles.matchSummaryContentWrapper, { height: 480 }]}>
              <MatchSummaryContent
                index={index}
                teams={teams}
                commentary={commentary}
                statsNames={statsNames}
                statText={statText}
                homeStats={homeStats}
                awayStats={awayStats}
                homeLineup={homeLineup}
                awayLineup={awayLineup}
              />
            </View>
          );
        }}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

export default MatchSummary;

const styles = StyleSheet.create({
  matchSummaryContentWrapper: {
    width: width,
    paddingHorizontal: 10,
  },
});
