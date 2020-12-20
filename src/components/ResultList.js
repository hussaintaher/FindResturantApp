import React from 'react';
import {StyleSheet, View, Button, Text, FlatList, TouchableOpacity} from 'react-native';
import ResultDetail from './ResultDetail'
// import {withNavigation} from 'react-navigation'
const ResultList = ({title, results, navigation}) => {
    // To hide some element that are not important
    if (!results.length) {
        return null
    }

    return (
        <View style={styles.constainer}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(result) => result.id}
                data={results}
                renderItem={({item})=> {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('showResult', {id: item.id})}>
                            <ResultDetail result={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}   

const styles = StyleSheet.create({
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 15,
    },
    constainer: {
        marginBottom: 10,
    }
})

export default ResultList;