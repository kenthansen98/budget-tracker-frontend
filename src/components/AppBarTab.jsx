import React from 'react';
import { TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import { AntDesign } from '@expo/vector-icons';

import Text from './Text';

const AppBarTab = ({ title, route, icon }) => {
    return (
        <Link to={route} component={TouchableWithoutFeedback}> 
            <AntDesign name={icon} size={28} color="black" />
        </Link>
    );
};

export default AppBarTab;