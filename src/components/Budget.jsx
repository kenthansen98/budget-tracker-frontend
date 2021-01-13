import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import useCategories from '../hooks/useCategories';
import CategoryItem from './CategoryItem';
import Text from './Text';

const styles = StyleSheet.create({
    title: {
        
    },  
    container: {
        flex: 1, 
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15
    }
});

const Budget = () => {

    const renderItem = ({ item }) => {
        return (
            <CategoryItem item={item} />
        );
    };

    const { categories } = useCategories();
    const categoryNodes = categories 
    ? categories.categories
    : [];

    return (
        <View style={styles.container}>
            <FlatList 
                data={categoryNodes}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                ListHeaderComponent={() => (
                    <View style={styles.header}>
                        <Text fontWeight='bold' fontSize='heading' style={styles.title}>My Budget</Text>
                        <AntDesign name="pluscircle" size={24} color="black" />
                    </View>
                )}
            />
        </View>
    );
};

export default Budget;