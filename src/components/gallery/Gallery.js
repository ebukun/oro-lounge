import React from 'react'

const Gallery = () => {
    return (
        <div className="grid grid-rows-7 grid-cols-3 gap-6">
            <div className="row-span-3 bg-tangle-one bg-no-repeat bg-cover"></div>
            <div className="row-span-2 bg-tangle-two bg-no-repeat bg-cover"></div>
            <div className="row-span-3 bg-tangle-two bg-no-repeat bg-cover"></div>
            <div className=" row-start-4 row-end-7 bg-tangle-two bg-no-repeat bg-cover p-12"></div>
            <div className=" row-start-3 row-end-7 bg-tangle-two bg-no-repeat bg-cover p-12"></div>
            <div className=" row-start-4 row-end-7 bg-tangle-one bg-no-repeat bg-cover p-12"></div>
        </div>
    )
}

export default React.memo(Gallery);
