import {AntDesign} from '@expo/vector-icons';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Home} from "./screens/Home";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {ConnectionScreen} from "./screens/ConnectionScreen";
import {LedScreen} from "./screens/LedScreen";


const Tab = createBottomTabNavigator()

const tabSettings = ({route}) => ({
    tabBarIcon: ({focused, color, size}) => {
        let iconName;
        switch (route.name) {
            case 'Home':
                return <AntDesign name="home" size={size} color={color}/>
            case 'Connection':
                return <AntDesign name="earth" size={size} color={color}/>
            case 'LED':
                if(focused) return <AntDesign name="star" size={size} color={color}/>
                else return <AntDesign name="staro" size={size} color={color}/>
        }
    },
})

export default function App() {
    return (

            <Provider store={store}>
                <NavigationContainer>
                    <Tab.Navigator screenOptions={tabSettings}
                                               tabBarOptions={{
                                                   activeTintColor: '#e78c38',
                                                   inactiveTintColor: 'gray',
                                               }}
                                               initialRouteName="Home">
                        <Tab.Screen name="LED" component={LedScreen}/>
                        <Tab.Screen name="Home" component={Home}/>
                        <Tab.Screen name="Connection" component={ConnectionScreen}/>
                    </Tab.Navigator>
                </NavigationContainer>
            </Provider>

    )
}

