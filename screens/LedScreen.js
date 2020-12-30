import React from 'react'
import {connect} from "react-redux";
import {Text, View, Button,Pressable} from "react-native";


const LedD = (props) =>
{
    return(
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Text>LED</Text>
        </View>
    )
}

export const  LedScreen = connect()(LedD)