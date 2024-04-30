import logo from "../src/assets/IsoLogotipoBosco.png"
import search from "../src/assets/icon/search.png"
import profile from "../src/assets/icon/profile.png"

function Navbar() {
    return (
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a href="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <img src={logo} className="w-100 h-10 mr-2" alt="Logo" />
            </a>
            <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <a href="/" class="text-base mr-5 hover:text-gray-900">Empresas</a>
                <a href="/" class="text-base mr-5 hover:text-gray-900">Contacto</a>
                <a href="/" class="text-base mr-5 hover:text-gray-900">sign Up</a>
                <a href="/" class="text-base mr-5 hover:text-gray-900">Log in</a>
            </nav>
            <div className='flex mt-4 md:mt-0'>
                
                <img alt='icon' src={profile} />
            </div>
        </div>
    );
}
export default Navbar;