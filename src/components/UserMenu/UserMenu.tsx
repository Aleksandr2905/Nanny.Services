import sprite from "../../assets/icons/sprite.svg"

export const UserMenu = () => {
    const name = "Ilona"
    return (
        <div>
            <svg width={40} height={40}>
                <use href={`${sprite}#icon-user`} />
            </svg>
            <p>{name}</p>
            <button type="button">Log out</button>
        </div>
    )
}
