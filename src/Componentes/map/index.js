import React, { useEffect } from 'react'

export default function Map(props) {

    const mountMaps = () => {
        const map = new window.google.maps.Map(
            document.getElementById(props.id),
            props.options
        );
        props.onMapLoad(map)
    }

    useEffect(() => mountMaps())

    return (
        <div id={props.id} className={props.className} />
    )

}