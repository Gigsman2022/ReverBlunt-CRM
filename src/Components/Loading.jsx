import React, {
    useState,
    useEffect
} from 'react'

const Loading = () => {
    const [timeout, setTimeOut] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setTimeOut(true)
        }, 5000)
    }, [])

    return (
        <>
            {timeout ?
                <h1 className='my-5'>No Data Available</h1> :
                <div className="spinner-border text-center" role="status">
                    <span className="visually-hidden"></span>
                </div>}
        </>

    );
};

export default Loading