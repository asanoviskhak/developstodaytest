import { useState } from "react"
import Head from "next/head"
import Image from 'next/image'
import Link from 'next/link'
import Navbar from "../../components/Navbar"
import styled from "styled-components"
import axios from "axios"
import {useRouter} from 'next/router'
import { useDispatch } from 'react-redux'
import { addPost } from "../../components/blogPost/blogPostSlice"

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

const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`

const Form = styled.form`
    background: white;
    padding: 30px;
    border-radius: 12px;
    max-width: 500px;
    width: 100%;
`

const InputField = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`

const InputLabel = styled.div`
    font-weight: 300;
    font-size: 18px;
    color: #202020;
    margin-bottom: 5px;
`

const Input = styled.input`
    width: 100%;
    display: flex;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    border-radius: 4px;
    outline: none;
    padding: 5px 10px;
`


const TextArea = styled.textarea`
    width: 100%;
    min-height: 150px;
    display: flex;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    border-radius: 4px;
    outline: none;
    padding: 5px 10px;
`

const SubmitButton = styled.button`
    width: 140px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3260a1;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 16px;
    margin: 0 auto;
    margin-top: 30px;
    cursor: pointer;
`


export default function New() {
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const dispatch = useDispatch();
    const router = useRouter()

    const handleSubmit = async() =>{
        try{
            dispatch(addPost(title, text))
            setTimeout(function(){
                router.push("/")
            }, 1000);
        }catch(error){
            console.log(error)
        }
    }

    return (
        <>
            <Head>
                <title>Create new post</title>
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
                    
                    <FormWrapper>
                        <Form onSubmit={e => e.preventDefault()}>
                            <InputField>
                                <InputLabel>Title</InputLabel>
                                <Input onChange={e=>setTitle(e.target.value)}/>
                            </InputField>
                            <InputField>
                                <InputLabel>Content text</InputLabel>
                                <TextArea onChange={e=>setText(e.target.value)}/>
                            </InputField>
                            <SubmitButton onClick={handleSubmit}>Publish</SubmitButton>
                        </Form>
                    </FormWrapper>
                </div>
                
                
            </Wrapper>
        </>
    )
}
