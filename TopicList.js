import React from 'react';
import {View, Text, Button, ListView} from 'react-native';



// const HomeScreen = ({ navigation }) => (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//             onPress={() => navigation.navigate('Details')}
//             title="Goooooo to detail"
//         />
//     </View>
// );

var jsonHeader = {headers:{Accept:'application/json'}};

const HomeScreen = ({ navigation }) => (
    <HomeScreenView navigation={navigation} />
);


class HomeScreenView extends React.Component {

    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2']),
        };

        var url = "https://randomuser.me/api/?page=3&results=10";
        var req = fetch(url , jsonHeader).then(res => res.json());
        Promise.all([req])
            .then(([data]) => {
                console.log(data);

                // this.topics = data;
                // this.setState({topics: data.items})
                // this.setState({dataSource: data.results})
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows( data.results)
                });
                console.log("load");
            });
    }
    // constructor(props) {
    //     super(props);
    //
    //     this._shareMessage = this._shareMessage.bind(this);
    //     this._shareText = this._shareText.bind(this);
    //     this._showResult = this._showResult.bind(this);
    //
    //     this.state = {
    //         result: ''
    //     };
    render() {
        const { navigation } = this.props;
        return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                onPress={() => navigation.navigate('Details')}
                title="Goto detail"
            />
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <Text>{rowData.gender}</Text>}
            />
            <Button
                onPress={() => navigation.navigate('FlatList')}
                title="Goto List"
            />
        </View>
    }

    reloadTopics() {

    //
    }
}




export default HomeScreen