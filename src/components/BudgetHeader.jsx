import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15
    },
});

import Text from './Text';
import { Link } from 'react-router-native';

const BudgetHeader = () => {
    return (
        <View style={styles.header}>
            <Text fontWeight='bold' fontSize='heading' style={styles.title}>My Budget</Text>
            <Link to='/addcategory' component={TouchableWithoutFeedback}>
                <AntDesign name="pluscircle" size={24} color="black" />
            </Link>
        </View>
    );
};

export default BudgetHeader;