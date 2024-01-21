import React from 'react'
import Avatar from './Avatar'
import Sunny from './Sunny'
import Rain from './Rain'

const Post = ({ review }) => {
    const { user, reviewContent, semester, instructor, year } = review;
    return (
        <div className="flex flex-col w-full min-w-[75%] bg-black border border-gray-200 p-4 rounded-md shadow-md overflow-x-auto">
            <div className='grid grid-cols-3 w-full'>
                <div className="col-span-2 flex items-center">
                    <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                            {/* Placeholder for profile picture */}
                            <Avatar />
                        </div>

                        <div className="ml-5 flex flex-col">
                            <div className="font-semibold text-white text-xl">  {user} </div>
                            <div className="text-gray-500 text-sm text-left">2h ago</div>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 text-right ">
                    <div className='items-join'>
                        <div className="font-semibold join text-xl divider"> {semester}'{year%100}</div>
                        {/* <div className='divider divider-horizontal'></div> */}
                        <div className='join divider\'> <Sunny /> </div>
                    </div>
                        <div className="text-gray-500 text-l">{instructor}</div>
                </div>
            </div>

            <div className='divider divider-neutral min-w-full'></div>
            <div className="mt-3 whitespace-pre-line min-w-full">
                {/* Placeholder for post text */}
                {/* <p className='text-white text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor mauris ac nulla viverra rhoncus. Nullam vitae est congue, dapibus neque vitae, accumsan magna. Quisque maximus egestas nisi, at ultrices nibh scelerisque non. Quisque consequat nisl lorem, eu fermentum elit luctus id. Phasellus consequat ornare congue. Fusce a nisi dui. Vivamus condimentum imperdiet arcu, in fringilla est auctor sit amet. Aenean ultrices hendrerit nisl vitae luctus. Donec venenatis placerat est, id rutrum dolor vehicula id.</p> */}
                <p className='text-white text-left'>{reviewContent}</p>

            </div>

        </div>
    )
}

export default Post
