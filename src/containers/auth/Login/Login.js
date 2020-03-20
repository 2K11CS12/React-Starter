import React from 'react';
import { Grid, Row, Col, Form, Button } from "react-bootstrap";
import { default as Auth } from "../../../core/services/authService"
import queryString from "query-string";
// import { FormInputs } from "../../../components/common"
// import "./styles.css";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            email: "",
            password: ""
        };
    }

    componentWillMount() {
        if (Auth.isAuthenticated()) {
            this.props.history.push("/dashboard");
        }
    }

    validateEmail = email => {
        if (!email) {
            this.showError("Email field is required", "email");
            return false;
        }

        let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!pattern.test(email)) {
            this.showError("Email is not valid", "email");
            return false;
        }

        return true;
    };

    validatePassword = password => {
        if (!password) {
            this.showError("Password field is required", "password");
            return false;
        }

        return true;
    };

    handleValidation = (email, password) => {
        return this.validateEmail(email) && this.validatePassword(password);
    };

    signIn = () => {
        let email = this.state.email;
        let password = this.state.password;
        if (!this.handleValidation(email, password)) {
            return;
        }

        this.setState({ loading: true });
        let successCallback = () => {
            let returnPath = "/dashboard";
            let queryStrings = queryString.parse(this.props.location.search);
            if (queryStrings.return) {
                returnPath = `/${queryStrings.return}`;
            }
            this.props.history.push(returnPath);
        };
        let failureCallback = error => {
            this.setState({ loading: false, disabled: true });
            this.showError(error, "error");
        };

        Auth.signIn(email, password, successCallback, failureCallback);
    };

    keyPress = e => {

        console.log('enter pressed')
        if (e.key === "Enter") {
            this.signIn();
        }
    };


    render() {
        let { email } = this.state;

        const isEnabled = true;
        return (
            <div className="LoginWrapper">
                <Grid>
                    <Row>
                        <Col sm={12}>
                            <h1>Login Here</h1>
                            
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name="email" type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember Me!" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Login
                            </Button>

                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
export default Login;