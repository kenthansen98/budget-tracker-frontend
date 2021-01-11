import React from 'react';
import { View, StyleSheet } from 'react-native';

import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBarColor.backgroundColor,
        height: 75,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 30,
    }
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <AppBarTab title="My Budget" route="/mybudget" />
            <AppBarTab title="Add" route="/" />
            <AppBarTab title="Stats" route="/stats" />
        </View>
    );
};

export default AppBar;