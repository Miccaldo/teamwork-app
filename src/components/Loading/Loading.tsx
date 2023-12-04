import BeatLoader from "react-spinners/BeatLoader";

interface ILoading {
    isLoading: boolean
}
export const Loading = ({isLoading} : ILoading) => {
    return isLoading && (
        <div className="mt-2 flex flex-col items-center justify-center">
            <BeatLoader
                loading={isLoading}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}