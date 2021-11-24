import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Camera from 'react-native-vector-icons/Ionicons';
import OffCamera from 'react-native-vector-icons/MaterialCommunityIcons';
import Microphone from 'react-native-vector-icons/MaterialCommunityIcons';
import Phone from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomTab = ({onHangupPress}) => {
  const [isCameraOn, setIsCameraOn] = React.useState(true);
  const [isMicOn, setIsMicOn] = React.useState(true);

  const onReverseCamera = () => {};
  const onToggleCamera = () => {
    setIsCameraOn(currentValue => !currentValue);
  };
  const onToggleMicrophone = () => {
    setIsMicOn(currentValue => !currentValue);
  };

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={onReverseCamera}>
        <View style={styles.iconButton}>
          <Camera name="ios-camera-reverse" size={30} color={'white'} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onToggleCamera}>
        <View style={styles.iconButton}>
          <OffCamera
            name={isCameraOn ? 'camera-off' : 'camera'}
            size={30}
            color={'white'}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onToggleMicrophone}>
        <View style={styles.iconButton}>
          <Microphone
            name={isMicOn ? 'microphone-off' : 'microphone'}
            size={30}
            color={'white'}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onHangupPress}>
        <View style={[styles.iconButton, {backgroundColor: '#d12219'}]}>
          <Phone name="phone-hangup" size={30} color={'white'} />
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#333333',
    padding: 20,
    paddingBottom: 40,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
  },
  iconButton: {
    backgroundColor: '#4a4a4a',
    padding: 15,
    borderRadius: 50,
  },
});

export default BottomTab;
