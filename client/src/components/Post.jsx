import React from 'react'
import Avatar from './Avatar'
import Sunny from './Sunny'
import Rain from './Rain'

const Post = ({ review }) => {
    const { user, reviewContent, semester, instructor, year , id , isAnonymous} = review;
    return (
        <div className="flex flex-col w-full min-w-[75%] bg-transparent border-gray-200 p-4 rounded-md  overflow-x-auto">
            <div className='grid grid-cols-3 w-full'>
                <div className="col-span-2 flex items-center">
                    <div className="flex items-center">
                        
                            {/* Placeholder for profile picture */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>

           

                        <div className="ml-5 flex flex-col">
                            <div className="font-semibold  text-sm">{isAnonymous ? <p>Anonymous</p> : <p>#{id}</p> }</div>
                            <div className="text-sm text-left">2h ago</div>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 text-right ">
                    <div className='items-join'>
                        <div className="font-semibold join text-sm divider"> {semester}'{year % 100}</div>
                        {/* <div className='divider divider-horizontal'></div> */}
                        <div className='join divider\'> <Sunny /> </div>
                    </div>
                    <div className="">{instructor}</div>
                </div>
            </div>


            <div className="mt-3 whitespace-pre-line min-w-full">
                {/* Placeholder for post text */}
                {/* <p className='text-white text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor mauris ac nulla viverra rhoncus. Nullam vitae est congue, dapibus neque vitae, accumsan magna. Quisque maximus egestas nisi, at ultrices nibh scelerisque non. Quisque consequat nisl lorem, eu fermentum elit luctus id. Phasellus consequat ornare congue. Fusce a nisi dui. Vivamus condimentum imperdiet arcu, in fringilla est auctor sit amet. Aenean ultrices hendrerit nisl vitae luctus. Donec venenatis placerat est, id rutrum dolor vehicula id.</p> */}
                <p className=' text-left'>{reviewContent}</p>

            </div>
            <div className='divider divide-gray-500 min-w-full'></div>
        </div>
    )
}

export default Post
