import Header from "./components/Header";
import TravelList from "./components/TravelList";

export default function App() {
    return (
        <>
            <Header />
            <main className="container">
                <TravelList />
            </main>
        </>
    )
}