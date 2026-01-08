import Header from "./components/Header";
import TravelList from "./components/TravelList";
import dummyTravel from './travel-data';

export default function App() {
    const travelComponent = dummyTravel.map(element =>
        <TravelList
            key={element.id}
            image={{ src: element.img.src, alt: element.img.alt }}
            // title={element.title}
            // country={element.country}
            // googleMapsLink={element.googleMapsLink}
            // dates={element.dates}
            description={element.text}
            {...element}
        />
    )
    return (
        <>
            <Header />
            <main className="container">
                {travelComponent}
            </main>
        </>
    )
}