import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {LogoBg} from '../assets/constants';
import {Voximplant} from 'react-native-voximplant';
import {APP_NAME, ACC_NAME} from '../config/config';
import {useNavigation} from '@react-navigation/core';

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const voximplant = Voximplant.getInstance();

  React.useEffect(() => {
    const connect = async () => {
      const status = await voximplant.getClientState();
      if (status === Voximplant.ClientState.DISCONNECTED) {
        await voximplant.connect();
      } else if (status === Voximplant.ClientState.LOGGED_IN) {
        redirectHome();
      }
    };

    connect();
  }, []);

  const signIn = async () => {
    try {
      // fully qualified username
      const fqUsername = `${username}@${APP_NAME}.${ACC_NAME}.voximplant.com`;
      await voximplant.login(fqUsername, password);
      redirectHome();
    } catch (error) {
      console.log(error);
    }
  };

  const redirectHome = () => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'Contact',
        },
      ],
    });
  };

  return (
    <React.Fragment>
      <View style={styles.container}>
        <View style={{alignItems: 'center', marginTop: 50}}>
          <Image source={LogoBg} style={{height: 130, width: 130}} />
          <Text style={{fontSize: 30, fontWeight: '900', letterSpacing: 12}}>
            VCA
          </Text>
        </View>
        <TextInput
          value={username}
          onChangeText={setUsername}
          placeholder="Username"
          style={styles.input}
          autoCapitalize="none"
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          style={styles.input}
          secureTextEntry
        />
        <TouchableOpacity style={styles.btn} onPress={signIn}>
          <Text style={{textAlign: 'center', color: '#ffffff'}}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: -20,
    padding: 10,
    alignItems: 'stretch',
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#FAFAFA',
    padding: 10,
    marginVertical: 8,
    borderRadius: 10,
  },
  btn: {
    backgroundColor: '#318bfb',
    padding: 14,
    marginVertical: 30,
    borderRadius: 10,
  },
});

export default Login;
