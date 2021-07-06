import useSWR from 'swr';
import { fetcher } from './fetcher';
import { Tweet, User } from '@prisma/client';

export function useFeed() {
    const {data: feed}: { data?: (Tweet & { author: User })[] } = useSWR('/api/feed', fetcher);
    return { feed };
}

export function useMe() {
    const { data: me }: { data?: User } = useSWR('/api/me', fetcher);
    return { me };
}