import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {IconMesin} from '../../assets/icons';
import {useNavigation} from '@react-navigation/native';

const PesananIcon = ({num, isDone}) => {
  const navigation = useNavigation();

  const moveToPesanan = () => {
    navigation.navigate('MainApp', {
      screen: 'Pesanan',
      params: {id: num},
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={moveToPesanan}>
      <View>
        <IconMesin />
      </View>
      <View style={{marginLeft: 17}}>
        <Text style={styles.title}>{`Pesanan No.${num}`}</Text>
        <Text style={styles.status(isDone)}>
          {isDone ? 'Sudah selesai' : 'Masih dicuci'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PesananIcon;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '95%',
    padding: 18,
    margin: 4,
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

  title: {
    fontSize: 20,
    fontFamily: 'Gluten-Bold',
  },

  status: isDone => ({
    fontSize: 18,
    fontFamily: 'Gluten-Regular',
    color: isDone ? 'green' : 'red',
  }),
});
