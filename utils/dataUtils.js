const faker=require('faker');

export default accountDetails={
    firstName:faker.name.firstName(),
    lastName:faker.name.lastName(),
    email:faker.internet.email(),
};

