import AuthModal from "./authModal";

function NavBar() {



  return (
    <nav className="bg-white p-2 flex justify-between">
        <a href="/" className="pl-1 font-bold text-gray-700 text-2xl hover:text-gray-800">
          OpenTable{" "}
        </a>
      <div>
        <div className="flex">
          <AuthModal isSignin={true}/>
          <AuthModal isSignin={false}/>
        </div>
      </div>
    </nav>
  );
}

export default NavBar