import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import {RootNavigatorParamList} from '../core/App';
import {Product} from '../core/types';
import {formatPrice} from '../core/utils';

export const ShopScreen = () => {
  const {navigate} = useNavigation<NavigationProp<RootNavigatorParamList>>();

  const items: Product[] = [
    {
      name: 'Bastille (07/04)',
      price: 79,
    },
    {
      name: 'Liam Gallagher (01/06)',
      price: 59.99,
    },
    {
      name: 'Red Hot Chili Peppers (22/06)',
      price: 89.99,
    },
  ];

  const goToProduct = (item: Product) => {
    navigate('Product', {item});
  };

  const renderListItem = ({item}: {item: Product}) => {
    return (
      <Pressable onPress={() => goToProduct(item)}>
        <View style={styles.listItem}>
          <Text>{item.name}</Text>
          <Text style={styles.itemPrice}>{formatPrice(item.price)}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderListItem}
        ItemSeparatorComponent={() => <View style={styles.listSeparator} />}
        ListHeaderComponent={() => (
          <Text style={styles.intro}>Choose a concert from the list</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemPrice: {
    fontWeight: 'bold',
  },
  listSeparator: {
    height: 1,
    backgroundColor: '#ccc',
  },
  intro: {
    padding: 16,
    paddingBottom: 8,
    opacity: 0.6,
  },
});
