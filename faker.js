const {faker}  = require("@faker-js/faker")

function createRanbdomUser(){
    return {
        name: faker.person.fullName(),
        age: faker.number.int(1,50),
        email: faker.internet.email(),
        address: faker.location.streetAddress()
    }
}

function createStore() {
    return {
        name: faker.company.name(),
        address: faker.location.streetAddress(),
        phoneNumner: faker.phone.number(),
        mst: faker.number.int(),
        type: "person"
    }
}


function createProduct(){
    return {
        storeId  :  faker.number.int({min:1,max:1000}),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        disocunt: 0.5,

    }
}
function renderSQl() {
     const user = faker.helpers.multiple(createRanbdomUser, {
        count: 1000,
      });
    const store = faker.helpers.multiple(createStore, {
        count: 1000
    })
    const product = faker.helpers.multiple(createProduct, {
        count : 1000
    })
    return {
        user,store,product
    }
      
}

module.exports = {
    createRanbdomUser,
    createProduct,
    createStore,
    renderSQl
}