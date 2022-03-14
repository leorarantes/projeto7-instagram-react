export default function User(props) {
    return (
        <div class="usuario">
            <img src={props.userImg} />
            <div class="texto">
                <strong>{props.user}</strong>
                {props.name}
            </div>
        </div>
    );
}