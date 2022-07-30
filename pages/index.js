import Container from "../components/Container";
import Header from "../components/Header"
import Calendar from "../components/Calendar"
import Nav from "../components/Nav"

export default function Home() {
    return (
        <Container>
            <Header/>
            <Nav/>
            <Calendar/>
        </Container>
    )
}
