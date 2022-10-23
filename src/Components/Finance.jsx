import React from 'react'

const Finance = () => {
    return (
        <>
            <h1 className='text-left  my-3'>Finances</h1>
            <div className='container'>
                <div className='row my-5'>
                    <div className='col-4 mx-auto'>
                        <button className='mx-auto btn btn-primary btn-block w-75 font-weight-bold'>
                            Quotation
                        </button>
                    </div>
                    <div className='col-4 mx-auto'>
                        <button className='mx-auto btn btn-success btn-block w-75 font-weight-bold'>
                            Invoices
                        </button>
                    </div>
                    <div className='col-4 mx-auto'>
                        <button className='mx-auto btn btn-warning btn-block w-75 font-weight-bold'>
                            Agreement NDA
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Finance