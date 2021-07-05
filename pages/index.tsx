import { Col, Row } from "antd";
import { Feed } from "../components/Feed";

export default () => (
    <Row>
        <Col md={{ span: 10, offset: 8 }}>
            <Feed />
        </Col>
    </Row>
);