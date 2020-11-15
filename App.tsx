/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen(props:any) {
  const { navigation } = props;
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Button
        title={`用户名：${name}`}
        onPress={() => navigation.navigate('Details', { name, setName })}
      />
    </View>
  );
}

function DetailsScreen(props: any) {
  const { name, setName } = props.route.params;
  const [userName, setUserName] = useState(name);
  const navigation = useNavigation();

  function handleGoBack() {
    setName(userName);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Button title="修改用户名: " onPress={handleGoBack} />
      <TextInput style={styles.textInput} value={userName} onChangeText={setUserName} />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 50,
    width: 240,
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 12,
    fontSize: 24,
    lineHeight: 30
  },
});

export default App;

