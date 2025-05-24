import Header from "./components/Header";
import Entry from "./components/Entry";
import places from "./assets/data"

function App() {
    return (
        <>
        <Header />
        {places.map(place => <Entry key={place.id} {...place} />)}
        </>
 
    );
}

export default App ;