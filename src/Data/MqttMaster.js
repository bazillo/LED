// import React, {Component} from 'react';
// import init from 'react_native_mqtt';
// import {AsyncStorage, Button, Text, View} from 'react-native';
//
//
// import {constants} from "../constants";
// import {connect} from "react-redux";
// import {bindActionCreators} from "redux";
// import {ConnectionSwitchCreator, SendRequiredCreator} from "../store/actionCreator";
//
// import * as Mqtt from 'react-native-native-mqtt';
//
//
// init({
//     size: 10000,
//     storageBackend: AsyncStorage,
//     defaultExpires: 1000 * 3600 * 24,
//     enableCache: true,
//     sync: {},
// });
//
// const mapStateToProps = (state) => {
//     return {
//         connection: state.connection,
//         send_required: state.send_required
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         changeConnection: bindActionCreators(ConnectionSwitchCreator, dispatch),
//         send: bindActionCreators(SendRequiredCreator, dispatch)
//     }
// }
//
//
// class MqttMaster extends Component {
//     constructor(props) {
//         super(props);
//         // this.connect()
//     }
//
//     connect() {
//         console.log("trying to connect...")
//         var client = new Paho.MQTT.Client()
//         client.connect({
//             hosts : [constants.address],
//             userName: constants.username,
//             password:constants.password,
//             onSuccess: () => console.log("Бонжур"),
//             onFailure: err => console.log(err)
//
//         })
//     }
//
//     render() {
//         if (this.props.send_required) {
//             this.connect()
//             this.props.send(false)
//         }
//         return <View style={{
//             flex: 1,
//             justifyContent: "center",
//             alignItems: "center"
//         }}>
//             {/*<Text>You are using {props.connection}</Text>*/}
//             <Button
//                 title={"Try connect"}
//                 onPress={() => {
//                     this.props.send(true)
//                 }}
//                 color="#e78c38"
//             />
//
//         </View>
//     }
//
// }
//
//
// export default connect(mapStateToProps, mapDispatchToProps)(MqttMaster)
