import React from 'react'

const Navbar: React.FC = () => {
    return (
        <>
            <div className="navbar bg-base-100 container mx-auto min-w-full fixed z-10">
                <div className="flex-1">
                    <a className="btn btn-ghost text-2xl font-bold">ChatGPT</a>
                </div>
            </div>
        </>
    )
}

export default Navbar
