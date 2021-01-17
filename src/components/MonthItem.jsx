import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../theme';

import Text from './Text';

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.background,
        height: 75,
        margin: 25,
        marginTop: 10,
        borderRadius: 7,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    month: {
        marginLeft: 15
    }
});

const MonthItem = ({ item }) => {
    const date = new Date(item.timestamp.substring(0, 16));

    return (
        <View style={styles.container}>
            <Text fontWeight='bold' fontSize='subheading' style={styles.month}>{date.toLocaleString('default', { month: 'long', year: 'numeric' })}</Text>
        </View>
    );
};

export default MonthItem;