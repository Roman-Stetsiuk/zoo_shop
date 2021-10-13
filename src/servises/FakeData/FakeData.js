class FakeData {
    getProduct() {
        return {
            name: '',
            description: '',
            price: 100,
            thumbnail: ''
        };
    }

    getProducts(amount = 12) {
        return new Array(amount).fill(this.getProduct());
    }
}

export default new FakeData();
