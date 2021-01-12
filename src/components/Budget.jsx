import React from 'react';
import { FlatList, View } from 'react-native';

import useCategories from '../hooks/useCategories';
import Text from './Text';

const renderItem = ({ item }) => (
    <Text>{item.name} {item.amount}</Text>
);

const Budget = () => {
    const { categories } = useCategories();
    const categoryNodes = categories 
    ? categories.categories
    : [];

    return (
        <View>
            <Text fontWeight='bold' fontSize='heading'>My Budget</Text>
            <FlatList 
                data={categoryNodes}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default Budget;