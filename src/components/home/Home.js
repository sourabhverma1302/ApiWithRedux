import axios from 'axios'
import React from 'react'
import {useFormik} from 'formik'

const Home = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      gender: '',
      age: '',
      phoneNumber: '',
    },
    onSubmit: values => {
      console.log("hello",values.name);
      const sendData=async()=>{
        await axios.post(`https://mynewapp-ynzu.onrender.com/addUser`,{
        name:values.name,
        age:values.age,
        gender:values.gender,
        phoneNumber:values.phoneNumber
        })
        .then((res)=>{console.log("added done",res)})
        .catch((err)=>{console.log("added not done",err)})
      }
      sendData();
    },
  });
  return (
    <>
    <h1>Sourabh</h1>
    <form id="sign-in-form" method="post" onSubmit={(e)=>{e.preventDefault();formik.handleSubmit()}}>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" onChange={formik.handleChange} required /><br/><br/>

    <label for="age">Age:</label>
    <input type="text" id="age" name="age" required onChange={formik.handleChange} /><br/><br/>

    <label for="gender">Gender:</label>
    <select id="gender" name="gender" required onChange={formik.handleChange}>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
    </select><br/><br/>

    <label for="phoneNumber">Phone Number:</label>
    <input type="number" id="phoneNumber" name="phoneNumber" required onChange={formik.handleChange} /><br/><br/>

    <input type="submit" value="Sign In" />
    </form>
    </>
  )
}

export default Home