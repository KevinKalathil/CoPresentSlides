import { Toolbar } from "./Toolbar";

export const Header = () => {
    return <div className="flex flex-col bg-gray-200 w-full h-auto p-2">
        <span className="text-red-500">Title</span>
        
        <Toolbar />
    </div>;
}