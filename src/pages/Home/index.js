import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';
import {InfoSaldo} from '../../components/index';
import {HeaderBg, HomeLogo} from '../../assets/images';

export default function index() {
  return (
    <View>
      <ImageBackground source={HeaderBg} style={styles.headerbg}>
        <Image source={HomeLogo} style={styles.homeLogo} />
        <View style={styles.textWelocome}>
          <Text style={styles.text1}>Selamat datang,</Text>
          <Text style={styles.text2}>Timotius</Text>
        </View>
      </ImageBackground>
      <InfoSaldo />
    </View>
  );
}

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  headerbg: {
    width: '100%',
    height: screenHeight * 0.3,
  },
  homeLogo: {
    marginLeft: 10,
    marginTop: 10,
    height: 55,
    width: 125,
  },
  textWelocome: {
    paddingHorizontal: 10,
    marginTop: 25,
  },
  text1: {
    fontSize: 25,
    fontFamily: 'Gluten-Regular',
  },
  text2: {
    fontSize: 18,
    fontFamily: 'Gluten-Bold',
  },
});
