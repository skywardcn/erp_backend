import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavContainer = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">百嘉盛 B+S</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">首页</Nav.Link>
                        <NavDropdown title="产品展示" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">激光切割</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                焊接工艺
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                水箱组件
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                表面处理
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/news">公司资讯</Nav.Link>
                        <Nav.Link href="/about">关于我们</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export { NavContainer as default }