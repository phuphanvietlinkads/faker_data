const {faker}  = require("@faker-js/faker")

function createRanbdomUser(){
    return {
        id:faker.string.uuid(),
        manager_id: faker.string.uuid(),
        azure_id: faker.string.uuid(),
        slack_id: faker.string.uuid(),
        role: "ADMIN",
        type:"REMOTE",
        name: faker.internet.userName(),
        address: faker.location.streetAddress(),
        group:"MEDIBA",
        company_phone_number: "81-3-6825-0189",
        department: "IT",
        position: "STAFF",
        area_code: "76",
        office_name:"Vietlink"
    }
}

function createUser() {
     const user = faker.helpers.multiple(createRanbdomUser, {
        count: 1000,
      });
      return user;
      
}

module.exports = {
    createUser,
}