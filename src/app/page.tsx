
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className=' border flex flex-wrap w-80 bg-transparent h-96 shadow-md rounded-lg'>
        <form className=" flex flex-wrap justify-center items-center content-center">
          <h1 className="text-slate-700 text-center w-80 mb-9">Login</h1>
          <label htmlFor="email" className="text-slate-700 w-72 h-18 flex flex-col mb-6">
            Email
            <input className="shadow-sm border w-72 h-9 mt-2 rounded" type='text' name="email" id="email"/>
          </label>
          <label htmlFor="password" className="text-slate-700 w-72 h-18 flex flex-col mb-6">
            Senha
            <input className="shadow-sm border w-72 h-9 mt-2 rounded" type='text' name="password" id="password"/>
          </label>
          <button className="bg-indigo-500 rounded text-white w-40 h-8">Entrar</button>
        </form>
      </div>
    </main>
  )
}
