import React from 'react'
import {StyleSheet, Text, Button, TextInput, View} from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({onTermChange, term, onTermSubmit}) => {
    return (
        <View style={styles.searchBar}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle} 
                onChangeText={onTermChange} 
                placeholder='search' 
                value={term}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: '#F0EEEE',
        borderRadius: 5,
        height: 50,
        marginHorizontal: 15,
        marginVertical: 15,
        flexDirection: 'row',
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    },
    iconStyle: {
        alignSelf: 'center',
        fontSize: 35,
        marginHorizontal: 15,
    }
})

export default SearchBar;