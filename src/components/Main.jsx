import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import Home from './Home';
import AppBar from './AppBar';
import Budget from './Budget';
import AddMonth from './AddMonth';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    justifyContent: 'space-between',
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/mybudget" exact>
          <Budget />
        </Route>
        <Route path="/add" exact>
          <AddMonth />
        </Route>
        <Redirect to="/" />
      </Switch>
      <AppBar />
    </View>
  );
};

export default Main;