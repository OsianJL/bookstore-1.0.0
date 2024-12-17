function LogIn() {
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
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
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
              pattern="^.{4,8}$"
            />
            <span className=" hidden text-red-500 text-xs absolute top-full left-0">
              Campo requerido
            </span>
          </div>
        </label>
        <button className="rounded bg-green-300 py-1 w-max px-2 mx-auto">Log In</button>
      </form>
    </>
  );
}

export default LogIn;
