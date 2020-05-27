import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import Config from 'react-native-config';

import useExampleState from './states/exampleState';

const Test = () => {
  const [state, actions] = useExampleState();
  const { increment, decrement, fetchRemoteUsers } = actions;
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>MODE from env: {Config.RELEASE_MODE}</Text>
      <View style={{ height: 20 }} />
      <Text>{state.count}</Text>
      <View style={{ height: 20 }} />
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <View style={{ height: 10 }} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      <View style={{ height: 10 }} />
      <Button
        title="Fetch Remote Users"
        onPress={() => dispatch(fetchRemoteUsers())}
      />
      {state.isFetchingUsers && <Text>Fetching users...</Text>}
      {Object.keys(state.users) &&
        state.users.map(user => <Text key={user.id}>{user.name}</Text>)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Test;
