import { useCallback, useState } from "react";

export const useAsync = (asyncFunc: Function) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("no error");


    const execute = useCallback(() => {
        setLoading(true)
        setData(null)
        setError(null)
        return asyncFunc().then(
            (res) => {
                setData(res)
                setLoading(false)
            }
        ).catch(error => {
            setError(error)
            setLoading(false)
        })
    }, [asyncFunc])

    return { execute, loading, data, error }
}

