import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  IconKiloan,
  IconSatuan,
  IconSetrika,
  IconVip,
  IconExpress,
  IconKarpet,
} from '../../assets/icons';

const LayanIcon = ({name}) => {
  const Icon = () => {
    if (name === 'Kiloan') {
      return <IconKiloan />;
    }
    if (name === 'Satuan') {
      return <IconSatuan />;
    }
    if (name === 'Setrika Saja') {
      return <IconSetrika />;
    }
    if (name === 'VIP') {
      return <IconVip />;
    }
    if (name === 'Express') {
      return <IconExpress />;
    }
    if (name === 'Karpet') {
      return <IconKarpet />;
    }
  };

  const printLayanan = () => {
    console.log('NAME', name);
  };

  return (
    <TouchableOpacity onPress={printLayanan}>
      <View style={styles.container}>
        <Icon />
      </View>
      <Text style={styles.desc}>{name}</Text>
    </TouchableOpacity>
  );
};

export default LayanIcon;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7EF',
    padding: 20,
    height: 100,
    width: 100,
    borderRadius: 20,
  },

  desc: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Gluten-Regular',
  },
});
