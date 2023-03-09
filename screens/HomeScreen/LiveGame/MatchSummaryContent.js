import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, ImageBackground, StatusBar, SafeAreaView } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const MatchSummaryContent = ({ index, statsNames, homeStats, awayStats, homeLineup, awayLineup }) => {
  console.log(homeLineup[0]);
  if (index === 0) {
    return (
      <FlatList
        data={statsNames}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
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
      <View style={{ flex: 1, alignItems: 'center' }}>
        <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={{ backgroundColor: '#000', width: '100%', borderRadius: 20 }}>
          <ImageBackground
            source={require('../../../assets/images/pitch.png')}
            resizeMode='contain'
            style={{ height: 620, width: width }}
            imageStyle={{ borderRadius: 20 }}
          >
            {/* HOME LINEUP */}
            <View style={{ flex: 1 }}>
              {/* GOALKEEPR */}
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                {/* formation player container */}
                {homeLineup.map((player, index) => {
                  if (player.position[0] === 'GK')
                    return (
                      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} key={index}>
                        {/* player */}
                        <View
                          style={{
                            height: 30,
                            width: 30,
                            borderRadius: 30 / 2,
                            backgroundColor: '#fff',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Text>{player.number}</Text>
                        </View>
                        <Text style={{ color: '#000', fontWeight: '600', fontSize: 13.5 }}>{player.name}</Text>
                      </View>
                    );
                })}
              </View>

              {/* DEFENDERS */}
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                {homeLineup.map((player, index) => {
                  if (player.position[0] === 'DEF')
                    return (
                      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} key={index}>
                        {/* player */}
                        <View
                          style={{
                            height: 30,
                            width: 30,
                            borderRadius: 30 / 2,
                            backgroundColor: '#fff',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Text>{player.number}</Text>
                        </View>
                        <Text style={{ color: '#000', fontWeight: '600', fontSize: 13.5 }}>{player.name}</Text>
                      </View>
                    );
                })}
              </View>

              {/* MIDFIELDERS */}
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                {homeLineup.map((player, index) => {
                  if (player.position[0] === 'MID')
                    return (
                      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} key={index}>
                        {/* player */}
                        <View
                          style={{
                            height: 30,
                            width: 30,
                            borderRadius: 30 / 2,
                            backgroundColor: '#fff',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Text>{player.number}</Text>
                        </View>
                        <Text style={{ color: '#000', fontWeight: '600', fontSize: 13.5 }}>{player.name}</Text>
                      </View>
                    );
                })}
              </View>

              {/* FOWARDS */}
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                {homeLineup.map((player, index) => {
                  if (player.position[0] === 'FWD')
                    return (
                      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} key={index}>
                        {/* player */}
                        <View
                          style={{
                            height: 30,
                            width: 30,
                            borderRadius: 30 / 2,
                            backgroundColor: '#fff',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Text>{player.number}</Text>
                        </View>
                        <Text style={{ color: '#000', fontWeight: '600', fontSize: 13.5 }}>{player.name}</Text>
                      </View>
                    );
                })}
              </View>
            </View>

            {/* AWAY LINEUP */}
            <View style={{ flex: 1 }}>
              {/* FOWARDS */}
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                {awayLineup.map((player, index) => {
                  if (player.position[0] === 'FWD')
                    return (
                      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} key={index}>
                        {/* player */}
                        <View
                          style={{
                            height: 30,
                            width: 30,
                            borderRadius: 30 / 2,
                            backgroundColor: '#fff',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Text>{player.number}</Text>
                        </View>
                        <Text style={{ color: '#000', fontWeight: '600', fontSize: 13.5 }}>{player.name}</Text>
                      </View>
                    );
                })}
              </View>

              {/* MIDFIELDERS */}
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                {/* formation player container */}
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                  {awayLineup.map((player, index) => {
                    if (player.position[0] === 'MID')
                      return (
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} key={index}>
                          {/* player */}
                          <View
                            style={{
                              height: 30,
                              width: 30,
                              borderRadius: 30 / 2,
                              backgroundColor: '#fff',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <Text>{player.number}</Text>
                          </View>
                          <Text style={{ color: '#000', fontWeight: '600', fontSize: 13.5 }}>{player.name}</Text>
                        </View>
                      );
                  })}
                </View>
              </View>

              {/* DEFENDERS */}
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                {/* formation player container */}
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                  {awayLineup.map((player, index) => {
                    if (player.position[0] === 'DEF')
                      return (
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} key={index}>
                          {/* player */}
                          <View
                            style={{
                              height: 30,
                              width: 30,
                              borderRadius: 30 / 2,
                              backgroundColor: '#fff',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <Text>{player.number}</Text>
                          </View>
                          <Text style={{ color: '#000', fontWeight: '600', fontSize: 13.5 }}>{player.name}</Text>
                        </View>
                      );
                  })}
                </View>
              </View>

              {/* GOALKEEPR */}
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                {/* formation player container */}
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                  {awayLineup.map((player, index) => {
                    if (player.position[0] === 'GK')
                      return (
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} key={index}>
                          {/* player */}
                          <View
                            style={{
                              height: 30,
                              width: 30,
                              borderRadius: 30 / 2,
                              backgroundColor: '#fff',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <Text>{player.number}</Text>
                          </View>
                          <Text style={{ color: '#000', fontWeight: '600', fontSize: 13.5 }}>{player.name}</Text>
                        </View>
                      );
                  })}
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
});
