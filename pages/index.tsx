import { Col, Row } from "antd";
import { Feed } from "../components/Feed";
import { CreateTweetForm } from "../components/CreateTweetForm";

export default () => (
    <Row>
        <Col md={{ span: 10, offset: 8 }}>
            <CreateTweetForm />
            <Feed />
        </Col>
    </Row>
);