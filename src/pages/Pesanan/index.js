import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Pesananan = ({route}) => {
  const {id} = route.params;
  return (
    <View>
      <Text>{`Pesananan ${id}`}</Text>
    </View>
  );
};

export default Pesananan;

const styles = StyleSheet.create({});
