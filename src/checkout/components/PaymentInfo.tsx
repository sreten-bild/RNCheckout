import React, {useState} from 'react';
import {
  Button,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {Card} from '../../core/types';
import {CardAddForm} from './CardAddForm';
import {CardListItem} from './CardListItem';

interface PaymentInfoProps {
  style: StyleProp<ViewStyle>;
}

const INITIAL_CARDS: Card[] = [
  {
    number: '4100010102020303',
    cardholderName: 'John Smith',
    expiryMonth: 2,
    expiryYear: 23,
    cvv: '',
  },
  {
    number: '4100010102020543',
    cardholderName: 'Jane Smith',
    expiryMonth: 8,
    expiryYear: 25,
    cvv: '',
  },
];

export const PaymentInfo = ({style}: PaymentInfoProps) => {
  const [cards, setCards] = useState<Card[]>(INITIAL_CARDS);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [showAddForm, setShowAddForm] = useState(false);

  const addCard = (card: Card) => {
    const allCards = [...cards];
    allCards.push(card);
    setCards(allCards);
    setShowAddForm(false);
  };

  return (
    <View style={style}>
      <Text style={styles.title}>Payment</Text>
      <View>
        {cards.map((card, idx) => (
          <CardListItem
            card={card}
            key={card.number}
            onSelected={() => {
              setActiveCardIndex(idx);
            }}
            value={activeCardIndex === idx}
          />
        ))}
      </View>
      <View>
        {!showAddForm && (
          <Button title="Add card" onPress={() => setShowAddForm(true)} />
        )}
        {showAddForm && (
          <View>
            <CardAddForm
              onAddCard={addCard}
              onCancel={() => setShowAddForm(false)}
            />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
