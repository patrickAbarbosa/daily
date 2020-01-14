import React from "react";
import api from '../actions/api'
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardText,
    FormGroup,
    Form,
    Input,
    Row,
    Col
} from "reactstrap";

class Register extends React.Component {
    register(){
        api.post('auth/local/register', {
            email: 'user@strapi.io',
            username: 'patrick',
            password: 'strapiPassword',
        }).then(e => console.log("OKOK"))
        .catch(err => console.log(err.response))
    }
    render() {
        return (
            <>
                <div className="content">
                    <Row style={{ justifyContent: 'center', marginTop: '10em' }}>
                        <Col md="4">
                            <Card className="card-user">
                                <CardBody>
                                    <CardText />
                                    <div className="author">
                                        <div className="block block-one" />
                                        <div className="block block-two" />
                                        <div className="block block-three" />
                                        <div className="block block-four" />
                                        <a href="#pablo" onClick={e => e.preventDefault()}>
                                            <h1 className="title">Login</h1>
                                        </a>
                                    </div>
                                    <div className="card-description">
                                        <FormGroup>
                                            <label>E-mail</label>
                                            <Input
                                                placeholder="Digite seu e-mail"
                                                type="text"
                                            />
                                            <label>Senha</label>
                                            <Input
                                                placeholder="Digite sua senha"
                                                type="text"
                                            />
                                        </FormGroup>
                                    </div>
                                </CardBody>
                                <CardFooter>
                                    <div className="button-container">
                                        <Button onClick={e => this.register()}className="btn-fill" color="primary" type="submit">
                                            Entrar
                        </Button>
                                    </div>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default Register;
