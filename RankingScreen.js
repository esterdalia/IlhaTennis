// arquivo RankingScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { getPlayers } from './firestore';

const RankingScreen = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        loadPlayers();
    }, []);

    const loadPlayers = () => {
        getPlayers()
            .then(playersData => {
                setPlayers(playersData);
            });
    };

    const renderItem = ({ item, index }) => (
        <View>
            <Text>{`${index + 1}. ${item.name} - ${item.ranking}`}</Text>
        </View>
    );

    return (
        <View>
            <FlatList
                data={players}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

export default RankingScreen;
