import React from "react";

export default function About() {
    return (
        <section id="mainSearch">
            <div>
                <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-700">
                            Library App

                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
                            Laborum, voluptas natus?
                        </p>
                        <div className="flex justify-center">
                            <a
                                href="#procedure"
                                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                                Procedure
                            </a>
                            <a
                                href="#register"
                                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                                Daftar Online
                            </a>
                        </div>
                    </div>

                </div>
                <div>
                    <form className="max-w-lg mx-auto bg-white rounded shadow-sm mb-40" >
                        <div className="max-w flex content-between items-stretch justify-between">
                            <div className="grow">
                                <div className="flex-wrap">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
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
        </section>
    );
}
