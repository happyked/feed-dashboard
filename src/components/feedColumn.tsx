import { FC, useEffect, useState } from "react";
import FeedItem from "./feedItem";
import { Feed } from "../types";
import { Scrollbars } from 'react-custom-scrollbars-2';


interface Props {
    name: string,
    url: string
}

const FeedColumn: FC<Props> = (props: Props) => {

    let [feedList, setFeedList] = useState<Feed[]>([])

    useEffect(() => {
        let collectFeeds = async () => {
            try {
                let res = await fetch(props.url)
                if (res.status != 200) { throw new Error("FEEL") }
                let feeds: Feed[] = await res.json()
                setFeedList(feeds)
            } catch (err) {
                console.log(err)
            }
        }
        collectFeeds()
    }, [])

    let dark = false

    return (
        <div style={feedBox}>
            <div style={{ color: "white", textAlign: "center" }}>
                <h2>{props.name}</h2>
            </div>
            <Scrollbars color="red" autoHide style={scrollBox}>
                {
                    feedList.map((feed, i) => {
                        dark = !dark
                        return <FeedItem toggleColor={dark} feed={feed} />
                    })
                }
            </Scrollbars>
        </div>
    )
}

let feedBox: React.CSSProperties = {
    height: "100%",
    width: "250px",
    display: "flex",
    flexDirection: "column",

}

let scrollBox: React.CSSProperties = {
    paddingRight: "10px"
}


export default FeedColumn