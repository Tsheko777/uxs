import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { FetchURL } from "../models/url"

export const Redirect = () => {
    let params = useParams();

    useEffect(() => {
        if (params.id) {
            FetchURL(params.id)
        }
    }, [])

    return (
        <p className='m-2 text-dark'>Redirecting...</p>
    )
}