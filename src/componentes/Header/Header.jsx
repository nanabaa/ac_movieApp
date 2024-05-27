import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
        <header className="flex bg-black p-4 text-white justify-around">
            <span>Olá, visitante!</span>
            <h1>Bem-vindo ao MovieApp!</h1>
            <Navbar/>
        </header>
     );
}

export default Header ;