import {useAppDispatch} from "../../hooks";
import {clearPlanet} from "../../slices/planets.slice";
export const usePlanet = () => {
    const dispatch = useAppDispatch();
    const handleClosePopup = () => {
        dispatch(clearPlanet());
    };

    return {
        handleClosePopup
    }
}