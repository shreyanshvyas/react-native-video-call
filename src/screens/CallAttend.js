import React from 'react';
import {View, StyleSheet} from 'react-native';
import BottomTab from '../components/BottomTab';

const CallScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cameraPreview} />

      <BottomTab />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7b4e80',
  },
  cameraPreview: {
    width: 100,
    height: 150,
    backgroundColor: '#ffff6e',
    borderRadius: 10,
    position: 'absolute',
    right: 10,
    top: 100,
  },
});

export default CallScreen;
