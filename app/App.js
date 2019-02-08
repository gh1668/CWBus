import React, {Component} from "react";
import {Platform, StyleSheet, View} from "react-native";
import {inject, observer} from "mobx-react/native";
import Tabs from "./components/tabs/Tabs"

@inject(["mainStore"])
@observer
export default class App extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 1}}>

                </View>
                <Tabs style={{flex: 0}} />
            </View>
        );
    }

    componentDidMount() {
    }
}

const styles = StyleSheet.create({
    container: {
        ...Platform.select({
            ios: {
                paddingTop: 15
            },
            android: {
                paddingTop: 0
            },
        }),
        height: "100%",
        backgroundColor: "#ecf0f1"
    },
});