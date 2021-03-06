import cart from './cart'
import catalog from './catalog'
import filterComp from './filter'

let app = new Vue ({
    el: '#app',
    data: {

    },
    methods: {
        getJson (url) {
            return fetch (url)
            .then (result => result.json())
            .catch (err => {
                console.log (err)
            })
        },
        postJson (url, data) {
            return fetch (url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify (data)
            })
            .then (result => result.json())
            .catch (err => {
                console.log (err)
            })
        },
        putJson (url, data) {
            return fetch (url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify (data)
            })
            .then (result => result.json())
            .catch (err => {
                console.log (err)
            })
        },
        deleteJson (url) {
            return fetch (url, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then (result => result.json())
            .catch (err => {
                console.log (err)
            })
        },
        addProduct (product) {
            console.log (`Куплен ${product.product_name}`)
        }
    },
    mounted () {
        
    },
    components: {
        'catalog': catalog,
        'filter-comp': filterComp,
        'cart': cart
    }
})

export default app