import React from 'react'

const Dashboard = () => {
    return (
        <div>
            <h1 className='text-left my-3'>Dashboard</h1>
            <div className='row my-5'>
                <div className='col-3 mx-auto'>
                    <div className='border border-1 p-3 rounded'>
                        <h5>New Registrations  </h5>
                    </div>
                </div>
                <div className='col-3 mx-auto'>
                    <div className='border border-1 p-3 rounded'>
                        <h5> Freelancer Database </h5>

                    </div>
                </div>
                <div className='col-3 mx-auto'>
                    <div className='border border-1 p-3 rounded'>
                        <h5> Client Database </h5>
                    </div>

                </div>
                <div className='col-3 mx-auto'>
                    <div className='border border-1 p-3 rounded'>
                        <h5> New Leads </h5>
                    </div>

                </div>
            </div>
            <div className='row'>
                <div className='col-6 mx-auto'>

                </div>
                <div className='col-6 mx-auto'>

                </div>
            </div>
        </div>
    )
}

export default Dashboard