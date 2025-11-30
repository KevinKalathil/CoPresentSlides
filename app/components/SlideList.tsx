export const SlideList = () => {
    const slideList = [1, 2, 3, 4, 5];
    return <div className="flex flex-col w-1/5 bg-gray-100 p-2">
        {slideList.map((slide) => (
            <div key={slide} className="flex items-center justify-center h-30 w-50 mb-2 p-2 border border-gray-300  rounded bg-white">
                <span className="text-blue-500">Slide {slide}</span>
            </div>
        ))  
        }
                <span className="text-blue-500 w-1/5">1</span>
              </div>;
}