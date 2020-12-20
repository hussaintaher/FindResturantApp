import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 6VqYThJwjEYNdukMyv00kRuQYWBoxIrg7c99K5VthhtUmShBo2pkUBFhl5LnoTp-YDxLWRg3k9CdxyOm_Kni8r8V4tICTK6_5Z-luPx5rrS1sQg0U-GGi5az54DGX3Yx'
    }
})

// Authorizaion starts with capital