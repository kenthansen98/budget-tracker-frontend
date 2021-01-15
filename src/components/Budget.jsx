import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import useCategories from '../hooks/useCategories';
import CategoryItem from './CategoryItem';
import BudgetHeader from './BudgetHeader';

const styles = StyleSheet.create({
    title: {
        
    },  
    container: {
        flex: 1, 
        alignItems: 'center',
    },
});

const Budget = () => {

    const renderItem = ({ item }) => {
        return (
            <CategoryItem item={item} />
        );
    };

    const { categories, loading } = useCategories();
    const categoryNodes = categories 
    ? categories.categories
    : [];

    return (
        loading
        ? <View style={styles.container}></View>
        : <View style={styles.container}>
            <FlatList 
                data={categoryNodes}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                ListHeaderComponent={() => <BudgetHeader />}
            />
        </View>
    );
};

export default Budget;