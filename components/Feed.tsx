import { Card } from 'antd';
import { useFeed } from './util/hooks';
import { DeleteTweetButton } from "./DeleteTweetButton";
//import me from '../pages/api/me';
import { useMe } from './util/hooks';

export const Feed = () => {
    const { feed } = useFeed();
    const { me } = useMe();
    return feed ? (
        <>
            {feed.map(({ id, text, author }, i) => (
                <Card key={i}>
                    {me && author.id === me.id && (
                        <DeleteTweetButton id={id} feed={feed} />
                    )}
                    <h4>{text}</h4>
                    <span>{author.username}</span>
                </Card>
            ))}
        </>
    ) : null;
};