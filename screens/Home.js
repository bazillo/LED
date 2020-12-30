import React from "react";
import {View, Text} from "react-native";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        connection: state.connection
    }
}



const HomeD = (props) => {
    return <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }}>
        <Text>You are using {props.connection}</Text>
    </View>
}


export const Home = connect(mapStateToProps)(HomeD)

