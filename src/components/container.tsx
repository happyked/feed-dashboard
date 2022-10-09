import React, { useEffect, useState } from 'react'
import FeedColumn from './feedColumn'

function Container() {

    let [allFeeds, setAllFeeds] = useState<{name: string, url:string}[]>([])

    useEffect(() => {
        let collectAllFeeds = async () => {
            try {
                let res = await fetch("http://localhost:3000/allFeeds")
                if (res.status != 200) { throw new Error("FEEL") }
                setAllFeeds(await res.json())
            } catch (err) {
                console.log(err)
            }
        }
        collectAllFeeds()
    }, [])

    return (
        <div style={containerStyle}>
            {
                allFeeds.map((feed) => <FeedColumn url={feed.url} name={feed.name} />)
            }
        </div>
    )
}

let containerStyle: React.CSSProperties = {
    display: "flex",
    height: "100vh",
    background: "linear-gradient(170deg, rgba(2,0,36,1) 0%, rgba(0,0,0,0.9192051820728291) 51%, rgba(42,42,42,1) 100%)",
    gap: "10px",
    padding: "10px",
    overflowX: "auto"
}



export default Container