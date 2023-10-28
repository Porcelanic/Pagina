import Footer from "../Components/Footer";
import Header from "../Components/Header";
import ThemeSwitcher from "../Components/ThemeSwitcher";
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import './Catalogo.css';

function Catalogo(){

    return(
        <>
            <Header/>
                <Container fluid className=" align-items-center  ">
                <div className="text-center">
                    <a href="#" className="btn">Ver más camisas deportivas</a>
                </div>
                <Row>
                <Col xs lg={1}>
                    
                </Col>
                    <Col className="text-center">
                    <Card className="custom-card">
                        <Card.Img className="custom-img" variant="top" src="/RM.jpg" />
                        <Card.Body className="custom-body d-flex align-items-center justify-content-center">
                        <Card.Text>
                            <a href="#" className="btn">Real Madrid 2023</a>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col className="text-center">
                    <Card className="custom-card">
                        <Card.Img className="custom-img" variant="top" src="/Bayer.png" />
                        <Card.Body className="custom-body d-flex align-items-center justify-content-center">
                        <Card.Text>
                            <a href="#" className="btn">Bayer Much 2023</a>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col className="text-center">
                    <Card className="custom-card">
                        <Card.Img className="custom-img" variant="top" src="/Liverpool.jpeg" />
                        <Card.Body className="custom-body d-flex align-items-center justify-content-center">
                        <Card.Text className="text-center">
                            <a href="#" className="btn">Liverpool 2023</a>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col className="text-center">
                    <Card className="custom-card">
                        <Card.Img className="custom-img" variant="top" src="/Tottenham.jpg" />
                        <Card.Body className="custom-body d-flex align-items-center justify-content-center">
                        <Card.Text>
                            <a href="#" className="btn">Tottenham 2023</a>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col xs lg={1}>
                    
                </Col>
                </Row>
                <br></br>

                <div className="text-center">
                    <a href="#" className="btn">Ver más camisas para estampar</a>
                </div>
                <Row>
                <Col xs lg={1}>
                    
                </Col>
                    <Col className="text-center">
                    <Card className="custom-card">
                        <Card.Img className="custom-img" variant="top" src="/RM.jpg" />
                        <Card.Body className="custom-body d-flex align-items-center justify-content-center">
                        <Card.Text>
                            <a href="#" className="btn">Real Madrid 2023</a>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col className="text-center">
                    <Card className="custom-card">
                        <Card.Img className="custom-img" variant="top" src="/Bayer.png" />
                        <Card.Body className="custom-body d-flex align-items-center justify-content-center">
                        <Card.Text>
                            <a href="#" className="btn">Bayer Much 2023</a>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col className="text-center">
                    <Card className="custom-card">
                        <Card.Img className="custom-img" variant="top" src="/Liverpool.jpeg" />
                        <Card.Body className="custom-body d-flex align-items-center justify-content-center">
                        <Card.Text className="text-center">
                            <a href="#" className="btn">Liverpool 2023</a>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col className="text-center">
                    <Card className="custom-card">
                        <Card.Img className="custom-img" variant="top" src="/Tottenham.jpg" />
                        <Card.Body className="custom-body d-flex align-items-center justify-content-center">
                        <Card.Text>
                            <a href="#" className="btn">Tottenham 2023</a>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col xs lg={1}>
                    
                </Col>
                </Row>
            </Container>
            <Footer/>
            <ThemeSwitcher/>
        </>
    );
}

export default Catalogo;