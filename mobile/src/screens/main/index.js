import React, { useState } from 'react';
import { StyleSheet, View, Image, SafeAreaView } from 'react-native';

import {
  TaskListBackground,
  AddIcon,
  FloatingActionButton,
} from '../../components/atoms';
import { TaskOverview, TaskModal } from '../../components/molecules';
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.componentsContainer}>
          <View style={styles.logoContainer}>
            <Image source={Logo} style={styles.logo} />
          </View>
          <TaskOverview style={{ marginBottom: 30 }} />
          <TaskList />
        </View>
      </SafeAreaView>
      {/* <TaskListBackground /> */}
      <FloatingActionButton onPress={() => setIsModalOpen(true)}>
        <AddIcon iconColour={'#f2f4ff'} />
      </FloatingActionButton>
      {isModalOpen ? (
        <TaskModal onBackgroundPress={() => setIsModalOpen(false)} />
      ) : null}
    </View>
  );
};

export default MainScreen;
