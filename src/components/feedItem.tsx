import React, { CSSProperties, FC } from "react";
import { Feed } from "../types";
import ReactTimeAgo from 'react-time-ago'

interface Props {
    feed: Feed,
    toggleColor: boolean
}

const FeedItem: FC<Props> = (props) => {
    console.log(props.toggleColor)
    return (
        <a style={
            {
                ...feedNews, 
                backgroundColor: props.toggleColor ? "#131515" : "#171a1a"
            }} target={"_blank"} href={props.feed.url}>

            <div style={titleContainer}>{props.feed.title}</div>
            <div>
                <ReactTimeAgo style={{color: "green"}} date={props.feed.date} locale="en-US"/>
            </div>
        </a>
    )
}


let titleContainer: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

let feedNews: React.CSSProperties = {
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    padding: "1em",
    gap: "1em",
    textDecoration: "none",
    color:"white",
    fontFamily: "monospace",
    marginRight: "10px"
}

export default FeedItem