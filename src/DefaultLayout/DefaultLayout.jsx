import React from 'react';
import TopAppBar from './../TopAppBar';
import { Grid, Row,Col} from 'react-bootstrap';
export default class DefaultLayout extends React.Component {

    render() {
        return (
            <div>
                <TopAppBar/>
                <Grid>
                    <Row>
                        <Col md={8} mdOffset={2}>
                            {this.props.children}
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}