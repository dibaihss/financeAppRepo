import React from 'react';
import { StyleSheet, View, useWindowDimensions, Pressable } from 'react-native';
import { Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';


type RootStackParamList = {
  Home: undefined;
  FixedExpenses: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList>;

interface MainExpensesProps {
  balance: number;
  income: number;
  expenses: number;
  onPress?: () => void;
}

export const MainExpenses: React.FC<MainExpensesProps> = ({
  balance,
  income,
  expenses,
  
}) => {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 375;
  const navigation = useNavigation<NavigationProp>();

  const handleFixedExpensesPress = () => {
    navigation.navigate('FixedExpenses');
  };

  return (
    <View style={[styles.container, { width: width * 0.9 }]}>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.gradient}
      >
        <View style={styles.balanceSection}>
          <Text style={[styles.label, isSmallScreen && styles.smallLabel]}>
            Main Expenses
          </Text>
          <Text style={[styles.balance, isSmallScreen && styles.smallBalance]}>
            ${balance.toLocaleString()}
          </Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={[styles.statItem, isSmallScreen && styles.smallStatItem]}>
          <Pressable onPress={handleFixedExpensesPress}>
              <AntDesign 
                name="retweet" 
                size={isSmallScreen ? 20 : 24}  
                color="#4CAF50"  
              />
            </Pressable>
            <View>
              <Text style={[styles.statLabel, isSmallScreen && styles.smallStatLabel]}>
                Fixed
              </Text>
              <Text style={[styles.statValue, styles.income, isSmallScreen && styles.smallStatValue]}>
                +${income.toLocaleString()}
              </Text>

            </View>
          </View>

          <View style={styles.divider} />

          <View style={[styles.statItem, isSmallScreen && styles.smallStatItem]}>

            <AntDesign name="export" size={isSmallScreen ? 20 : 24} color="#FF5252" />
            <View>
              <Text style={[styles.statLabel, isSmallScreen && styles.smallStatLabel]}>
                Extra
              </Text>
              <Text style={[styles.statValue, styles.expenses, isSmallScreen && styles.smallStatValue]}>
                -${expenses.toLocaleString()}
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
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