/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14
// var TopicList = require('./TopicList');
import HomeScreen from './TopicList'
import DetailScreen from './TopicDetail'
import FlatListDemoScreen from "./FlatListDemo";

// const HomeScreen = ({ navigation }) => (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//             onPress={() => navigation.navigate('Details')}
//             title="Go to detail"
//         />
//     </View>
// );

// const DetailsScreen = () => (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//     </View>
// );


const RootNavigator = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerTitle: 'Home',
        },
    },
    Details: {
        screen: DetailScreen,
        navigationOptions: {
            headerTitle: 'Details',
        },
    },
    FlatList: {
        screen: FlatListDemoScreen,
        navigationOptions: {
            headerTitle: 'Flat',
        },
    },
});

export default RootNavigator;