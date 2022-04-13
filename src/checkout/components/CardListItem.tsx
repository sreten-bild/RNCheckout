import React from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {Card} from '../../core/types';

interface CardListItemProps {
  card: Card;
  onSelected: () => void;
  value: boolean;
}

export const CardListItem = ({card, onSelected, value}: CardListItemProps) => {
  return (
    <Pressable onPress={onSelected}>
      <View style={styles.container}>
        <View>
          <View style={[styles.radio, value ? styles.radioSelected : {}]} />
        </View>
        <View style={styles.cardInfo}>
          <Text>Card number: ****{card.number.slice(-4)}</Text>
          <Text>
            {card.cardholderName} | {card.expiryMonth}/{card.expiryYear}
          </Text>
        </View>
      </View>
      {value && (
        <View>
          <TextInput
            placeholder="CVV"
            secureTextEntry={true}
            style={styles.cvvInput}
          />
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#bbb',
    marginTop: 8,
    paddingTop: 8,
  },
  radio: {
    width: 15,
    height: 15,
    borderWidth: 3,
    borderColor: '#bbb',
    borderRadius: 15,
  },
  radioSelected: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  cardInfo: {
    flexGrow: 1,
    marginLeft: 10,
  },
  cvvInput: {
    borderWidth: 2,
    borderColor: '#bbb',
    marginLeft: 26,
    width: 80,
    padding: 8,
    marginVertical: 4,
  },
});
