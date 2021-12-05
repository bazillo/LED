import React, {useEffect} from "react";
import {View, Text, Button} from "react-native";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {ConnectionSwitchCreator, DevicesPushCreator, SendRequiredCreator} from "../../src/store/actionCreator"
import {store} from "../../src/store/store";


const mapStateToProps = (state) => {
    return {
        connection: state.connection,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeConnection: bindActionCreators(ConnectionSwitchCreator, dispatch),
        send: bindActionCreators(SendRequiredCreator, dispatch)
    }
}


const Connection = (props) => {
    return <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }}>
        <Text>You are using {props.connection}</Text>
        <Button
            title={"Try connect"}
            onPress={() => {
                props.send(true)
            }}
            color="#e78c38"
        />

    </View>
}


export const ConnectionScreen = connect(mapStateToProps, mapDispatchToProps)(Connection)

