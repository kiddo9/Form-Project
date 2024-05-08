import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
//import axios from 'axios';
import * as Yup from 'yup';

const LogiSchema = Yup.object().shape({
    SchoolId: Yup.string().required('Enter your School ID'),
    password: Yup.string().required('Enter your Password')
});

function Login() {
    const InitValue = {
        SchoolId: '',
        password: '',
    };

    const history = useNavigate();

    const HandleLogin = () => {
        //  axios.post('http://localhost:5000/loginData', values)
        // .then(response => {
        //     console.log(response.data);
        //     history('/profile');
            
        // })
        // .catch(error => {
        //     console.error('Error: ', error)
        // })
        // .finally(() => {
        //     setSubmitting(false)
        // });
        alert('You are Logged in. Note: No server or database was used')
        history('/profile');
    };

    return (
        <div className='px-6 text-black'>
            <div className='mt-24 sm:w-96 sm:mx-auto'>
                <div className='flex flex-col justify-center w-full gap-4'>
                    <img src="https://s3-alpha-sig.figma.com/img/84aa/cb4b/a584592198e2c96858109ae2fd3426d5?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OvwoeQKJ4NlyxGsBYMa~GNOWbPF15BxKo2iWRFVfVpCyp863ty-lkMraBS8BjsyHv8FiZLgiXgpLGFzwtpX1nTLBecP0ZwVfxjlDf7Mz4RolKdREzp9irHqjrwGHmY~VfZqbfxgjTSByhi20lGGqH7979D8NJrcsUrSorPJxP5caoERKJ-xjBuTp3wvc6Bh~YNf8D8K3E0ZFEZur9ll903ne-vuqLVbngObtrqi3QhruOzAc9LZgfQp7XkKRNsflp8FRQxHLmlf92ihdw5ggzsWRKxfkgLBYI0VUS~uLKPu6kygXs4GVYlWvj5V5t09Wh27soBhauHYktxDqBTlniQ__" className='w-20 mx-auto' alt="" />
                    <h1 className='text-2xl font-bold text-center font-montserrat'>Log In</h1>
                </div>

                <Formik initialValues={InitValue} validationSchema={LogiSchema} onSubmit={HandleLogin}>
                    {({ isSubmitting }) => (
                        <Form className='flex flex-col gap-5'>
                            <div>
                                <label htmlFor="SchoolId" className='font-montserrat'>School Id</label>
                                <Field type="text" name="SchoolId" className="w-full px-2 py-1 bg-transparent border border-gray-500 rounded-md" />
                                <ErrorMessage name='SchoolId' className='text-red-400' component='p' />
                            </div>

                            <div>
                                <label htmlFor="password" className='font-montserrat'>Password</label>
                                <div  className="flex w-full py-1 bg-transparent border border-gray-500 rounded-md">
                                <Field type="password" name="password" className="px-2 bg-transparent outline-none w-96" />
                                <img src="Vector.png"className='w-4 mr-4' alt="" />
                                </div>
                                <ErrorMessage name='password' className='text-red-400'  component='div' />
                            </div>

                            <button type='submit' className='bg-[#011EB2] text-white py-2 font-montserrat' disabled={isSubmitting}>LOG IN</button>
                        </Form>
                    )}
                </Formik>
                <hr/>
                <Link to='/signup'><p className='mt-6 text-center text-gray-500 font-montserrat'>REGISTER</p></Link>
            </div>
        </div>
    );
}

export default Login;
