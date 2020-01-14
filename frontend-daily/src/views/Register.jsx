import React from "react";

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
  render() {
    return (
      <>
        <div className="content">
            <Row style={{justifyContent: 'center', alignContent: 'center'}}>
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
                        <h1 className="title">Cadastrar</h1>
                        </a>
                    </div>
                    <div className="card-description">
                        <FormGroup>
                            <label>Nome</label>
                            <Input
                                placeholder="Digite aqui seu nome"
                                type="text"
                            />
                            <label>E-mail</label>
                            <Input
                                placeholder="Digite aqui seu e-mail"
                                type="text"
                            />
                            <label>Senha</label>
                            <Input
                                placeholder="Digite sua senha"
                                type="text"
                            />
                            <label>Confime sua senha</label>
                            <Input
                                placeholder="Digite novamente sua senha"
                                type="text"
                            />
                        </FormGroup>
                    </div>
                    </CardBody>
                    <CardFooter>
                    <div className="button-container">
                        <Button className="btn-fill" color="primary" type="submit">
                            Registrar
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
