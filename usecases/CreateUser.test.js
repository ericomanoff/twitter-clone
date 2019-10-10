const CreateUser = require('./CreateUser')
const createUserRequest = require('./createUserRequest')

describe('CreateUser', ()=> {

    beforeAll(() => {
        useCase = new CreateUser();
      });


    test('can create a user', () => {
        request = createUserRequest();
        request.username = 'username'
        request.password = 'password'
        request.about = 'about'
        const user = useCase.createUser(request);

        expect(user.username).toBe('username')
    })

    test('created user is regestered', () => {


        expect(false).toBe(true)
    })

})