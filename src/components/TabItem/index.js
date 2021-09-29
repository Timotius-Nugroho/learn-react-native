import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {
  IconAkun,
  IconAkunActive,
  IconHome,
  IconHomeActive,
  IconPesan,
  IconPesanActive,
} from '../../assets';

const TabItem = ({onPress, onLongPress, isFocused, label}) => {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? <IconHomeActive /> : <IconHome />;
    }
    if (label === 'Pesanan') {
      return isFocused ? <IconPesanActive /> : <IconPesan />;
    }
    if (label === 'Akun') {
      return isFocused ? <IconAkunActive /> : <IconAkun />;
    }

    return <IconHome />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    marginBottom: -8,
  },
});
