import {Popup} from "../../components/Popup/Popup";
import {useFetchPlanet} from "../../talons/Planets/useFetchPlanet";
import {PlanetContent} from "../../components/PlanetContent/PlanetContent";
import {Loading} from "../../components/Loading/Loading";
import {usePlanet} from "../../talons/Planets/usePlanet";
const Planet = () => {
    const { planet, isLoading } = useFetchPlanet();
    const {handleClosePopup} = usePlanet();
    const contentStructure = ['diameter', 'climate', 'population'];

    if(!planet || isLoading) return <Loading isLoading={true} />;

    return (
        <>
            <Popup name={planet.name} onClose={handleClosePopup}>
                <PlanetContent planet={planet} contentStructure={contentStructure}/>
            </Popup>
            <div className="fixed w-screen h-full left-0 top-0 bg-gray-500 opacity-30"/>
        </>

    )
}

export default Planet;