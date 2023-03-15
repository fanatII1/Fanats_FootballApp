import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, Modal, TouchableOpacity } from 'react-native';
import { COLORS } from '../../../constants/index';
import { Entypo, AntDesign } from '@expo/vector-icons';


const PlayerInfoModal = ({ modalState, setModalState, modalViewHeight, setModalViewHeight }) => {
  const hideModal = () => {
    setModalViewHeight(0);
    setModalState(false);
  };
  
  //make modal view full height or revert it back to 30% height
  const fullModal = () => {
    if(modalViewHeight === '100%'){
      setModalViewHeight( '30%')
    }
    else{
      setModalViewHeight( '100%')
    }
  }

  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={modalState}
    >
      <View style={styles.modalView}>
        <View style={[styles.modalContentContainer, { height: modalViewHeight }]}>
          {/* FUNCTIONALITY BTNS */}
          <View style={styles.modalFunctionalityBtns}>
            <TouchableOpacity onPress={fullModal} style={styles.modalBtn}>
              {modalViewHeight === "30%" ? 
               (<Entypo name="chevron-thin-up" size={20} color="black" />) :
               (<Entypo name="chevron-thin-down" size={20} color="black" />)
              }
            </TouchableOpacity>

            <TouchableOpacity onPress={hideModal} style={styles.modalBtn}>
              <AntDesign name="close" size={20} color="black" />
            </TouchableOpacity>
          </View>
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
        </View>
      </View>
    </Modal>
  );
};

export default PlayerInfoModal;

const styles = StyleSheet.create({
    modalView: {
        height: '100%',
        width: '100%',
        backgroundColor: 'transparent',
    },
    modalContentContainer: { 
        position: 'absolute', 
        bottom: 0, 
        left: 0, 
        right: 0, 
        width: '100%', 
        backgroundColor: COLORS.tetiary_main,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    modalFunctionalityBtns: { 
        flexDirection: 'row',
        height: '13%', 
        width: '100%', 
    },
    modalBtn: { 
        width: 40,
        height: '100%',
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center'
    },
    playerInfo: {
      flex: 1, 
      flexDirection: 'row'
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
