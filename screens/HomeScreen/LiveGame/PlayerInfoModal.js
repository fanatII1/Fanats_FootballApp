import React, {useRef} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, Modal, TouchableOpacity } from 'react-native';
import { COLORS } from '../../../constants/index';
import { Entypo, AntDesign } from '@expo/vector-icons';
import { Modalize } from 'react-native-modalize';


const PlayerInfoModal = () => {
  return (
    <>
          {/* PLAYER SUMMARY INFO */}
          <View style={styles.playerInfo}>
            {/* INFO */}
            <View style={styles.summaryInfo}>
                <View style={styles.description}>
                    <Text style={styles.descriptionHeading}>Name: </Text>
                    <Text style={styles.descriptionInfo}>12 </Text>
                </View>                
                <View style={styles.description}>
                    <Text style={styles.descriptionHeading}>AGE: </Text>
                    <Text style={styles.descriptionInfo}>12 </Text>
                </View>
                <View style={styles.description}>
                    <Text style={styles.descriptionHeading}>POS: </Text>
                    <Text style={styles.descriptionInfo}>cm </Text>
                </View>
                <View style={styles.description}>
                    <Text style={styles.descriptionHeading}>TEAM: </Text>
                    <Text style={styles.descriptionInfo}>acc </Text>
                </View>
            </View>
            {/* IMAGE */}
            <View style={{justifyContent:'center', alignItems: 'center', flex: 1}}>
                <Image 
                    source={require('../../../assets/images/club_images/Sekhukhune/Cardoso_1.png')} 
                    resizeMode="contain"
                    style={styles.playerImage}
                />
            </View>
          </View>
    </>
  );
};

export default PlayerInfoModal;

const styles = StyleSheet.create({
    playerInfo: {
      height: '100%',
      flexDirection: 'row',
    },
    summaryInfo: {
      flex:1, 
      justifyContent:'center'
    },
    description: {
      flex:1
    },
    descriptionHeading: {
      marginLeft: 10, 
      fontWeight:'bold', 
      fontSize: 17
    },
    descriptionInfo: {
      marginLeft: 10, 
      fontWeight:'100'
    },
    playerImage: {
      height: 185, 
      width: 185
    },
});
