import React from 'react'

const ProjectManagement = () => {
    return (
        <>
            <h1 className='text-left  my-3'>Project Management</h1>
            <div className='container'>
                <div className='row my-5'>
                    <div className='col-4 mx-auto'>
                        <button className='mx-auto btn btn-primary btn-block w-75 font-weight-bold'>
                            On Going
                        </button>
                    </div>
                    <div className='col-4 mx-auto'>
                        <button className='mx-auto btn btn-success btn-block w-75 font-weight-bold'>
                            Done
                        </button>
                    </div>
                    <div className='col-4 mx-auto'>
                        <button className='mx-auto btn btn-warning btn-block w-75 font-weight-bold'>
                            On Hold
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectManagement