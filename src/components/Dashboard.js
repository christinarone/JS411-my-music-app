import Switch from "./Switch";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import Slider from "./Slider"
import Select from "./Select"

export default function Dashboard() {
    const [online, setOnline] = useState(true);
    const [volume, setVolume] = useState(30);
    const [quality, setQuality] = useState(2);

    useEffect(() => {
        console.log("Online Status: ", online);
    }, [online]);
    useEffect(() => {
        console.log("Volume: ", volume);
    }, [volume]);
    useEffect(() => {
        console.log("Quality: ", quality);
    }, [quality]);

    return (
        <>
            <h4>Welcome User!</h4>

            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Card
                    title="Online Mode"
                    body="Is this application connected to the Internet?"
                    state={online}
                    setState={setOnline}
                    component={Switch}
                />
                <Card
                    title="Master Volume"
                    body="Overrides all other sound settings in this application"
                    state={volume}
                    setState={setVolume}
                    component={Slider}
                />
                <Card
                    title="Sound Quality"
                    body="Manually control the music quality in the event of poor connection"
                    state={quality}
                    setState={setQuality}
                    component={Select}
                    />
      </div>
            <h4>System Notifications:</h4>
            {!online && <p>You are currently not online.</p>}
            {volume >= 80 && <p>Listening to music at a high volume could cause long-term hearing loss.</p>}
            {quality === 1 && <p>Music quality is degraded. Increase quality if your connection allows it.</p>}
        </>
    );
}
