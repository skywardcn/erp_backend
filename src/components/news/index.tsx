import { useCallback, useEffect, useState } from "react"
import { useAsync } from "../../hooks"


const NewsView = ({ id }: { id: number }) => {

    const { execute, data: users, loading, error } = useAsync(async () => {
        const res = await fetch("https://reqres.in/api/users/")
        const data = await res.json()
        return data
    })


    useEffect(() => {
        execute()
        //用于在组件销毁的时候做一些清理的操作
        // return () => { }
    }, [id]) //id 变化才重新生成组件



    return (
        <>
            <div>
                {loading ? "loading..." : users!.support.text}
            </div>
        </>
    )
}


export default NewsView