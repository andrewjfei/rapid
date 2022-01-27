import React from 'react';
import { StyleSheet, View, Image, SafeAreaView } from 'react-native';

import { TaskListBackground } from '../../components/atoms';
import { TaskOverview } from '../../components/molecules';
import { TaskList } from '../../components/organisims';
import Logo from '../../../assets/rapid-logo.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  componentsContainer: {
    paddingHorizontal: 30,
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  logo: {
    width: 32,
    height: 40,
  },
  taskList: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  taskListWhiteSpace: {
    height: 150,
  },
});

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.componentsContainer}>
          <View style={styles.logoContainer}>
            <Image source={Logo} style={styles.logo} />
          </View>
          <TaskOverview />
          <TaskList />
        </View>
      </SafeAreaView>
      {/* <TaskListBackground /> */}
    </View>
  );
};

export default MainScreen;
