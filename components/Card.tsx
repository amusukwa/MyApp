import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Card({ title, content }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardContent}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff', // White card background
    borderRadius: 10,        // Rounded corners
    padding: 16,             // Padding inside the card
    shadowColor: '#000',     // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.1,      // Shadow transparency
    shadowRadius: 4,         // Shadow blur
    elevation: 3,            // Android shadow
    marginBottom: 16,        // Spacing below the card
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardContent: {
    fontSize: 14,
    color: '#555',           // Slightly muted text color
  },
});
