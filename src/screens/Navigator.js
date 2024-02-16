import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from './Home';
import About from './About';
import Settings from './Settings';
import Contact from './Contact';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#ffffff',
            height: 80,
            borderRadius: 10,
            paddingBottom: 10,
            zIndex: 1,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems:'center'}}>
                <Icon
                  name="home"
                  size={25}
                  color={focused ? '#e32f45' : '#748c94'}
                />
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: focused ? '#e32f45' : '#748c94',
                  }}>
                  Home
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen   
          name="About"
          component={About}
          options={{
            tabBarIcon: ({focused}) => (
              <View  style={{alignItems:'center'}}>
                <Icon
                  name="user-graduate"
                  size={25}
                  color={focused ? '#e32f45' : '#748c94'}
                />
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: focused ? '#e32f45' : '#748c94',
                  }}>
                  About
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen  
         name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems:'center'}}>
                <Icon
                  name="virus"
                  size={25}
                  color={focused ? '#e32f45' : '#748c94'}
                />
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: focused ? '#e32f45' : '#748c94',
                  }}>
                  Settings
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Contact"
          component={Contact}
          options={{
            tabBarIcon: ({focused}) => (
              <View  style={{alignItems:'center'}}>
                <Icon
                  name="google-wallet"
                  size={25}
                  color={focused ? '#e32f45' : '#748c94'}
                />
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: focused ? '#e32f45' : '#748c94',
                  }}>
                  Contact
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
