
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='flex flex-wrap w-80 bg-white h-96 shadow-md'>
        <form className=" flex flex-wrap justify-center items-center content-center">
          <h1 className="text-center w-80">Login</h1>
          <label htmlFor="email" className="w-72 h-11 flex flex-col">
            Email
            <input className="shadow-sm w-72 h-8" type='text' name="email" id="email"/>
          </label>
          <label htmlFor="password" className="w-72 h-11 flex flex-col">
            Senha
            <input className="shadow-sm w-72 h-8" type='text' name="password" id="password"/>
          </label>
          <button>Entrar</button>
        </form>
      </div>
    </main>
  )
}
