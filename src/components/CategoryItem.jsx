import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../theme';

import Text from './Text';

const styles = StyleSheet.create({
    category: {
        backgroundColor: theme.colors.background,
        height: 100,
        width: 100,
        margin: 7,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
    },
    amount: {
        alignSelf: 'center',
        marginTop: 5,
    }
});

const CategoryItem = ({ item }) => {
    return (
        <View style={styles.category}>
            <Text fontSize='subheading' fontWeight='bold'>{item.name}</Text>
            <Text style={styles.amount}>{item.amount}</Text>
        </View>
    );
};

export default CategoryItem;