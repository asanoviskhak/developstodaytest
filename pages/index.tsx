import type { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useSelector } from 'react-redux';
import { RootState } from '../components/redux/rootReducer'

const Wrapper = styled.div`
  background-color: #eef5fa;
  min-height: 100vh;
  width: 100%;
`
const PostWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  justify-content: center;
  align-items: center;
`

const Post = styled.a`
  width: 350px;
  height: 270px;
  margin-top: 50px;
  border-radius: 12px;
  position: relative;
  background: url('https://picsum.photos/350/270');
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: white;
`
const PostTitleBox = styled.div`
  padding: 10px 20px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  border-radius: 0 0 12px 12px;
`

const PostTitle = styled.h2`
  padding: 0;
  margin: 0;
`
interface PostProps{
  id: number,
  title: string,
  body: string
}

const Home: NextPage = () => {
  const data = useSelector(
    (state: RootState) => state.posts
  );
  return (
    <>
      <Head>
        <title>Test assessment</title>
      </Head>

      <Wrapper>
        <Navbar />
        <div className="container">

          <PostWrapper>
            {
              data.map((post:PostProps) => (
                <Link key={post.id} href={"/posts/[id]"} as={"/posts/"+post.id}>
                  <Post>
                    <PostTitleBox>
                      <PostTitle>{post.title}</PostTitle>
                    </PostTitleBox>
                  </Post>
                
                </Link>
              ))
            }
            
          </PostWrapper>
        </div>

      </Wrapper>


    </>
  )
}

export default Home

