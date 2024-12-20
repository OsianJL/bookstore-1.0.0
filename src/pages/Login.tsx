import { useState } from "react";
import ButtonForm from "../components/ButtonForm";



function LogIn() {

const [formValues, setFormValues] = useState({
  email: '',
  password: ''
})

function handleFormChange(event:React.ChangeEvent<HTMLInputElement>){
  const { value, name } = event.target

  setFormValues({...formValues, [name]: value})
}

  return (
    <>
      <h1 className="mt-10 text-3xl mb-3 font-roboto">Log In</h1>
      <form className="bg-white rounded p-5 flex flex-col gap-8 border-3 border-slate">
        <label className="flex justify-between items-center">
          Email:
          <div className="relative">
            <input
              className="outline-none ring-2 focus:ring-violet-300
              focus:invalid:ring-red-400 invalid:ring-red-400 border-2 rounded px-4 py-2"
              type="email"
              value={formValues.email}
              onChange={handleFormChange} 
              name="email"           
            />
            <span className="hidden text-red-500 text-xs absolute top-full left-0">
              Campo requerido
            </span>
          </div>
        </label>
        <label className="flex justify-between">
          Password:
          <div className="relative">
            <input
              className="outline-none ring-2 focus:ring-violet-300
            focus:invalid:ring-red-400 invalid:ring-red-400 border-2 rounded px-4 py-2"
              type="text"
              value={formValues.password}
              onChange={handleFormChange}
              name="password"
            />
            <span className=" hidden text-red-500 text-xs absolute top-full left-0">
              Campo requerido
            </span>
          </div>
        </label>
        <pre>
          {JSON.stringify(formValues)}
        </pre>
        <ButtonForm className="border-4 border-slate-300">Log In</ButtonForm>
      </form>
    </>
  );
}

export default LogIn;
