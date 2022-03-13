import Actes from "./Actes";

export default function Feed() {
    const postsObjects = [
        { userImg: "img/meowed.svg", user: "meowed", ContentImg: "img/gato-telefone.svg", likes: { userImgThatLiked: "img/respondeai.svg", userThatLiked: "respondeai", numberOfLikes: "outras 101.523 pessoas" } },
        { userImg: "img/barked.svg", user: "barked", ContentImg: "img/dog.svg", likes: { userImgThatLiked: "img/adorable_animals.svg", userThatLiked: "adorable_animals", numberOfLikes: "outras 99.159 pessoas" } },
    ];

    return (
        <div class="posts">
            {postsObjects.map(
                element => {
                    return (
                        <div class="post">
                            <div class="topo">
                                <div class="usuario">
                                    <img src={element.userImg} />
                                    {element.user}
                                </div>
                                <div class="acoes">
                                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                                </div>
                            </div>

                            <div class="conteudo">
                                <img src={element.ContentImg} />
                            </div>
                            <Actes userImgThatLiked={element.likes.userImgThatLiked} userThatLiked={element.likes.userThatLiked} numberOfLikes={element.likes.numberOfLikes} />
                        </div>
                    );
                }
            )}
        </div>
    );
}