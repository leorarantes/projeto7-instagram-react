export default function Stories() {
    const storiesObjects = [
        {img: "img/9gag.svg", user: "9gag"},
        {img: "img/meowed.svg", user: "meowed"},
        {img: "img/barked.svg", user: "barked"},
        {img: "img/nathanwpylestrangeplanet.svg", user: "nathanwpylestrangeplanet"},
        {img: "img/wawawicomics.svg", user: "wawawicomics"},
        {img: "img/respondeai.svg", user: "respondeai"},
        {img: "img/filomoderna.svg", user: "filomoderna"},
        {img: "img/memeriagourmet.svg", user: "memeriagourmet"}
    ];

    return (
        <div class="stories">
            {storiesObjects.map(
                element => { 
                    return (
                        <div class="story">
                            <div class="imagem">
                                <img src={element.img} />
                            </div>
                            <div class="usuario">
                                {element.user}
                            </div>
                        </div>
                    );
                })
            }
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}