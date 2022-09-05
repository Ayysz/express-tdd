const chai = require('chai');
const request = require('supertest');
const serve = require('../../app');
const server = 'http://localhost:8080'
// membuat constanta expect dari chai
const { expect } = chai;

// membuat kondisi yang diingkan
const shouldNoRestockProduct = {
    id: 1,
    name: 'Guitar',
    price: 120,
    stock: 20,
    minStock: 10,
    createdAt: '2022-09-05T03:18:54.000Z',
    updatedAt: '2022-09-05T03:18:54.000Z',
    shouldRestock: 'no',
};

const shouldRestockProduct = {
    id: 2,
    name: 'Piano',
    price: 230,
    stock: 1,
    minStock: 2,
    createdAt: '2022-09-05T03:18:54.000Z',
    updatedAt: '2022-09-05T03:18:54.000Z',
    shouldRestock: 'yes',
};

const shouldShortlyStockProduct = {
    id: 3,
    name: 'Flute',
    price: 80,
    stock: 13,
    minStock: 13,
    createdAt: '2022-09-05T03:18:54.000Z',
    updatedAt: '2022-09-05T03:18:54.000Z',
    shouldRestock: 'shortly',
};


// membuat unit test dengan chai 
describe('Test mengambil data product', async () => {
    it('Menampilkan semua data product', async () => {
        const { body, status } = await request(server).get('/products');
        const { data } = body;
        expect(status).to.equal(200);
        expect(data).to.deep.include(shouldNoRestockProduct);
        expect(data).to.deep.include(shouldRestockProduct);
        expect(data).to.deep.include(shouldShortlyStockProduct);
    });
});
