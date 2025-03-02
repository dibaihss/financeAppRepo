import React from 'react';
import { View, StyleSheet, ScrollView } from "react-native";
import { FinancialWidget } from "./OverviewBudget";
import { MainExpenses } from "./Expenses/MainExpenses";

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <FinancialWidget
            balance={12500}
            income={3200}
            expenses={1800}
            onPress={() => console.log('Widget pressed')}
          />
          <View style={styles.divider} />
          <MainExpenses
            balance={12500}
            income={3200}
            expenses={1800}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  divider: {
    width: 1,
    height: 30,
    backgroundColor: '#ffffff20',
  },
});

export default HomeScreen;