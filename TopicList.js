import React from 'react';
import { View, Text, FlatList, ActivityIndicator, Button } from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";


// const HomeScreen = ({ navigation }) => (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//             onPress={() => navigation.navigate('Details')}
//             title="Goooooo to detail"
//         />
//     </View>
// );

// var jsonHeader = {headers:{Accept:'application/json'}};

const HomeScreen = ({ navigation }) => (
    <HomeScreenView navigation={navigation} />
);


class HomeScreenView extends React.Component {
    state = {selected: (new Map(): Map<string, boolean>)};

    constructor() {
        super();
        this.state = {
            data: [],
            refreshing: false
        };
    }

    componentDidMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        var url = "https://randomuser.me/api/?page=3&results=5";
        var req = fetch(url ).then(res => res.json());
        Promise.all([req])
            .then(([data]) => {
                console.log(data);
                // this.topics = data;
                // this.setState({topics: data.items})
                // this.setState({dataSource: data.results})
                this.setState({
                    data: data.results
                });

                console.log("load");
            });
    }

    render() {
        const { navigation } = this.props;
        return <View>
            <Text>Home Screen</Text>
            <Button
                onPress={() => navigation.navigate('Details')}
                title="Goto detail"
            />

            <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => (
                        <ListItem
                            title={`${item.name.first} ${item.name.last}`}
                            subtitle={"aa"}
                            avatar={{ uri: item.picture.thumbnail }}
                            containerStyle={{ borderBottomWidth: 0 }}
                        />
                    )}
                    keyExtractor={item => item.email}
                    onEndReachedThreshold={50}
                />
            </List>

            <Button
                onPress={() => navigation.navigate('FlatList')}
                title="Goto List"
            />
        </View>
    }

}

export default HomeScreen