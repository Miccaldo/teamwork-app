import {useAppDispatch, useAppSelector} from "../../hooks";
import {useEffect, useState} from "react";
import {fetchPlanet} from "../../slices/planets.slice";
import {useParams} from "react-router-dom";

export const useFetchPlanet = () => {
    const dispatch = useAppDispatch();
    let { planetId } = useParams();
    const { planet, status } = useAppSelector(state => state.planet);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        planetId && dispatch(fetchPlanet(planetId));
    }, [planetId]);

    useEffect(() => {
        if(status === 'loading'){
            setIsLoading(true);
        }else{
            setIsLoading(false);
        }
    }, [status]);

    return {
        planet,
        isLoading
    }
}