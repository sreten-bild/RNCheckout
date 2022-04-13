import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {Alert, Button, ScrollView, StyleSheet, View} from 'react-native';
import {RootNavigatorParamList} from '../core/App';
import {DeliveryInfo} from './components/DeliveryInfo';
import {OrderInfo} from './components/OrderInfo';
import {PaymentInfo} from './components/PaymentInfo';

type CheckoutRouteProp = RouteProp<RootNavigatorParamList, 'Checkout'>;

export const SERVICE_FEE = 19.9;

export const CheckoutScreen = () => {
  const route = useRoute<CheckoutRouteProp>();
  const product = route.params.item;
  const quantity = route.params.quantity;

  const completeOrder = () => {
    Alert.alert('Order successful!', 'Thank you for using TicketShop!');
  };

  return (
    <ScrollView>
      <DeliveryInfo style={styles.section} />
      <PaymentInfo style={styles.section} />
      <OrderInfo style={styles.section} product={product} quantity={quantity} />
      <View style={styles.btnContainer}>
        <Button title="Order" onPress={completeOrder} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  section: {
    margin: 8,
    borderRadius: 5,
    padding: 16,
    backgroundColor: '#fff',
  },
  btnContainer: {
    marginVertical: 16,
  },
});
