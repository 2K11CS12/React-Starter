import React from 'react';
import { Grid, Row, Col } from "react-bootstrap";
import "./styles.css";

class Header extends React.Component {
    render() {
        return (
            <div className="headerWrapper">
                <Grid>
                    <Row>
                        <Col sm={12}>
                            <h1>I am Header</h1>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
export default Header;