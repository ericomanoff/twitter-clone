const CreateUser = require('./CreateUser')
const createUserRequest = require('./createUserRequest')
Context = require('./Context')
const MemoryRepository = require('./MemoryRepository')
describe('CreateUser', ()=> {

    let user

    beforeAll(() => {
        useCase = new CreateUser();
        request = createUserRequest();
        request.username = 'username'
        request.password = 'password'
        request.about = 'about'
        Context.repository = new MemoryRepository()
        user = useCase.createUser(request);
      });


    test('can create a user', () => {
        expect(user.username).toBe('username')
        expect(user.password).toBe('password')
        expect(user.about).toBe('about')
    })

    test('created user is regestered', () => {
        userInstance = Context.repository.getUser('username')
        expect(userInstance).toEqual(user)
    })

})