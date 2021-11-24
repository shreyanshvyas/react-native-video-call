import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {backgroundImg} from '../assets/constants';
import RemindMe from 'react-native-vector-icons/Ionicons';
import Message from 'react-native-vector-icons/Entypo';
import Accept from 'react-native-vector-icons/Feather';
import Decline from 'react-native-vector-icons/Feather';
import {useNavigation, useRoute} from '@react-navigation/core';
import {Voximplant} from 'react-native-voximplant';

const IncomingCalling = () => {
  const route = useRoute();
  const {call} = route.params;
  const navigation = useNavigation();
  const [caller, setCaller] = React.useState('');

  React.useEffect(() => {
    setCaller(call.getEndpoints()[0].displayName);

    call.on(Voximplant.CallEvents.Disconnected, callEvent => {
      navigation.navigate('Contact');
    });

    return () => {
      call.off(Voximplant.CallEvents.Disconnected);
    };
  }, []);

  const onDecline = () => {
    call.decline();
  };

  const onAccept = () => {
    navigation.navigate('Calling', {
      call,
      isIncomingCall: true,
    });
  };

  return (
    <React.Fragment>
      <ImageBackground
        source={backgroundImg}
        imageStyle={{resizeMode: 'cover'}}
        style={styles.imageBg}>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor="transparent"
          translucent={true}
        />
        <View style={styles.infoView}>
          <Text style={styles.username}>{caller}</Text>
          <Text style={styles.phone}>VCA</Text>
        </View>

        <View style={[styles.row, {marginTop: 'auto'}]}>
          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <RemindMe name="alarm" color="white" size={25} />
            </TouchableOpacity>
            <Text style={styles.iconText}>Remind me</Text>
          </View>

          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <Message name="message" color="white" size={25} />
            </TouchableOpacity>
            <Text style={styles.iconText}>Message</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={onDecline}>
              <View style={styles.iconButton}>
                <Decline name="x" color="white" size={40} />
              </View>
            </TouchableOpacity>
            <Text style={styles.iconText}>Decline</Text>
          </View>

          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={onAccept}>
              <View style={[styles.iconButton, {backgroundColor: '#2e7bff'}]}>
                <Accept name="check" color="white" size={40} />
              </View>
            </TouchableOpacity>
            <Text style={styles.iconText}>Accept</Text>
          </View>
        </View>
      </ImageBackground>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  infoView: {
    alignItems: 'center',
  },
  iconButton: {
    backgroundColor: '#d12219',
    padding: 18,
    borderRadius: 50,
    margin: 5,
  },
  iconContainer: {alignItems: 'center', marginVertical: 30},
  iconText: {
    color: '#FFFFFF',
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  username: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 100,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  phone: {
    lineHeight: 60,
    fontSize: 25,
    color: '#FFFFFF',
  },
  imageBg: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'transparent',
  },
});

export default IncomingCalling;
