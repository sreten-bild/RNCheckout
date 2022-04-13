import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {Card} from '../../core/types';

interface CardAddFormProps {
  onAddCard: (card: Card) => void;
  onCancel: () => void;
}

export const CardAddForm = ({onAddCard, onCancel}: CardAddFormProps) => {
  // TODO: This custom form should be replaced with react-hook-form in a production use case

  const [cardholderName, setCardholderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const onAdd = () => {
    const newCard: Card = {
      cardholderName,
      number: cardNumber,
      expiryMonth: parseInt(month, 10),
      expiryYear: parseInt(year, 10),
      cvv: '',
    };
    onAddCard(newCard);
  };

  return (
    <View style={styles.form}>
      <TextInput
        placeholder="Cardholder name"
        value={cardholderName}
        onChangeText={text => setCardholderName(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Card number"
        value={cardNumber}
        onChangeText={text => setCardNumber(text)}
        style={styles.input}
      />
      <View style={styles.expiry}>
        <TextInput
          placeholder="Month"
          value={month}
          onChangeText={text => setMonth(text)}
          style={[styles.input, styles.expiryInput]}
        />
        <Text style={{marginRight: 4}}>/</Text>
        <TextInput
          placeholder="Year"
          value={year}
          onChangeText={text => setYear(text)}
          style={[styles.input, styles.expiryInput]}
        />
      </View>
      <View style={styles.buttons}>
        <Button title="Add" onPress={onAdd} />
        <Button title="Cancel" onPress={onCancel} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    paddingLeft: 26,
    borderTopWidth: 1,
    borderTopColor: '#bbb',
    marginTop: 8,
    paddingVertical: 8,
  },
  buttons: {
    flexDirection: 'row',
  },
  input: {
    borderWidth: 2,
    borderColor: '#bbb',
    padding: 8,
    marginVertical: 4,
  },
  expiry: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  expiryInput: {
    marginRight: 4,
    width: 80,
  },
});
