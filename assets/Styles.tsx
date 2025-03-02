import { View, Text, StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 'auto',
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  gradient: {
    padding: 20,
  },
  balanceSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    color: '#ffffff80',
    fontSize: 16,
    marginBottom: 8,
  },
  smallLabel: {
    fontSize: 14,
  },
  balance: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  smallBalance: {
    fontSize: 28,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 8,
  },
  smallStatItem: {
    gap: 8,
    padding: 6,
  },
  statLabel: {
    color: '#ffffff80',
    fontSize: 14,
  },
  smallStatLabel: {
    fontSize: 12,
  },
  statValue: {
    fontSize: 16,
    fontWeight: '600',
  },
  smallStatValue: {
    fontSize: 14,
  },
  income: {
    color: '#4CAF50',
  },
  expenses: {
    color: '#FF5252',
  },
  divider: {
    width: 1,
    height: 40,
    backgroundColor: '#ffffff20',
  },
});