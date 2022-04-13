import React from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {Product} from '../../core/types';
import {formatPrice} from '../../core/utils';
import {SERVICE_FEE} from '../CheckoutScreen';

interface OrderInfoProps {
  style: StyleProp<ViewStyle>;
  product: Product;
  quantity: number;
}

export const OrderInfo = ({style, product, quantity}: OrderInfoProps) => {
  const total = product.price * quantity + SERVICE_FEE;

  return (
    <View style={style}>
      <View style={styles.header}>
        <Text style={styles.title}>Total</Text>
        <Text style={styles.title}>{formatPrice(total)}</Text>
      </View>
      <View style={styles.subitem}>
        <Text>
          Tickets: {quantity} x {formatPrice(product.price)}
        </Text>
        <Text>{formatPrice(product.price * quantity)}</Text>
      </View>
      <View style={styles.subitem}>
        <Text>Service fee</Text>
        <Text>{formatPrice(SERVICE_FEE)}</Text>
      </View>
      <View style={styles.subitem}>
        <Text>Delivery</Text>
        <Text>Free</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subitem: {
    marginVertical: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
