import React from 'react';

const Input: React.FC = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-10">
            <div className="container mx-auto max-w-6xl px-4 py-2 bg-white dark:bg-base-100">
                <label className="input input-bordered flex items-center gap-2 justify-between">
                    <label htmlFor="file-input" className="cursor-pointer">
                    <input id="file-input" type="file" className="hidden" accept="image/png, image/jpeg, image/webp" />
                        <svg id="Icons" viewBox="0 0 24 24" className="w-6 h-6 opacity-70" xmlns="http://www.w3.org/2000/svg">
                            <path className="cls-1" d="M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0Zm3,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3Z"/>
                            <path className="cls-1" d="M7,10A3,3,0,1,0,4,7,3,3,0,0,0,7,10ZM7,6A1,1,0,1,1,6,7,1,1,0,0,1,7,6Z"/>
                            <path className="cls-1" d="M16.707,10.293a.956.956,0,0,0-.74-.293,1.006,1.006,0,0,0-.72.341L12.217,13.8l-2.51-2.511a1,1,0,0,0-1.414,0l-4,4a1,1,0,1,0,1.414,1.414L9,13.414l1.9,1.9L8.247,18.341a1,1,0,0,0,1.506,1.318l3.218-3.678.006,0,.007-.011,3.065-3.5,2.244,2.244a1,1,0,0,0,1.414-1.414Z"/>
                        </svg>
                    </label>
                    <input type="text" className="grow outline-none border-none" placeholder="Search" />
                    <button className=''>
                        <svg height="32" viewBox="0 0 32 32" className="w-6 h-6 opacity-70" width="32" xmlns="http://www.w3.org/2000/svg">
                            <title/>
                            <g data-name="1" id="_1">
                                <path d="M27,3V29a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V27H7v1H25V4H7V7H5V3A1,1,0,0,1,6,2H26A1,1,0,0,1,27,3ZM12.29,20.29l1.42,1.42,5-5a1,1,0,0,0,0-1.42l-5-5-1.42,1.42L15.59,15H5v2H15.59Z" id="login_account_enter_door"/>
                            </g>
                        </svg>
                    </button>
                </label>
                <p className="text-sm sm:text-xs text-center mt-2">ChatGPT can make mistakes. Check important info.</p>
            </div>
        </div>
    );
};

export default Input;
