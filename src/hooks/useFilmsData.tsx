import { useState, useEffect, useCallback } from 'react';
import { IStarWarsData } from '../models/IStarWarsData';

const SWAPI_URI = "https://swapi.dev/api/";
const IMAGE_API_URI = "https://starwars-visualguide.com/assets/img/";

type DataType = 'films'; 

type StarWarsDataWithImage<T> = T & {
    imageUrl?: string;
};

interface APIResponse<T> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}

const getImageUrl = (type: DataType, id: string): string => {
    const category = type === 'films' ? 'films' : type;
    return `${IMAGE_API_URI}${category}/${id}.jpg`;
};

const extractIdFromUrl = (url: string): string => {
    const matches = url.match(/\/(\d+)\/$/);
    return matches ? matches[1] : '';
};

export const useFilmsData = <T extends IStarWarsData>(
    dataType: DataType, 
    searchTerm: string = '',
    pageSize: number = 10
) => {
    const [data, setData] = useState<StarWarsDataWithImage<T>[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [page, setPage] = useState<number>(1);

    const fetchData = useCallback(async (url: string) => {
        setLoading(true);
        setError(null);
        try {
            const response: Response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const responseData: APIResponse<T> = await response.json();
            const resultsWithImages = responseData.results.map((item: T) => {
                const id = extractIdFromUrl(item.url);
                return {
                    ...item,
                    imageUrl: getImageUrl(dataType, id)
                };
            });
            
            setData(prevData => {
                const newData = [...prevData];
                resultsWithImages.forEach(item => {
                    const index = newData.findIndex(existingItem => existingItem.url === item.url);
                    if (index === -1) {
                        newData.push(item);
                    } else {
                        newData[index] = item;
                    }
                });
                return newData;
            });
            
            setHasMore(!!responseData.next);
            setPage(prevPage => prevPage + 1);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred');
        } finally {
            setLoading(false);
        }
    }, [dataType]);

    useEffect(() => {
        setData([]);
        setPage(1);
        setHasMore(true);
        const url = `${SWAPI_URI}${dataType}/?search=${searchTerm}&page=1&page_size=${pageSize}`;
        fetchData(url);
    }, [dataType, searchTerm, pageSize, fetchData]);

    const loadMore = () => {
        if (hasMore && !loading) {
            const url = `${SWAPI_URI}${dataType}/?search=${searchTerm}&page=${page}&page_size=${pageSize}`;
            fetchData(url);
        }
    };

    return { data, loading, error, hasMore, loadMore };
};
