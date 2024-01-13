
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=' border flex flex-wrap w-80 bg-white h-96 shadow-md rounded-lg'>
        <form className=" flex flex-wrap justify-center items-center content-center">
          <h1 className="text-center w-80 mb-12">Login</h1>
          <label htmlFor="email" className="w-72 h-18 flex flex-col mb-6">
            Email
            <input className="shadow-sm border w-72 h-9 mt-2 rounded" type='text' name="email" id="email"/>
          </label>
          <label htmlFor="password" className="w-72 h-18 flex flex-col mb-6">
            Senha
            <input className="shadow-sm border w-72 h-9 mt-2 rounded" type='text' name="password" id="password"/>
          </label>
          <button>Entrar</button>
        </form>
      </div>
    </main>
  )
}
