import React from 'react';
import { View, Text, Button } from 'react-native';



// const HomeScreen = ({ navigation }) => (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//             onPress={() => navigation.navigate('Details')}
//             title="Goooooo to detail"
//         />
//     </View>
// );


const DetailScreen = ({ navigation }) => (
    <DetailScreenView navigation={navigation} />
);


class DetailScreenView extends React.Component {
    render() {
        const { navigation } = this.props;
        return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>detail Screen</Text>
        <Button
            onPress={() => navigation.navigate('Home')}
            title="go to List"
        />
    </View>;
    }
}


export default DetailScreen