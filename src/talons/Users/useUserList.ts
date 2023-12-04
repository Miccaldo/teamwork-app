import {useNavigate} from "react-router-dom";
import {useCallback} from "react";
export const useUserList = () => {
    const navigate = useNavigate();

    const getPlanetId = (planetLink:string) => {
        const linkParts = planetLink.split('/');
        const planetId = linkParts[linkParts.length - 2];
        return planetId ? planetId : '';
    }

    const handleClick = useCallback((planetLink:string) => {
        navigate(`planets/${getPlanetId(planetLink)}`)
    }, []);

    return {
        handleClick
    }
}