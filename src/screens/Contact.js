import React from 'react';
import {StyleSheet, FlatList, Text, View, TouchableOpacity} from 'react-native';
import dummyContacts from '../config/contacts.json';
import SearchBar from '../components/SearchBar';
import {Voximplant} from 'react-native-voximplant';
import {useNavigation} from '@react-navigation/core';

const Contact = () => {
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filteredContacts, setFilterContacts] = React.useState(dummyContacts);
  const voximplant = Voximplant.getInstance();

  React.useEffect(() => {
    voximplant.on(Voximplant.ClientEvents.IncomingCall, incomingCallEvent => {
      navigation.navigate('IncomingCalling', {call: incomingCallEvent.call});
    });

    return () => {
      voximplant.off(Voximplant.ClientEvents.IncomingCall);
    };
  }, []);

  React.useEffect(() => {
    const newContacts = dummyContacts.filter(contact =>
      contact.user_display_name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()),
    );
    setFilterContacts(newContacts);
  }, [searchTerm]);

  const userCall = user => {
    navigation.navigate('Calling', {user});
  };

  return (
    <React.Fragment>
      <View style={styles.container}>
        <View style={{marginTop: 25}}>
          <SearchBar value={searchTerm} onChangeText={setSearchTerm} />
        </View>
        <FlatList
          data={filteredContacts}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => userCall(item)}>
              <Text style={styles.username}>{item.user_display_name}</Text>
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <View style={styles.divider} />}
        />
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 15, backgroundColor: 'white'},
  username: {
    fontSize: 16,
    marginVertical: 10,
    marginHorizontal: 2,
  },
  divider: {
    marginHorizontal: 2,
    height: 1,
    backgroundColor: 'lightgrey',
  },
});

export default Contact;
