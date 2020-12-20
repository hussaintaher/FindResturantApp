import React, { useState, useEffect } from 'react'
import yelp from '../api/yelp'

export default () => {
    const [result, setResult] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    
    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'New York City'
                }
            })
            setResult(response.data.businesses);
        } catch (e) {
            setErrorMessage('somthing went wrong')
        }
    }
    useEffect(()=> {
        searchApi('pasta')
    }, [])
    // now export every thing we need it in any component, in array
    return [searchApi, result, errorMessage]
}

/*note 1*/
// we want to set intial data when the app first rendered 
// we don't want user to open the app and he doesn't see any data
// 1- SearchApp render first 
// 2- searchApi called immediately 
// 3- make request to Api 
// 4- Get Search Result, call setter 
// 5- Update state causes component to rerender 

/*note 2*/    
// call searchApi when component 
// is first rendered. Bad Code!
//searchApi('pasta');