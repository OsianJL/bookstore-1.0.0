import { useForm } from 'react-hook-form'
import ButtonForm from '../components/ButtonForm';

interface FormData {
  name: string; 
  surname: string; 
  email: string; 
}

function Register() {

 const { register, handleSubmit, formState:{ errors, isValid} } = useForm<FormData>();
// const { errors } = formState; 

console.log(errors.name?.message)
console.log(errors.surname?.message)

//  const nombre = register('nombre')
//  const apellido = register('apellido')
//  const email = register('email')

function onSubmit(data: FormData){
console.log(data);

}


  return (
    <>
      <h1 className='text-3xl'>Registrate</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded my-12 flex flex-col gap-8 max-w-xl">
        <label className="flex justify-between items-center">
          Nombre:
          <div className="relative">
            <input
              type="text"
              className="peer outline-none ring-2 ring-transparent focus:ring-violet-300 focus:invalid:ring-red-400 invalid:ring-red-400 border-2 rounded px-4 py-2"
              {...register('name', {
                required:'campo obligatorio',
                minLength: {value: 4, message: 'Minimo 4 caracteres'},
                maxLength: {value: 12, message: 'Maximo 12 caracteres'}
              })}
            />
            {errors.name && <span className="text-red-400 absolute top-full left-0 text-xs">
              {errors.name?.message}
            </span>}
          </div>
        </label>
        <label className="flex justify-between items-center">
          Apellidos:
          <div className="relative">
            <input
              type="text"
              className="peer outline-none ring-2 ring-transparent focus:ring-violet-300 focus:invalid:ring-red-400 invalid:ring-red-400 border-2 rounded px-4 py-2"
              {...register('surname', {
                required: 'campo obligatorio',
                minLength: {value: 4, message: 'Minimo 4 caracteres'},
                maxLength: {value: 12, message: 'Maximo 12 caracteres'}
              })}
              
            />
           {errors.surname && <span className="text-red-400 absolute top-full left-0 text-xs">
              {errors.surname?.message}
            </span>}
          </div>
        </label>
        <label className="flex justify-between items-center">
          Email:
          <div className="relative">
            <input
              type="email"
              className="peer outline-none ring-2 ring-transparent focus:ring-violet-300 border-2 rounded px-4 py-2"
              {...register('email', {
                required: 'campo obligatorio',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Email no valido'
                }
              })}
              
            />
           {errors.email && <span className="text-red-400 absolute top-full left-0 text-xs">
              {errors.email?.message}
            </span>}
          </div>
        </label>
        <ButtonForm disabled={!isValid} className='border-2 border-blue-700'>Register</ButtonForm>
      </form>
    </>
  );
}

export default Register;

