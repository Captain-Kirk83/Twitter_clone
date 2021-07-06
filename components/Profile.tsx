import { Row, Col, Button, message } from 'antd';
import { SignupForm } from './SignupForm';
import { useMe } from './util/hooks';
import { useState } from 'react';

export const Profile = () => {
    const { me } = useMe();
    const [loading, setLoading] = useState(false);
    if (!me) return null;

    return (
        <Row style={{ padding: '1.5rem' }}>
            {!me.username ? (
                <SignupForm />
            ) : (
                <Col>
                    Logged in as: <strong>{me.username}</strong>
                    {/*To add logout button here*/}
                </Col>
            )}
        </Row>
    );
};