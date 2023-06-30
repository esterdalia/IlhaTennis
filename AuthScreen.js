// arquivo AuthScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { auth } from './firebase';

const AuthScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log('Login bem-sucedido!');
                // Navegar para a próxima tela
            })
            .catch(error => {
                console.log('Erro ao fazer login:', error);
            });
    };

    return (
        <View>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                placeholder="Senha"
                secureTextEntry
                value={password}
                onChangeText={text => setPassword(text)}
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

export default AuthScreen;
