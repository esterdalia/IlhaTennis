// arquivo firestore.js
import { firestore } from './firebase';

const playersCollection = firestore.collection('players');

export const addPlayerResult = (playerId, result) => {
    playersCollection.doc(playerId).update({
        results: firestore.FieldValue.arrayUnion(result)
    })
        .then(() => {
            console.log('Resultado do jogador adicionado com sucesso!');
        })
        .catch(error => {
            console.log('Erro ao adicionar resultado do jogador:', error);
        });
};

export const getPlayers = () => {
    return playersCollection.orderBy('ranking').get()
        .then(querySnapshot => {
            const players = [];
            querySnapshot.forEach(doc => {
                players.push(doc.data());
            });
            return players;
        })
        .catch(error => {
            console.log('Erro ao obter jogadores:', error);
            return [];
        });
};
