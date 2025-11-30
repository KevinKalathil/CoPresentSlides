import { SlideList } from "./SlideList";
import { SlideMainView } from "./SlideMainView";

export const EditView = () => {
    return <div className="flex flex-1 w-full column-2 gap-4 p-4">
        <SlideList />
        <SlideMainView />
    </div>;    
}