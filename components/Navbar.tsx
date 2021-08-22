import styled from 'styled-components'
import Link from 'next/link'
import ReactTooltip from 'react-tooltip';


const Nav = styled.nav`
    background: #fefefe;
    padding: 18px 0;
`

const NavbarItem = styled.div`
    position: relative;
`

const Logo = styled.a`
    font-size: 18px;
    font-weight: 700;
    line-height: 21px;
    color: #3260a1;
`

const AddPostButton = styled.a`
    font-weight: 600;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    position: absolute;
    left: 50%;
    top: 20px;
    transform: translate(-50%);
    background-color: #3260a1;
    color: white;
`

export default function Navbar() {
    return (
        <Nav>
            <div className="container">
            <NavbarItem>
                <Link href="/">
                    <Logo>Test Blog</Logo>
                </Link>

                <Link href="/posts/new">
                    <AddPostButton data-tip="Add new post">+</AddPostButton>
                </Link>
                <ReactTooltip />
                
            </NavbarItem>
            </div>
            
        </Nav>
    )
}
