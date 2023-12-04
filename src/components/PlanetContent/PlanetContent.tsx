import {IPlanet} from "../../models/planet.model";

interface IPlanetContent {
    planet: IPlanet,
    contentStructure: string[]
}
export const PlanetContent = ({planet, contentStructure}:IPlanetContent) => {
    return (
        planet && (
            <ul>
                {contentStructure.map((item, key) => {
                    const planetKey = (item as keyof typeof planet);
                    return (
                        <li key={key} className="flex justify-between">
                            <span className="capitalize">{item}</span>
                            <span>{planet[planetKey]}</span>
                        </li>
                    )
                })}
            </ul>
        )
    )
}