import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Status, Chats, Call, Camera } from '../screens';
import { StyleSheet } from 'react-native';
import {

  View,
  Text,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const Tab = createMaterialTopTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="CHATS"
      tabBarOptions={{
        tabStyle: { backgroundColor: '#00A36C' }, labelStyle: { fontSize: 18 }, activeTintColor: 'white',
      }}
    >

      <Tab.Screen name="Camera" component={Camera}  options={{
        // tabBarLabel: () => <Text>hjhj</Text>,
        tabBarLabel: () => <View><FontAwesome name='camera' size={20} color={'white'} /></View>
      }} />
      <Tab.Screen name="CHATS" component={Chats} />
      <Tab.Screen name="STATUS" component={Status} />
      <Tab.Screen name="CALLS" component={Call} />



    </Tab.Navigator>
  );
};

const style = StyleSheet.create({



})


