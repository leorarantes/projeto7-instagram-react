import Navbarbox from "./Navbarbox";

export default function Navbar() {
    const iconsList = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"];

    return (
        <div>
            <div class="navbar">
                <div class="container">
                    <Navbarbox class="logo" iconname="logo-instagram" img="img/logo.png" />
                    <Navbarbox class="logo-mobile" iconname="logo-instagram" />
                    <Navbarbox class="instagram-mobile" img="img/logo.png" />
                    <Navbarbox class="pesquisa" />
                    <Navbarbox class="icones" iconsnames={iconsList} />
                    <Navbarbox class="icones-mobile" iconname="paper-plane-outline" />
                </div>
            </div>
        </div>
    );
}