import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { useHistory } from 'react-router-native';

import Button from './Button';
import Text from './Text';
import useMonths from '../hooks/useMonths';
import MonthItem from './MonthItem';

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
    },
    monthsView: {
        flex: 1,
    },
    header: {
        margin: 15,
        marginLeft: 30
    },
});

const Home = () => {

    const renderItem = ({ item }) => {
        return (
            <MonthItem item={item} />
        );
    };

    const { months, loading } = useMonths();
    const history = useHistory();

    const monthNodes = months
    ? months.months
    :[];

    monthNodes.sort((x, y) => {
        return new Date(y.timestamp) - new Date(x.timestamp);
    });

    if (loading) {
        return (
            <View />
        );
    } else {
        return (
            !months
            ? 
            <View style={styles.view}>
                <View style={styles.container}>
                    <Text fontWeight='bold' fontSize='heading'>Budget Tracker</Text>
                    <View style={styles.button} >
                        <Button text="Add Month" onSubmit={() => history.push('/add')}/>
                    </View>
                </View>
            </View>
            :
            <View style={styles.monthsView}>
                <FlatList 
                    data={monthNodes}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.month_id.toString()}
                    ListHeaderComponent={<Text fontWeight='bold' fontSize='heading' style={styles.header}>Months</Text>}
                />
            </View>
        );
    }
};

export default Home;