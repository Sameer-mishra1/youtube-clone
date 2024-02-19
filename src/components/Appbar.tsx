import { SearchBar } from "./Searchbar"

export const Appbar = () => {
    return <div className="flex justify-between pt-2">
        <div className="text-md inline-flex items-center pt-1 p-3">
            YouTube
        </div>
        <div>
            <SearchBar />
        </div>
        <div className="text-md inline-flex items-center pr-4">
            Sign In
        </div>
    </div>
}