export default function TravelList({ image, title, country, googleMapsLink, dates, description }) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img
                    className="main-image"
                    src={image.src}
                    alt={image.alt}
                />
            </div>
            <div className="info-container">
                <img
                    className="marker"
                    src="../assets/marker.png"
                    alt="map marker icon"
                />
                <span className="country">{country}</span>
                <a href={googleMapsLink}>View on Google Maps</a>
                <h2 className="entry-title">{title}</h2>
                <p className="trip-dates">{dates}</p>
                <p className="entry-text">{description}</p>
            </div>

        </article>
    )
}