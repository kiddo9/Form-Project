import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import Axios from 'axios';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    fullName: Yup.string().required('Enter full name'),
     collage: Yup.string().required('select your collage'),
     department: Yup.string().required('select your department'),
     level: Yup.string().required('select your level'),
    password: Yup.string().required('Please enter a secured password')
});

function Signup() {
    const InitialValue ={
        fullName: '',
        collage: '',
        department: '',
        level: '',
        password:''
    }

    const [DefaultCollage, setDefaultCollage] = useState(false);

    const Redirect = useNavigate();

      const HandleSignup = () => {
        // await Axios.post('http://localhost:5000/SignUp', values)
        // .then(response => {
        //     console.log(response.data);
        //     Redirect('/');
            
        // })
        // .catch(error => {
        //     console.error('Error: ', error)
        // })
        // .finally(() => {
        //     setSubmitting(false)
        // });
        Redirect('/');
     };

  return (
    <div className='px-6 text-black sm:w-96 sm:mx-auto font-montserrat'>
            <div className='mt-10'>
                <div className='flex flex-col justify-center w-full gap-2 mb-10'>
                    <img src="https://s3-alpha-sig.figma.com/img/84aa/cb4b/a584592198e2c96858109ae2fd3426d5?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OvwoeQKJ4NlyxGsBYMa~GNOWbPF15BxKo2iWRFVfVpCyp863ty-lkMraBS8BjsyHv8FiZLgiXgpLGFzwtpX1nTLBecP0ZwVfxjlDf7Mz4RolKdREzp9irHqjrwGHmY~VfZqbfxgjTSByhi20lGGqH7979D8NJrcsUrSorPJxP5caoERKJ-xjBuTp3wvc6Bh~YNf8D8K3E0ZFEZur9ll903ne-vuqLVbngObtrqi3QhruOzAc9LZgfQp7XkKRNsflp8FRQxHLmlf92ihdw5ggzsWRKxfkgLBYI0VUS~uLKPu6kygXs4GVYlWvj5V5t09Wh27soBhauHYktxDqBTlniQ__" className='w-20' alt="" />
                    <h1 className='text-2xl font-bold text-left'>Sign up</h1>
                </div>

                <Formik initialValues={InitialValue} validationSchema={SignupSchema} onSubmit={HandleSignup}>
                    {({ isSubmitting, values, setFieldValue }) => (
                        <Form className='flex flex-col gap-5'>
                            <div>
                                <label htmlFor="SchoolId">Full name</label>
                                <Field type="text" name="fullName" className="w-full px-2 py-1 bg-transparent border border-gray-500 rounded-md" />
                                <ErrorMessage name='fullName' className='text-red-400' component='p' />
                            </div>

                            <div>
                                <label htmlFor="password">Collage</label>
                                <select name="collage"
                                    value={values.collage}
                                    onChange={(e) => {
                                        setFieldValue('collage', e.target.value);
                                        setDefaultCollage(e.target.value === 'Collage of Natural and Applied Science'); // Show additional select if Collage of Art is selected
                                    }} className="w-full px-2 py-1 bg-transparent border border-gray-500 rounded-md">
                                    <option value='' disabled selected>Select Collage</option>
                                    <option value="Collage of Natural and Applied Science">Collage of Natural and Applied Science</option>
                                </select>
                                <ErrorMessage name='collage' className='text-red-400' component='p' />
                            
                            </div>

                            {DefaultCollage && (
                                <div>
                                <label htmlFor="password">Department</label>
                                <select name="department" onChange={(e) => {
                                        setFieldValue('department', e.target.value);}} id="" className="w-full px-2 py-1 bg-transparent border border-gray-500 rounded-md">
                                    <option value="" disabled selected>select Department</option>
                                    <option value="Computer science and IT">Computer science and IT</option>
                                    <option value="Cyber Security">Cyber Security</option>
                                    <option value="Software Enginerring">Software Enginerring</option>
                                    <option value="Micro biology">Micro biology</option>
                                    <option value="Chemistry">Chemistry</option>
                                </select>
                                <ErrorMessage name='department' className='text-red-400' component='p' />
                                </div>
                            )}

<div>
                                <label htmlFor="password">level</label>
                                <select name="level" onChange={(e) => {
                                        setFieldValue('level', e.target.value);}} id="" className="w-full px-2 py-1 bg-transparent border border-gray-500 rounded-md">
                                    <option value='' disabled selected>Level</option>
                                    <option value="100">100 level</option>
                                    <option value="200">200 level</option>
                                    <option value="300">300 level</option>
                                    <option value="400">400 level</option>
                                    <option value="500">500 level</option>
                                </select>
                                <ErrorMessage name='level' className='text-red-400' component='p' />
                                </div>

                                <div>
                                <label htmlFor="password">Password</label>
                                <div  className="flex w-full py-1 bg-transparent border border-gray-500 rounded-md">
                                <Field type="password" name="password" className="px-2 bg-transparent outline-none w-96" />
                                <img src="Vector.png"className='w-4 mr-4' alt="" />
                                </div>
                                <ErrorMessage name='password' className='text-red-400'  component='div' />
                            </div>

                            <button type='submit' className='bg-[#011EB2] text-white py-2' disabled={isSubmitting}>REGISTER</button>
                        </Form>
                    )}
                </Formik>
                <hr />
                <Link to='/'><p className='mt-6 text-center text-gray-500'>LOG IN</p></Link>
            </div>
        </div>
  )
}

export default Signup
