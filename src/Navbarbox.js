export default function Navbarbox(props) {
    switch (props.class) {
        
        case "logo":
            return (
                <div class={props.class} >
                    <ion-icon name={props.iconname}></ion-icon>
                    <div class="separador"></div>
                    <img src={props.img} />
                </div>
        );

        case "logo-mobile":
            return (
                <div class={props.class} >
                    <ion-icon name={props.iconname}></ion-icon>
                </div>
            );

        case "instagram-mobile":
            return (
                <div class={props.class} >
                    <img src={props.img} />
                </div>
            );
        
        case "pesquisa":
            return (
                <div class={props.class} >
                    <input type="text" placeholder="Pesquisar" />
                </div>
            );
        
        case "icones":
            return (
                <div class={props.class} >
                    {props.iconsnames.map(element => { return (<ion-icon name={element}></ion-icon>);})}
                </div>
            );
        
        default:
            return (
                <div class={props.class} >
                    <ion-icon name={props.iconname}></ion-icon>
                </div>
            );
    }
}