import React from 'react'

const Sidebar = () => {
    return (
        <>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center relative">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button fixed right-5 top-2 z-50">
                        <span className="">
                            <svg className="bi bi-layout-text-sidebar" fill="currentColor" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.5 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM3 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z" />
                                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm12-1v14h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zm-1 0H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9V1z" />
                            </svg>
                        </span>
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar"></label>
                    <div className="flex flex-col h-full w-full">
                        <div className="p-4 w-80 h-[80%] text-lg overflow-y-auto bg-base-200 text-base-content">
                            {/* <h1 className="text-4xl bg-base-200 flex justify-center ">ChatGPT</h1> */}
                            <ul className="menu w-full text-lg overflow-x-hidden">
                                {/* Chats over here */}
                                <li><a className='flex justify-between font-bold' title='New Chat'>ChatGPT <svg className='w-6 h-6' viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title /><g><path d="M78,60a5.9966,5.9966,0,0,0-6,6V84H12V24H30a6,6,0,0,0,0-12H6a5.9966,5.9966,0,0,0-6,6V90a5.9966,5.9966,0,0,0,6,6H78a5.9966,5.9966,0,0,0,6-6V66A5.9966,5.9966,0,0,0,78,60Z" /><path d="M94.2422,13.7578l-12-12a5.9979,5.9979,0,0,0-8.4844,0l-36,36A5.9958,5.9958,0,0,0,36,42V54a5.9966,5.9966,0,0,0,6,6H54a5.9956,5.9956,0,0,0,4.2422-1.7578l36-36A5.9979,5.9979,0,0,0,94.2422,13.7578ZM51.5156,48H48V44.4844l30-30L81.5156,18Z" /></g></svg></a></li>
                                <br />
                                <li><a className='flex justify-between truncate' title=''>What are the GPTs differences</a></li>
                                <li><a className='flex justify-between truncate' title=''>Best Survival Game </a></li>
                                <li><a className='flex justify-between truncate' title=''>Need for speed hacks</a></li>
                                <li><a className='flex justify-between truncate' title=''>Nvidia Vs AMD GPU</a></li>
                                {/* Add more chat items here */}
                            </ul>
                        </div>
                        <div className="p-4 w-80 h-[25%] text-lg overflow-y-auto bg-base-200 text-base-content relative">
                            <ul className="menu w-11/12 text-lg absolute bottom-0 font-semibold">
                                {/* User Data */}
                                <li className=''><a>Satyam Singh</a></li>
                                <li><a>Subscription</a></li>
                                <li><a>Sidebar Item 3</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar