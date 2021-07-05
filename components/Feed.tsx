import { Card } from 'antd';
import { useFeed } from './util/hooks';

export const Feed = () => {
    const { feed } = useFeed();
    return feed ? (
        <>
            {feed.map(({ id, text, author }, i) => (
                <Card key={i}>
                    <h4>{text}</h4>
                    <span>{author.username}</span>
                </Card>
            ))}
        </>
    ) : null;
};