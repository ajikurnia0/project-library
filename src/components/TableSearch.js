import React from 'react'

const TableSearch = () => {
    return (
        <div>
            <table class="table-auto border-collapse border border-slate-700">
                <thead>
                    <tr >
                        <th className='border border-slate-700 p-2 text-center'></th>
                        <th className='border border-slate-700 p-2 text-center'>Title</th>
                        <th className='border border-slate-700 p-2 text-center'>Author</th>
                        <th className='border border-slate-700 p-2 text-center'>Publisher</th>
                        <th className='border border-slate-700 p-2 text-center'>Genre</th>
                        <th className='border border-slate-700 p-2 text-center'>Loan</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td className='border border-slate-700 px-2'>-</td>
                        <td className='border border-slate-700 px-2'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td className='border border-slate-700 px-2'>Malcolm Lockyer</td>
                        <td className='border border-slate-700 px-2'>Gramedia</td>
                        <td className='border border-slate-700 px-2'>Horror</td>
                        <td className='border border-slate-700 px-2'>Add to Cart</td>
                    </tr>
                    <tr>
                        <td colspan="6">
                            <h1>
                                <b>Title :</b>
                                The Sliding Mr. Bones (Next Stop, Pottersville)
                            </h1>
                            <h1>
                                <b>Author :</b>
                                Malcolm Lockyer
                            </h1>
                            <h1>
                                <b>Publisher :</b>
                                Gramedia
                            </h1>
                            <h1>
                                <b>Genre :</b>
                                Horror
                            </h1>
                            <h1>
                                <b>Pages :</b>
                                150
                            </h1>
                        </td>
                    </tr>
                    <tr >
                        <td className='border border-slate-700 px-2'>+</td>
                        <td className='border border-slate-700 px-2'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td className='border border-slate-700 px-2'>Malcolm Lockyer</td>
                        <td className='border border-slate-700 px-2'>Gramedia</td>
                        <td className='border border-slate-700 px-2'>Horror</td>
                        <td className='border border-slate-700 px-2'>Add to Cart</td>
                    </tr>
                    <tr >
                        <td className='border border-slate-700 px-2'>+</td>
                        <td className='border border-slate-700 px-2'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td className='border border-slate-700 px-2'>Malcolm Lockyer</td>
                        <td className='border border-slate-700 px-2'>Gramedia</td>
                        <td className='border border-slate-700 px-2'>Horror</td>
                        <td className='border border-slate-700 px-2'>Add to Cart</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TableSearch