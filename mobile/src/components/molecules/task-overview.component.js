import React from 'react';
import { StyleSheet, View } from 'react-native';

import { SectionTitle } from '../atoms';
import { InfoCard } from '../atoms';

const styles = StyleSheet.create({
  infoCardContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  buttonText: {
    fontWeight: '700',
    fontSize: 14,
  },
});

const TaskOverview = ({ backgroundColor }) => {
  return (
    <View style={styles.taskOverviewContainer}>
      <SectionTitle text={'Overview'} />
      <View style={styles.infoCardContainer}>
        <InfoCard
          backgroundColour={'#6077e8'}
          textColour={'#fbfcff'}
          title={'Remaining'}
          value={7}
        />
        <InfoCard
          backgroundColour={'#e8eaf3'}
          textColour={'#1e1e1e'}
          title={'Complete'}
          value={256}
        />
      </View>
    </View>
  );
};

export default TaskOverview;
