import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DummyExpenses } from '../DummyData/DummyExpenses';

const dummyExpenses = DummyExpenses
// interface Expense {
//     id: string;
//     title: string;
//     amount: number;
//     date: string;
//     category: string;
//     icon: string;
//   }

export default function fixedExpenses() {

    // interface FixedExpensesProps {
    //     expenses: Expense[];
    //     onPress?: () => void;
    //   }

    const renderExpensesItem = ({item}: {item: any}) => (
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
        <TouchableOpacity
            style={[styles.container]}>
            <View style={styles.header}>
                <Text style={styles.title}>Fixed Expenses</Text>
                <MaterialCommunityIcons name="chevron-right" size={24} color="#666" />
            </View>
            <FlatList
                data={dummyExpenses}
                renderItem={renderExpensesItem}
                keyExtractor={item => item.id}
                scrollEnabled={false}>

            </FlatList>
        </TouchableOpacity>
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
})