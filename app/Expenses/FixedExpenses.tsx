import { View, Text, StyleSheet, TouchableOpacity, FlatList, Appearance, Platform, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DummyExpenses } from '../DummyData/DummyExpenses';
import CustomFAB from '../../assets/buttons/CustomFAB';
import { AddExpenseDialog } from '../Dialogs/AddFixedExpensesDialog';
import Animated, { LinearTransition } from 'react-native-reanimated'


const dummyExpenses = DummyExpenses
interface Expense {
    id: string;
    title: string;
    amount: number;
    date: string;
    category: string;
    icon: string;
}

export default function FIXEDEXPENSES() {
    const [expenses, setExpenses] = useState(dummyExpenses);
    const [isDialogVisible, setIsDialogVisible] = useState(false);
    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;



    const handleAddExpense = (expense: {
        title: string;
        amount: number;
        category: string;
        icon?: string;
    }) => {
        // Here you would typically add the expense to your data
        const newExpense = {
            id: (expenses.length + 1).toString(),
            ...expense,
            date: new Date().toLocaleDateString(),
            icon: "cash" // Default icon or based on category
        };

        // Update your expenses list here
        setExpenses(prevExpenses => [newExpense, ...prevExpenses])
        console.log('New expense:', newExpense);


        // dummyExpenses.push(newExpense);
        console.log('Dummy expenses:', dummyExpenses);
    };


    useEffect(() => {
    const expenses = {id: '14', title: 'Grocery Shopping', amount: 89.99, date: '2024-03-01', category: 'Food', icon: 'cart',}
            handleAddExpense(expenses)

    }
    , [])
    console.log('Dummy expenses:', dummyExpenses);

    const renderExpensesItem = ({ item }: { item: any }) => (
        <View style={styles.expenseItem}>
            <View style={styles.expenseIcon}>
                <MaterialCommunityIcons name={item.icon} size={24} color="#666" />
            </View>
            <View style={styles.expenseDetails}>
                <Text style={styles.expenseTitle}>{item.title}</Text>
                <Text style={styles.expenseCategory}>{item.category}</Text>
            </View>
            <View style={styles.expenseAmount}>
                <Text style={styles.amount}>-${item.amount}</Text>
                <Text style={styles.date}>{item.date}</Text>
            </View>
        </View>
    )
    return (
        <Container style={[styles.container]}>
            <View style={styles.header}>
                <Text style={styles.title}>Fixed Expenses</Text>
                <MaterialCommunityIcons name="chevron-right" size={24} color="#666" />
            </View>
            <Animated.FlatList
                data={expenses}
                renderItem={renderExpensesItem}
                keyExtractor={(item: { id: any; }) => item.id}
                contentContainerStyle={{ flexGrow: 1 }}
                scrollEnabled={true}
                showsVerticalScrollIndicator={true}
                itemLayoutAnimation={LinearTransition}
                keyboardDismissMode={'on-drag'}
            />
            <CustomFAB onPress={() => setIsDialogVisible(true)} />
            <AddExpenseDialog
                visible={isDialogVisible}
                onClose={() => setIsDialogVisible(false)}
                onAdd={handleAddExpense}
            />
        </Container>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 16,
        marginVertical: 8,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    expenseItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    expenseIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    expenseDetails: {
        flex: 1,
    },
    expenseTitle: {
        fontSize: 16,
        color: '#333',
        marginBottom: 4,
    },
    expenseCategory: {
        fontSize: 14,
        color: '#666',
    },
    expenseAmount: {
        alignItems: 'flex-end',
    },
    amount: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FF5252',
        marginBottom: 4,
    },
    date: {
        fontSize: 12,
        color: '#999',
    },
    footerComp: {
        marginHorizontal: 'auto',
    },
    footer: {
        paddingVertical: 20,
        alignItems: 'center',
    },
})