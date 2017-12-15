import React from 'react';
import {View, Text, Button, ScrollView} from 'react-native';
import HTML from 'react-native-render-html';


// const HomeScreen = ({ navigation }) => (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//             onPress={() => navigation.navigate('Details')}
//             title="Goooooo to detail"
//         />
//     </View>
// );


const DetailScreen = ({ navigation}) => (
    <DetailScreenView navigation={navigation}/>
);

class DetailScreenView extends React.Component {
    render() {
        const { navigation } = this.props;
        return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>detail Screen</Text>
        <Text> {navigation.state.params.name}</Text>
        <Button
            onPress={() => navigation.navigate('Home')}
            title="go to List"
        />
        <ScrollView style={{ flex: 1 }}>
        <HTML html={navigation.state.params.content} />
        </ScrollView>
    </View>;
    }
}

export default DetailScreen