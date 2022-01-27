import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  infoCardBackground: {
    backgroundColor: '#6077e8',
    borderRadius: 15,
    height: 150,
    width: 150,
    padding: 20,
    justifyContent: 'space-between',
  },
  titleText: {
    fontWeight: '700',
    fontSize: 14,
  },
  valueText: {
    fontWeight: '800',
    fontSize: 32,
  },
});

const InfoCard = ({ backgroundColour, textColour, title, value }) => {
  return (
    <View
      style={[styles.infoCardBackground, { backgroundColor: backgroundColour }]}
    >
      <Text style={[styles.titleText, { color: textColour }]}>{title}</Text>
      <Text style={[styles.valueText, { color: textColour }]}>{value}</Text>
    </View>
  );
};

export default InfoCard;
