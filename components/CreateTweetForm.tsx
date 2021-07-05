import { Button, message, Row, Col, Input } from "antd";
import { mutate } from "swr";
import { fetcher } from "./util/fetcher";
import { useState } from "react";
import { useFeed } from "./util/hooks";

export const CreateTweetForm = () => {
    const [input, setInput] = useState('');
    const { feed } = useFeed();

    return (
        <form
            style={{ padding: '2rem' }}
            onSubmit={async (e) => {
                e.preventDefault();

                mutate(
                    
                    '/api/feed',
                    [{ text: input, author: { username: 'Marshall Mathers' }}, ...feed], false
                );
                fetcher("/api/tweet/create", {
                    text: input
                });
                

                setInput('');
            }}
            >
                <Row>
                    <Col>
                        <Input value={input} onChange={(e) => setInput(e.target.value)} />
                    </Col>

                    <Col>
                        <Button htmlType="submit">Tweet</Button>
                    </Col>
                </Row>
            </form>
    );
};