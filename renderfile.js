const fs = require('fs');
const {createUser} = require('./faker')
// Function to generate SQL insert statements for an array of users
console.time('generateInsertStatements')
function generateInsertStatements(users) {
    let sqlStatements = '';
    sqlStatements += `INSERT INTO users (id, manager_id, azure_id, slack_id, role, type, name, address, \`group\`, company_phone_number, department, position, area_code, office_name)  VALUES `;
    // Iterate over each user and generate insert statement
    users.forEach(user => {
        const values = Object.values(user).map(value => {
            // If value is a string, escape single quotes
            if (typeof value === 'string') {
                return "'" + value.replace(/'/g, "''") + "'";
            }
            return value;
        }).join(', ');
       sqlStatements += `(${values}) , `
         
    });

    return sqlStatements + ';';
}
console.timeEnd("generateInsertStatements");
// Function to write SQL insert statements to a file
function writeInsertStatementsToFile(insertStatements, fileName) {
    fs.writeFileSync(fileName, insertStatements);
    console.log(`SQL insert statements have been written to ${fileName}`);
}

// Example usage
const insertStatements = generateInsertStatements(createUser()); // Generate SQL insert statements
writeInsertStatementsToFile(insertStatements, 'insert_users.sql'); // Write insert statement
