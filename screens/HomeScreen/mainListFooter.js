import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions} from 'react-native';
import { sortedStandings, news } from '../../data/footballData'
import { Entypo } from '@expo/vector-icons';
import { COLORS } from '../../constants/index';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import { Shadow } from 'react-native-shadow-2';

const {width} = Dimensions.get('window');

const mainListFooter = () => {

  return (
    <>
      <Text style={styles.sectionHeading}>
        <Entypo name='dot-single' size={24} color='#925BFF' />
        Standings
      </Text>

      <View style={styles.standingsContainer}>
        <FlatList
          data={sortedStandings}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={()=>{
            return (
              <View style={styles.standingsHeaders}>
                <View style={{flex: 1.2}}>
                  <Text style={styles.clubHeading}>#Team</Text>
                </View>
                <View style={styles.standingTeamsStats}>
                  <Text style={styles.standingTeamsStat}>P</Text>
                  <Text style={styles.standingTeamsStat}>W</Text>
                  <Text style={styles.standingTeamsStat}>L</Text>
                  <Text style={styles.standingTeamsStat}>Pts</Text>
                </View>
              </View>
            )
          }}
          renderItem={({item, index}) => {
            const firstTeamGradient = index === 0 ? ['#B20600', '#FF5F00'] : ['#000', '#000'];
            const shadowColor = index === 0 ? '#FF5F00' : '#00000070';
            if(index <= 5){
              return (
                <Shadow startColor={shadowColor} distance={2} offset={[1,1]} stretch={true}>
                  <LinearGradient
                    colors={firstTeamGradient}
                    start={{x:0, y:1}}
                    end={{x: 1, y:0}}
                    style={styles.standingTeam}
                  >
                  <View style={styles.standingClubNameLogo}>
                    <Image style={styles.standingClubLogo} source={item.logo} resizeMode='contain'/>
                    <Text style={styles.standingClubName}>{item.name}</Text>
                  </View>
                  <View style={styles.standingClubStats}>
                    <Text style={styles.clubStat}>{item.standings.plays}</Text>
                    <Text style={styles.clubStat}>{item.standings.wins}</Text>
                    <Text style={styles.clubStat}>{item.standings.loses}</Text>
                    <Text style={styles.clubStat}>{item.standings.pts()}</Text>
                  </View>
                  </LinearGradient>
                </Shadow>
              )
            }
          }}
          ListFooterComponent={()=>{
            return(
            <>
            <Text style={styles.sectionHeading}>
              <Entypo name='dot-single' size={24} color='#925BFF' />
              Latest News
            </Text>
      
            <View>
              <FlatList
                data={news}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => {
                  // console.log(item)
                  return(
                    <View style={styles.latestArticlesContainer}>
                        <ImageBackground source={item.pic} resizeMode='cover' style={styles.articlesBackgroundImg} imageStyle={{borderRadius: 20}}>
                           <LinearGradient
                              colors={['transparent', '#000']}
                              start={{x: 0.5, y: 0}}
                              end={{x: 0.5, y: 1}}
                              style={styles.articleGradient}
                            >
                              <Text style={styles.articleWriter}>{item.writer} :</Text>
                              <Text style={styles.articleHeading}>{item.title}</Text>
                            </LinearGradient>
                        </ImageBackground>
                    </View>
                  )
                }}
                keyExtractor={(item, index) => index}
              />
            </View>
            </>
            )
          }}
          keyExtractor={(team, index) => index}
        />
      </View>
      </>

  )
}

export default mainListFooter

const styles = StyleSheet.create({
    sectionHeading:{
        fontWeight: '500',
        fontSize: 22,
        paddingLeft: 5,
        marginVertical: 10,
        color: '#000'
    },
    standingsContainer: {
      marginHorizontal: 7
    }, 
    standingsHeaders: {
      flexDirection: 'row', 
      marginHorizontal: 5
    },
    clubHeading: {
      fontSize: 18, 
      fontWeight: '650', 
      color: '#00'
    },
    standingTeamsStats: {
      flex: 0.8, 
      flexDirection: 'row', 
      justifyContent: 'space-between'
    },
    standingTeamsStat: {
      fontSize: 18, 
      fontWeight: '650', 
      color: '#000'
    },
    standingTeam: {
      flexDirection: 'row',
      flex:1,
      alignItems: 'center',
      height: 50, 
      padding: 10, 
      marginBottom: 10,
      backgroundColor: '#000',
      borderRadius: 70
    },
    standingClubNameLogo: {
      flex: 1.2, 
      flexDirection: 'row', 
      alignItems: 'center'
    },
    standingClubLogo: {
      height: 30, 
      width: 40
    },
    standingClubName: {
      color: '#fff', 
      marginLeft: 10
    },
    standingClubStats: {
      flex: 0.8, 
      flexDirection: 'row', 
      justifyContent: 'space-between'
    },
    clubStat: {
      fontSize: 18, 
      color: '#fff'
    },
    latestArticlesContainer: {
      height: 320, 
      width: 250, 
      marginRight: 10, 
      marginBottom: 15
    },
    articlesBackgroundImg: {
      height: '100%', 
      width: '100%'
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
      fontSize: 23, 
      marginBottom: 20
    },
})