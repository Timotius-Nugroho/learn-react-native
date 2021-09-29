import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {IconAddSaldo, IconGetPoint} from '../../assets/icons/index';

const InfoSaldo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.saldo}>
        <View>
          <Text style={styles.saldoText}>Saldo</Text>
          <Text style={styles.pointText}>Antar point</Text>
        </View>
        <View>
          <Text style={styles.saldoInt}>Rp.100.000</Text>
          <Text style={styles.pointInt}>100 point</Text>
        </View>
      </View>
      <View style={styles.saldoIconContainer}>
        <View style={styles.iconSaldo}>
          <IconAddSaldo />
          <Text style={styles.iconText}>Add saldo</Text>
        </View>
        <View style={styles.iconSaldo}>
          <IconGetPoint />
          <Text style={styles.iconText}>Get saldo</Text>
        </View>
      </View>
    </View>
  );
};

export default InfoSaldo;

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    marginTop: -screenHeight * 0.06,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.05,
    elevation: 6,
  },

  saldo: {
    width: '55%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  saldoInt: {
    textAlign: 'right',
    fontFamily: 'Gluten-Bold',
    fontSize: 16,
  },

  pointInt: {
    textAlign: 'right',
    fontFamily: 'Gluten-Regular',
    fontSize: 14,
  },

  saldoText: {
    fontFamily: 'Gluten-Bold',
    fontSize: 20,
  },

  pointText: {
    fontFamily: 'Gluten-Bold',
    fontSize: 12,
  },

  saldoIconContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 2,
    justifyContent: 'space-around',
  },

  iconSaldo: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E0F7EF',
    padding: 4,
    marginLeft: 10,
    borderRadius: 6,
  },

  iconText: {
    textAlign: 'center',
    fontSize: 10,
  },
});
