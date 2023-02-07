const supertest = require('supertest');
const app = require('../../app.js');
const { sequelize } = require('../../models/index.js');

// 통합 테스트(Integration Test)를 진행하기에 앞서 Sequelize에 연결된 모든 테이블의 데이터를 삭제합니다.
//  단, NODE_ENV가 test 환경으로 설정되어있는 경우에만 데이터를 삭제합니다.
beforeAll(async () => {
    if (process.env.NODE_ENV === 'test') await sequelize.sync();
    else throw new Error('NODE_ENV가 test 환경으로 설정되어 있지 않습니다.');
});


describe('Layered Architecture Pattern, User Domain Integration Test', () => {
    test('POST /api/users API (registerUser) Integration Test', async () => {
        const requestBodyParams = {
            id: 'id123',
            password: 'Pass123!',
            phone: '012-0123-0123', 
            name: '이름',
            email: 'asdf@asdf.com',
            passwordCheck: 'Pass123!',
            role: 'customer',
            points: 10000
        }

        const response = await supertest(app)
            .post('/api/users/signup')
            .send(requestBodyParams)
            .query({})

        expect(response.status).toEqual(201)
        expect(response.body).toMatchObject({
            result: "success",
            data: {
                userId: 1,
                id: requestBodyParams.id,
                password: expect.anything(),
                phone: requestBodyParams.phone,
                name: requestBodyParams.name,
                email: requestBodyParams.email,
                role: requestBodyParams.role,
                points: requestBodyParams.points,
                createdAt: expect.anything(),
                updatedAt: expect.anything()
            }
        })
    })
})