import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import { sortedStandings, news } from '../../data/footballData'
import { Entypo } from '@expo/vector-icons';
import { COLORS } from '../../constants/index';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';

const mainListFooter = () => {

  return (
    <>
      <Text style={styles.sectionHeading}>
        <Entypo name='dot-single' size={24} color='#925BFF' />
        Standings
      </Text>

      <View style={{marginHorizontal: 7}}>
        <FlatList
          data={sortedStandings}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={()=>{
            return (
              <View style={{flexDirection: 'row', marginHorizontal: 5}}>
                <View style={{flex: 1.2}}>
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>Club</Text>
                </View>
                <View style={{flex: 0.8, flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>P</Text>
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>W</Text>
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>L</Text>
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>Pts</Text>
                </View>
              </View>
            )
          }}
          renderItem={({item, index}) => {
            // console.log(index)
            if(index <= 5){
              return (
                <View style={{backgroundColor: '#fff', marginHorizontal: 5, marginBottom: 10, paddingHorizontal: 10, borderRadius: 7}}>
                <View style={{flexDirection: 'row', paddingVertical: 10, borderBottomColor: '#fff', borderBottomWidth: 1 }}>
                  <View style={{flex: 1.2, flexDirection: 'row', alignItems: 'center'}}>
                    <Image style={{height: 30, width: 40}} source={item.logo} resizeMode='contain'/>
                    <Text style={{color: '#000', marginLeft: 10}}>{item.name}</Text>
                  </View>
                  <View style={{flex: 0.8, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 18, color: '#000'}}>{item.standings.plays}</Text>
                    <Text style={{fontSize: 18, color: '#000'}}>{item.standings.wins}</Text>
                    <Text style={{fontSize: 18, color: '#000'}}>{item.standings.loses}</Text>
                    <Text style={{fontSize: 18, color: '#000'}}>{item.standings.pts()}</Text>
                  </View>
                </View>
                </View>
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
                    <View style={{height: 320, width: 250, marginRight: 10, marginBottom: 15}}>
                        <ImageBackground source={item.pic} resizeMode='cover' style={{height: '100%', width: '100%'}} imageStyle={{borderRadius: 20}}>
                           <LinearGradient
                              colors={['transparent', '#000']}
                              start={{x: 0.5, y: 0}}
                              end={{x: 0.5, y: 1}}
                              style={{height: "100%", width: "100%", justifyContent: 'flex-end', padding: 10, borderRadius: 20}}
                            >
                              <Text style={{color: COLORS.text, fontSize: 13, fontStyle: 'italic', marginBottom: 5}}>{item.writer} :</Text>
                              <Text style={{color: COLORS.text, fontSize: 23, marginBottom: 20}}>{item.title}</Text>
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
        color: COLORS.text
    },
})