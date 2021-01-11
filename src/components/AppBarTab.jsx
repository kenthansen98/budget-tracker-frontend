import React from 'react';
import { TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

import Text from './Text';

const AppBarTab = ({ title, route }) => {
    return (
        <Link to={route} component={TouchableWithoutFeedback}>
            <Text color='tab' fontWeight='bold' >{title}</Text>
        </Link>
    );
};

export default AppBarTab;