import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  primaryCard: {
    backgroundColor: '#4A90E2',
    width: 100,
    height: 80,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContent: {
    alignItems: 'center',
  },
  primaryCardTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  primaryCardSubtitle: {
    color: 'white',
    fontSize: 12,
  },
  secondaryCard: {
    backgroundColor: 'white',
    width: 100,
    height: 80,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryCardText: {
    color: '#999',
    fontSize: 14,
    fontFamily: 'monospace',
  },
});
