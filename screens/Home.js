import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, StatusBar, SafeAreaView, ImageBackground, Image, TextInput } from 'react-native';
import { teams, fixtures, matchOfTheDay } from '../data/footballData'
import { AntDesign, Entypo, EvilIcons } from '@expo/vector-icons';
import { icons,  theme, COLORS, SIZES, FONTS} from '../constants/index';
import { Dimensions } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';

const Home = () => {
  return (
    <SafeAreaView style={styles.HomeContainer}>
      {/*HEADER*/}
      <View style={styles.header_wrapper}>
        <View>
          <EvilIcons name="navicon" size={26} color="#000" />
        </View>
        <View style={styles.logo_wrapper}>
          <Image source={require('../assets/images/Logo.png')} resizeMode='contain' style={styles.logo}/>
          <Text style={styles.app_headerText}>FANAT SCOUTS</Text>
        </View>
        <View>
          <AntDesign name="search1" size={22} color="#000" />
        </View>
      </View>

      {/* TEAMS */}
      <View>
        <FlatList
          data={teams}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index})=>{
            
            return (
                <TouchableOpacity style={styles.teamWrapper}>
                    <Image source={item.team.logo} resizeMode='contain' style={styles.badge}/>
                </TouchableOpacity>
            )
          }}
          keyExtractor={(item , index)=> index }
        />
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  HomeContainer:{
    flex: 1,
    backgroundColor: '#fafafa', 
    paddingVertical: 20
  },
  header_wrapper:{
    height: "10%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  logo_wrapper:{
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  logo:{
    width: 40,
    height: 40,
    borderRadius: 40/2,
    marginRight: 10
  },
  app_headerText:{
    color: "#000",
    fontSize: 25,
    fontWeight: '600'
  }, 
  teamWrapper: {
    backgroundColor: "#fff", 
    marginHorizontal: 10, 
    height: 45, 
    width: 45, 
    borderRadius: 45/2, 
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 7,
    elevation: 10,
    overflow: 'hidden'
  },
  badge:{
    height: "65%",
    width: "90%",
  }
})