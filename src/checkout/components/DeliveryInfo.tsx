import React from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';

interface DeliveryInfoProps {
  style: StyleProp<ViewStyle>;
}

export const DeliveryInfo = ({style}: DeliveryInfoProps) => {
  return (
    <View style={style}>
      <Text style={styles.title}>Delivery</Text>
      <Text style={styles.selectedOption}>Mobile Entry - Free</Text>
      <Text style={styles.info}>
        These tickets will be transferred directly to you from a trusted seller.
        We'll email you instructions on how to accept them on the original
        ticket provider's mobile app.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  selectedOption: {
    marginBottom: 4,
  },
  info: {
    opacity: 0.6,
  },
});
