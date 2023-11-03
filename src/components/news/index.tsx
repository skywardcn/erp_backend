import { useEffect, useMemo, useState } from "react"
import { useAsync } from "@/hooks"
import { Col, Container, Form, Row } from "react-bootstrap"



// 列表
const endPoint = "https://reqres.in/api/"
const useNews = () => {

    const { execute, data, loading, error } = useAsync(async () => {
        const res = await fetch(`${endPoint}users`)
        return await res.json()
    })

    useEffect(() => {
        execute()
        //用于在组件销毁的时候做一些清理的操作
        // return () => { }
    }, [execute]) //id 变化才重新生成组件

    return { "newsData": data, "newsLoading": loading, "newsError": error }
}


// 分类
const useNewsCatelogries = () => {
    const { execute, data, loading, error } = useAsync(
        async () => {
            const res = await fetch(`${endPoint}users`)
            return await res.json()
        }
    )
    useEffect(() => execute(), [execute])
    return { "catelogries": data, "catelogriesLoading": loading, "catelogriesError": error }
}

// 数据组合
const useCombineNews = (news, categories) => {

    return useMemo(() => {
        if (!news || !categories) return null
        // 将新闻跟分类组合
        return {}
    }, [news, categories])
}

const useFilteredNews = (news, selectedCatalog: string) => {
    // 按分类过滤
    return useMemo(() => {
        if (!news) return null
        if (!selectedCatalog) return news
        return {}
    }, [news, selectedCatalog])
}


const NewsView = () => {
    // const [selectCategory, setSelectCategory] = useState("")
    // //获取列表
    // const { newsData, newsLoading, newsError } = useNews()
    // //获取分类
    // const { catelogries, catelogriesLoading, catelogriesError } = useNewsCatelogries()
    // // 组合数据
    // const combined = useCombineNews(newsData, catelogries)
    // // 过滤数据
    // const result = useFilteredNews(combined, selectCategory)



    return (
        <div>
            <Container>
                <Row className="justify-content-md-center">
                    <Col lg={2}>
                        <Form.Select>
                            <option>请选择分类</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </Form.Select>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default NewsView