import React from "react";
import {View, Text} from "react-native";
import {connect} from "react-redux";
import {TextInput} from "react-native";
import {bindActionCreators} from "redux";
import {HeightChangeCreator, WidthChangeCreator} from "../src/store/actionCreator";

const mapStateToProps = (state) => {
    return {
        connection: state.connection,
        width: state.ledParams.width,
        height: state.ledParams.height
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeWidth: bindActionCreators(WidthChangeCreator, dispatch),
        changeHeight: bindActionCreators(HeightChangeCreator, dispatch)
    }
}


const HomeD = (props) => {
    return <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }}>
        <Text>{JSON.stringify({width : props.width,height:props.height})}</Text>
        <View style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
        }}>
            <Text>Enter width:</Text>
            <Text> </Text>
            <TextInput editable value={(props.width).toString()} onChangeText={(text) => props.changeWidth(text)}/>
        </View>
        <View style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
        }}>
            <Text>Enter height:</Text>
            <Text> </Text>
            <TextInput  editable value={(props.height).toString()} onChangeText={(text) => props.changeHeight(text)}/>
        </View>

    </View>
}


export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeD)

