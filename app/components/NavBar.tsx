import LoginModal from "./loginModal";

function NavBar() {



  return (
    <nav className="bg-white p-2 flex justify-between">
        <a href="/" className="font-bold text-gray-700 text-2xl">
          OpenTable{" "}
        </a>
      <div>
        <div className="flex">
          <LoginModal isSignin={true}/>
          <LoginModal isSignin={false}/>
        </div>
      </div>
    </nav>
  );
}

export default NavBar