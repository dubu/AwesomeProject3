import React from 'react';
import {View, Text, FlatList, ActivityIndicator, Button, Image, StyleSheet} from "react-native";
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
        // var url = "https://randomuser.me/api/?page=3&results=3";
        var url = "https://raw.githubusercontent.com/dubu/my-web/master/public/articles.json"
        var req = fetch(url ).then(res => res.json());
        Promise.all([req])
            .then(([data]) => {
                console.log(data);
                // this.topics = data;
                // this.setState({topics: data.items})
                // this.setState({dataSource: data.results})
                this.setState({
                    data: data.list
                });

                console.log("load");
            });
    }

    render() {
        const {navigation} = this.props;
        const styles = StyleSheet.create({
            stretch: {
                width: 100,
                height: 100
            }
        });


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
                            title={`${item.episodeName} `}
                            avatar={
                                <View>
                                    <Image style={styles.stretch} source={{uri: "http://t1.daumcdn.net/thumb/S222x140/?fname="+item.imageUrl}}  />
                                </View>
                            }
                            subtitle={item.projectName}
                            containerStyle={{ borderBottomWidth: 0 }}
                        />
                    )}
                    keyExtractor={item => item.episodeId}
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