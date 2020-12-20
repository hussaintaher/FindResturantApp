import React, { useState } from 'react'
import {StyleSheet, Text, Button, TextInput, View, ImageErrorEventData, ScrollView, FlatList} from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultList from '../components/ResultList'

const SearchScreen = ({navigation}) => {
    const [term, setTerm] = useState('')
    const [searchApi, result, errorMessage] = useResults()
    // we extract every thing are related to yelp api 
    // and paste it to useResult file, now we can use it every where 

    // Test the data
    console.log(result) 
    // Filter Results By Price 
    const filterResultsByPrice = (price) => {
        return result.filter(result => {
            return result.price === price;
        })
    }
     
    return (
        <View style={{backgroundColor: 'white', height: '100%'}}>
            <SearchBar 
                term={term} 
                onTermChange={(val) => setTerm(val)}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultList 
                    title="Cost Effective"
                    results={filterResultsByPrice('$')}
                    navigation={navigation}
                />
                <ResultList 
                    title="Bit Pricier"
                    results={filterResultsByPrice('$$')}
                    navigation={navigation}
                />
                <ResultList 
                    title="Big spender"
                    results={filterResultsByPrice('$$$')}
                    navigation={navigation}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default SearchScreen;