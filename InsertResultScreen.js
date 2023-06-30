// arquivo InsertResultScreen.js
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList } from 'react-native';
import { addPlayerResult, getPlayers } from './firestore';

const InsertResultScreen = () => {
    const [playerId, setPlayerId] = useState('');
    const [result, setResult] = useState('');
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

    const handleAddResult = () => {
        addPlayerResult(playerId, result);
        setPlayerId('');
        setResult('');
        loadPlayers();
    };

    const renderItem = ({ item }) => (
        <View>
            <Text>{item.name}</Text>
            {/* Exibir outras informações do jogador, como ranking e pontuação */}
        </View>
    );

    return (
        <View>
            <TextInput
                placeholder="ID do jogador"
                value={playerId}
                onChangeText={text => setPlayerId(text)}
            />
            <TextInput
                placeholder="Resultado"
                value={result}
                onChangeText={text => setResult(text)}
            />
            <Button title="Adicionar Resultado" onPress={handleAddResult} />

            <FlatList
                data={players}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

export default InsertResultScreen;
