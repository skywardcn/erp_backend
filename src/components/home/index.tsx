import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";
import { Component, ReactNode } from "react";


const { Header, Content, Footer } = Layout


const getSize = () => {
  return window.innerWidth < 1000 ? "small" : "large"
}

const useWindowSize = () => {
  const [size, setSize] = React.useState(getSize())
  React.useEffect(() => {
    const handler = () => {
      setSize(getSize())
    }
    window.addEventListener('resize', handler)
    return () => {
      window.removeEventListener('resize', handler)
    }
  }, [])
  return size
}


const HomeContainer = () => {
  const size = useWindowSize()

  if (size == "small") console.log("small"); else console.log("large");

  return (
    <>
      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header >Header</Header>
          <Content >Content</Content>
          <Footer >Footer</Footer>
        </Layout>
      </Layout>
    </>
  )

}

export default HomeContainer