import faker from 'faker';

class FakeData {
    getProduct() {
        return {
            name: faker.name.firstName(),
            description: faker.lorem.paragraphs(),
            developer: faker.company.companyName(),
            date: faker.datatype.number(),
            price: faker.datatype.number() + '$',
            thumbnail: faker.random.image(),
            id: faker.datatype.uuid(),
            number: faker.datatype.number()
        };
    }

    getProducts(amount = 12) {
        console.log(this.getProduct());
        return new Array(amount).fill(this.getProduct());

    }
}

export default new FakeData;
