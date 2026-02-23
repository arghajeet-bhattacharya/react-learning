import starFilled from "../assets/star-filled.png"
import starEmpty from "../assets/star-empty.png"

export default function Favorite({isFavorite, handleClick}) {
    return <button
        onClick={handleClick}
        aria-pressed={isFavorite}
        aria-label={(isFavorite ? 'Remove' : 'Add') + ' from fav'}
        className="favorite-button"
    >
        <img
            src={isFavorite ? starFilled : starEmpty}
            alt={(isFavorite ? 'filled' : 'empty') + ' star icon'}
            className="favorite"
        />
    </button>
}