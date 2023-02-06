
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet,Text, View} from 'react-native';
import {MyTabs} from "./src/navigatons"
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';



const Stack = createStackNavigator();
const App = () => {

 

  return (
    
    <NavigationContainer>
      
      <Stack.Navigator>
        <Stack.Screen name="WhatsApp" component={MyTabs} 
        options={{  headerStyle: { backgroundColor: '#00A36C'},
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize:25
          },
          
          headerRight: () => (
            <View style={{ flexDirection:'row'}}>
            <Text style={{flex:1,marginRight:15}}>
            <Fontisto style={styles.wifi} name="wifi" size={20}color={'white'} />,
           </Text>
           <Text style={{ marginRight:15}}>
            <Ionicons name="moon" size={25}color={'white'} />
            </Text>

            <Text style={{ marginRight:15,}}>
            <Ionicons name="search" size={27}color={'white'} />
            </Text>

            <Text style={{flex:1,marginRight:15}}>
            <Ionicons style={styles.wifi} name="camera-outline" size={27}color={'white'} />,
           </Text>

           <Text style={{flex:1,marginRight:10}}>
            <Entypo style={styles.wifi} name="dots-three-vertical" size={25}color={'white'} />,
           </Text>
            </View>
          ),
        }}
        />
      
      </Stack.Navigator>
      
    </NavigationContainer>
    
  );
};

const styles = StyleSheet.create({

 
});

export default App;
