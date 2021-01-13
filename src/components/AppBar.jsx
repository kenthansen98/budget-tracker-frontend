import React from 'react';
import { View, StyleSheet } from 'react-native';

import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBarColor.backgroundColor,
        height: 75,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 25
    }
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <AppBarTab title="My Budget" route="/mybudget" icon="piechart" />
            <AppBarTab title="Home" route="/" icon="home" />
            <AppBarTab title="Add Month" route="/add" icon="pluscircle" />
        </View>
    );
};

export default AppBar;