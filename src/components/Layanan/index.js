import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LayanIcon from '../LayananIcon';

const Layanan = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Layanan</Text>
      <View style={styles.containerIcon}>
        <LayanIcon name="Kiloan" />
        <LayanIcon name="Satuan" />
        <LayanIcon name="VIP" />
      </View>
      <View style={styles.containerIcon}>
        <LayanIcon name="Karpet" />
        <LayanIcon name="Setrika Saja" />
        <LayanIcon name="Express" />
      </View>
    </View>
  );
};

export default Layanan;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 10,
  },

  title: {
    fontFamily: 'Gluten-Bold',
    fontSize: 20,
    marginBottom: 20,
  },

  containerIcon: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
