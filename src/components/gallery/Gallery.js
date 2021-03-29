import React from 'react'

const Gallery = () => {
    return (
        <div className="grid  lg:grid-rows-7 lg:grid-cols-3  grid-cols-1 lg:gap-2">
            <div className="row-span-3 bg-tangle-one bg-no-repeat bg-cover p-24"></div>
            <div className="row-span-2 bg-tangle-two bg-no-repeat bg-cover p-20"></div>
            <div className="row-span-3 bg-tangle-two bg-no-repeat bg-cover p-20"></div>
            <div className=" row-start-4 row-end-7 bg-tangle-two bg-no-repeat bg-cover p-20"></div>
            <div className=" row-start-3 row-end-7 bg-tangle-two bg-no-repeat bg-cover p-20"></div>
            <div className=" row-start-4 row-end-7 bg-tangle-one bg-no-repeat bg-cover p-20"></div>
        </div>
    )
}

export default React.memo(Gallery);
