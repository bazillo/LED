import React from "react";
import {View, Text, Button} from "react-native";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {ConnectionSwitchCreator} from "../../src/store/actionCreator";


const mapStateToProps = (state) => {
    return {
        connection: state.connection
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        changeConnection : bindActionCreators(ConnectionSwitchCreator,dispatch)
    }
}



const Connection = (props) => {
    return <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }}>
        <Text>{props.connection}</Text>
        <Button
            title= {"change"}
            onPress={() => props.changeConnection((props.connection === "WIFI")?"Bluetooth":"WIFI")}
            color = "#e78c38"
        />
    </View>
}





export const ConnectionScreen = connect(mapStateToProps,mapDispatchToProps)(Connection)

