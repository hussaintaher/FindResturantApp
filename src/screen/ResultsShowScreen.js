import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Button, Text, FlatList, Image} from 'react-native';
import yelp from '../api/yelp'

const ResultsShowScreen = ({route, navigation}) => {
    // we will store the data here
    const [result, setResult] = useState(null)
    // we get the id of the business
    const {id} = route.params
    // Fetch data depending on the id of the business
    const getResult = async (id) => {
        const myResult = await yelp.get(`/${id}`)
        setResult(myResult.data)
    }
    // Fetch the data once
    useEffect(() => {
        getResult(id)
    }, [])

    if (!result) {
        return null
    }
    // for Test
    console.log(id)
    console.log(result)
    return (
        <View>
            <Text style={styles.name}>{result.name}</Text>
            <View style={{alignItems: 'center'}}>
                <FlatList
                    data={result.photos}
                    keyExtractor={photo => photo}
                    renderItem={({item})=> {
                        return (
                            <Image 
                                style={styles.image}
                                source={{uri:item}}
                            />
                        )
                    }}
                />
            </View>
        </View>
    )
}   

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 200,
        marginVertical: 5,
    }, 
    name: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 8,
    }
})

export default ResultsShowScreen