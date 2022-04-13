import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ShopScreen} from '../shop/ShopScreen';
import {CheckoutScreen} from '../checkout/CheckoutScreen';
import {Product} from './types';
import {ProductScreen} from '../shop/ProductScreen';

export type RootNavigatorParamList = {
  Shop: {};
  Checkout: {
    item: Product;
    quantity: number;
  };
  Product: {
    item: Product;
  };
};

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Shop" component={ShopScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
