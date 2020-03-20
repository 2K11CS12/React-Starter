import React from 'react';
import { Grid, Row, Col } from "react-bootstrap";
import "./styles.css";

class Footer extends React.Component {
    render() {
        return (
            <footer className="footerWrapper">
                <Grid>
                    <Row>
                        <Col sm={12}>
                            <h1>I am Footer</h1>
                        </Col>
                    </Row>
                </Grid>
            </footer>
                
        );
    }
}
export default Footer;