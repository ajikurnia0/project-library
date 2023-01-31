import React from 'react'

import TableSearch from './TableSearch'

const Search = () => {
    return (
        <section id='listSearch'>
            <div className='w-[900px] mx-1/4 mx-auto my-10 justify-center'>
                <div className='shadow-sm'>
                    <div className='bg-gray-300 p-2 text-left'>
                        <span className='text-lg'>
                            Daftar Hasil Pencarian
                        </span>
                        <div className='bg-gray-200'>
                            <div className='bg-gray-400 mx-20'>
                                <form className="max-w-lg mx-auto mt-20 bg-white rounded shadow-sm mb-40" >
                                    <div className="max-w flex content-between items-stretch justify-between">
                                        <div className="grow">
                                            <div className="flex-wrap">
                                                <input
                                                    type="text"
                                                    id="search"
                                                    name="search"
                                                    className="w-full bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                />
                                            </div>
                                            <div className="flex content-between px-4 py-3">
                                                <div className=" mb-0">
                                                    <div>
                                                        <input
                                                            type="radio"
                                                            id="findTitle"
                                                            name="findTitle"
                                                            value="title"
                                                            className="m-2"
                                                            checked
                                                        /><label>Title</label>

                                                        <input
                                                            type="radio"
                                                            id="findAuthor"
                                                            name="findAuthor"
                                                            value="author"
                                                            className="m-2"
                                                        /><label>Author</label>

                                                        <input
                                                            type="radio"
                                                            id="findPublisher"
                                                            name="findPublisher"
                                                            value="publisher"
                                                            className="m-2"
                                                        /><label>Publisher</label>
                                                        <input
                                                            type="radio"
                                                            id="findGenre"
                                                            name="findGenre"
                                                            value="genre"
                                                            className="m-2"
                                                        /><label>Genre</label>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="px-0">
                                            <button
                                                type="submit"
                                                className='bg-black text-white px-3 py-1 h-full content-center align-middle rounded border drop-shadow-sm transition ease-in-out delay-150 hover:bg-green-500 duration-300'
                                                value="Search" >Search</button>

                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                        <div className='w-full mx-1/4 mx-auto my-10 justify-center'>
                            <div className='bg-cyan-300 text-left'>
                                <span className='text-lg'>
                                    Daftar Hasil Pencarian "javascript" berdasarkan "Title"
                                </span>
                            </div>
                            <TableSearch />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Search