import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
        <header className="flex bg-black p-4 text-white justify-around">
            <h1>MYMOVIE</h1>
            <Navbar/>
        </header>
     );
}

export default Header ;