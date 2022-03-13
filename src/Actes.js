export default function Actes(props) {
    return (
        <div class="fundo">
            <div class="acoes">
                <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src={props.userImgThatLiked} />
                <div class="texto">
                    Curtido por <strong>{props.userThatLiked}</strong> e <strong>{props.numberOfLikes}</strong>
                </div>
            </div>
        </div>
    );
}