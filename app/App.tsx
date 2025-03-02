import { View, StyleSheet, ScrollView } from "react-native";
import { FinancialWidget } from "./OverviewBudget";
import { MainExpenses } from "./Expenses/MainExpenses";
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from "./_layout";



export default function App() {
  return (
    <NavigationContainer>
     <AppNavigator/>
    </NavigationContainer>
  );
}

