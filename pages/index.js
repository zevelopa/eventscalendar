import Head from 'next/head'
import Image from 'next/image'
import Container from "../components/Container";
import Header from "../components/Header"
import Calendar from "../components/Calendar"

export default function Home() {
    return (
        <Container>
            <Header/>

            <Calendar/>
        </Container>
    )
}
