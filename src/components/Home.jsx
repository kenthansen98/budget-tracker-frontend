import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from './Button';

import Text from './Text';

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        alignItems: 'center',
    },
    button: {
        marginTop: 20,
    }
});

const Home = () => {
    return (
        <View style={styles.view}>
            <View style={styles.container}>
                <Text fontWeight='bold' fontSize='heading'>Budget Tracker</Text>
                <View style={styles.button} >
                    <Button text="Add Month" />
                </View>
            </View>
        </View>
    );
};

export default Home;