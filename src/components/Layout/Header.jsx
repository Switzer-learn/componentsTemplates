const Header = () =>{
    return (
        <div className="flex gap-4 py-2 px-3 border justify-between text-gray-800">
      <div className="flex align-middle justify-start gap-2">
        <img src="#" className="w-10 h-10 border rounded-full" />
        <span className="text-3xl">Logo</span>
      </div>
      <div className="flex justify-center align-middle gap-6">
        <button className="px-3 py-2 hover:text-xl">Home</button>
        <button className="px-3 py-2 hover:text-xl">About</button>
        <button className="px-3 py-2 hover:text-xl">Contact</button>
      </div>
      <div className="gap-2 align-middle flex justify-end">
        <button className="px-3 py-2 hover:text-xl">
          Login
        </button>
        <button className="px-3 py-2 rounded-full bg-gray-500 hover:text-xl hover:bg-gray-600 text-white">
          Register
        </button>
      </div>
    </div>
    )
}

export default Header;