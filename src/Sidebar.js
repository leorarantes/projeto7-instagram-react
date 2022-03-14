import User from "./User";
import Sugestions from "./Sugestions";

export default function Sidebar() {
    return (
        <div class="sidebar">
            <User userImg="img/catanacomics.svg" user="catanacomics" name="Catana" />
            <Sugestions />

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}