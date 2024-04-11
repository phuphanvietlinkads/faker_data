const mysqlConnect = require("./mysql")
const {renderSQl} = require("./faker")


const { user,product, store} = renderSQl();

mysqlConnect.connect()

let sql = '';
// user.forEach(element => {
//         sql = `insert into users (name,age,email,address) values ("${element.name}",  ${element.age}, "${element.email}", "${element.address}");`
//         mysqlConnect.query(sql)
    
// });



// store.forEach(e => {
//         sql = `insert into store (name,address,phonenUmber,email,mst) values ("${e.name}", "${e.address}" , " ${e.phoneNumner}", ${e.mst}, "${e.type}")`
//         mysqlConnect.query(sql)
// })

product.forEach(e => {
        sql = `insert into product(name,storeId,price,discount) values ("${e.name}",${e.storeId},${e.price},${e.disocunt})`

        mysqlConnect.query(sql)
})