import React, {Component} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

class Dashboard extends Component {
    state = {
        counter: 0
    }
    increaseCounter = () => {
        this.setState({counter: this.state.counter + 1})
    }
    decreaseCounter = () => {
        this.setState({counter: this.state.counter - 1})
    }
    render(){
        return(
            <View style = {styles.container}>
                <View>
                    <TouchableOpacity
                        onPress = {() => this.increaseCounter()}
                    >
                        <Text style = {styles.btnIncrease}> Increase </Text>
                    </TouchableOpacity>
                    <Text style = {styles.counter}>{this.state.counter}</Text>
                    <TouchableOpacity
                        onPress = {() => this.decreaseCounter()}
                    >
                        <Text style = {styles.btnDecrease}> Decrease </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'  
    },
    btnIncrease: {
        fontSize: 20,
        color: '#000000',
        textAlign: 'center',
        padding: 20
    },
    btnDecrease:{
        fontSize: 20,
        color: '#000000',
        textAlign: 'center',
        padding: 20
    },
    counter:{
        color: '#D50000',
        textAlign: 'center',
        fontSize: 20
    }
});

export default Dashboard;