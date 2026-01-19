import {useState, useEffect} from 'react';  

function Quotes() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

async function fetchQuote() {
        try {
            setError(null)
            setLoading(true)
            
            const response = await fetch('https://dummyjson.com/quotes/random')
            const result = await response.json();
            // console.log(result)
            setData(result)

        } catch (error) {
            setLoading(false)
            console.error('Error fetching quote:', error);
            setError(error)


        }finally {
            setLoading(false)
        }
    }

    useEffect(() => {
    fetchQuote();
}, [])

    // if (loading) return <p className='quote'>Loading Quote...</p>
    // if (error) return <p className='quote'>Error: {error.message}</p> 
    return (
        <section className='quote-section'>
        <div className='quote' onClick={loading == false ? fetchQuote : null}>
    
            <div className="filter"></div>
            {loading && <h4>Loading Quote...</h4>}
            {error && <h4>Error loading quote</h4>}
            {!loading && !error && (
                <>
                    <h4>{data?.quote}</h4>
                    <h5>- {data?.author}</h5>
                </>
            )}
        </div>
        </section>
    );
}


export default Quotes;  