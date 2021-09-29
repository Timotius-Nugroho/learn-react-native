import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PesananIcon from '../PesananIcon';

const PesananActive = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pesanan Active</Text>
      <View style={styles.iconContainer}>
        <PesananIcon num="12121" isDone={true} />
        <PesananIcon num="30323" isDone={false} />
      </View>
    </View>
  );
};

export default PesananActive;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },

  title: {
    fontFamily: 'Gluten-Bold',
    fontSize: 20,
    marginBottom: 20,
  },

  iconContainer: {
    marginBottom: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
});
