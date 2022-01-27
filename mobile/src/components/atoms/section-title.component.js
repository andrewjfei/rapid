import React from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    paddingBottom: 10,
    color: '#1e1e1e',
  },
});

const SectionTitle = ({ text }) => {
  return <Text style={styles.sectionTitle}>{text}</Text>;
};

export default SectionTitle;
