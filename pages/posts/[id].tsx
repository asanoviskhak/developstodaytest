import Head from "next/head"
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from "../../components/Navbar"
import styled from "styled-components"
import axios from "axios"

const Wrapper = styled.div`
    background-color: #eef5fa;
    min-height: 100vh;
    width: 100%;
`
const BackButton = styled.a`
    width: 100px;
    height: 45px;
    background: white;
    border-radius: 8px;
    font-weight: 600;
    font-size: 16px;
    color: #3260a1;
    padding: 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 50px;
    outline: none;
    :hover{
        box-shadow: 0 10px 25px rgba(148, 174, 213, 0.15);
        transition: .2s all ease-in-out;
    }
`

const PostWrapper = styled.div`
    display: flex;
    background: #fefefe;
    border-radius: 12px;
    margin-top: 50px;
`

const PostContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 35px;
`

const PostTitle = styled.h1`
    font-size: 24px;
    color: #3260a1;
`

const PostText = styled.p`
    font-size: 14px;
`

export default function Post({data}:any) {
    
    if (!data) "Loading..."
    
    console.log(data)

    return (
        <>
            <Head>
                <title>{data.title}</title>
            </Head>

            <Wrapper>
                <Navbar />
                <div className="container">
                    <Link href="/">
                        <BackButton>
                            <span>←</span>
                            Back
                        </BackButton>
                    </Link>
                    <PostWrapper>
                        <PostContent>
                            <PostTitle>{data.title}</PostTitle>
                            <PostText>
                                {data.body}
                            </PostText>
                            
                        </PostContent>
                    </PostWrapper>
                </div>
            </Wrapper>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) =>  {
    const {id} = context.query
    const {data} = await axios(`https://simple-blog-api.crew.red/posts/${id}`)
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {data}, // will be passed to the page component as props
    }
}