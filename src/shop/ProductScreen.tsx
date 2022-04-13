import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, {useState} from 'react';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {RootNavigatorParamList} from '../core/App';

type ProductRouteProp = RouteProp<RootNavigatorParamList, 'Product'>;

export const ProductScreen = () => {
  const {navigate} = useNavigation<NavigationProp<RootNavigatorParamList>>();
  const route = useRoute<ProductRouteProp>();
  const product = route.params.item;

  const [quantity, setQuantity] = useState(1);

  const onChangeQuantity = (text: string) => {
    const parsed = parseInt(text, 10);

    // make sure quantity is not negative
    if (!isNaN(parsed) && parsed >= 0) {
      setQuantity(parsed);
    }
  };

  const goToCheckout = () => {
    if (quantity === 0) {
      Alert.alert('No quantity', 'Please set the quantity.');
      return;
    }

    navigate('Checkout', {item: product, quantity});
  };

  return (
    <View>
      <View style={styles.field}>
        <Text>Concert:</Text>
        <Text style={styles.fieldValue}>{product.name}</Text>
      </View>
      <View style={styles.field}>
        <Text>Price:</Text>
        <Text style={styles.fieldValue}>{product.price}</Text>
      </View>

      <View style={styles.field}>
        <Text>Quantity</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={quantity.toString()}
          onChangeText={onChangeQuantity}
        />
      </View>
      <Button title="Buy now" onPress={goToCheckout} />
    </View>
  );
};

const styles = StyleSheet.create({
  field: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fieldValue: {
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
