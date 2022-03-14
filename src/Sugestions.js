export default function Sugestions() {
    const sugestionsObjects = [
        { userImg: "img/bad.vibes.memes.svg", user: "bad.vibes.memes", newOrFollower: "Segue você" },
        { userImg: "img/chibirdart.svg", user: "chibirdart", newOrFollower: "Segue você" },
        { userImg: "img/razoesparaacreditar.svg", user: "razoesparaacreditar", newOrFollower: "Novo no Instagram" },
        { userImg: "img/adorable_animals.svg", user: "adorable_animals", newOrFollower: "Segue você" },
        { userImg: "img/smallcutecats.svg", user: "smallcutecats", newOrFollower: "Segue você" },
    ];

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestionsObjects.map(
                element => {
                    return (
                        <div class="sugestao">
                            <div class="usuario">
                                <img src={element.userImg} />
                                <div class="texto">
                                    <div class="nome">{element.user}</div>
                                    <div class="razao">{element.newOrFollower}</div>
                                </div>
                            </div>

                            <div class="seguir">Seguir</div>
                        </div>
                    );
                }
            )}
        </div>
    );
}