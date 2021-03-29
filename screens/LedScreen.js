import React from 'react'
import {connect} from "react-redux";
import {Text, View, Button, Pressable} from "react-native";

const mapStateToProps = (state) => {
    return (
        {
            mode: state.connection
        }
    )
}
const mapDispatchToProps = (dispatch) => {

}


const LedD = (props) => {
    if(props.mode ==="Bluetooth"){
        return (
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text>Bluetooth</Text>
            </View>
        )
    }else{
        return (
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text>WIFI</Text>
            </View>
        )
    }
}

export const LedScreen = connect(mapStateToProps,)(LedD)