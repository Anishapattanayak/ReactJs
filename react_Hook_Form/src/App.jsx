import React from 'react'
import { useForm} from "react-hook-form"
import './app.css'
//react-hook-form website

const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data){
    //API call ko simulate karte hai
    await new Promise((resolve) => setTimeout(resolve,5000));
    console.log("submitting the form", data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name:</label>
        <input className={errors.firstName ?'input-error':""}
        {...register('firstName', { 
          required: true,
          minLength:{value:3, message:"min length atleast 3"},
           maxLength: 20
            })} />
            {/* handle error */}
            {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
      </div>
      <br />
      <div>
        <label>Middle Name:</label>
        <input {...register('middleName')} />
      </div>
      <br />
      <div>
        <label>Last Name:</label>
        <input {...register('lastName')} />
      </div>
      <input type="submit" disabled={isSubmitting} value={isSubmitting ? "Submitting" :"submit"} />
    </form>
  )
}

export default App
