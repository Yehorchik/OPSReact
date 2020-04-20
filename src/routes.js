import { LogIn } from './components/Login';
import { SignUp } from './components/Signup';

const routes = [
    {
        key: 'logIn',
        path: '/logIn',
        component: LogIn,
        exact: true
    },
    {
        key: 'signUp',
        path: '/signUp',
        component: SignUp
    }
]

export default routes;