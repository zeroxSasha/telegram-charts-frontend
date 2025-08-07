import { useState, useEffect } from "react";
import { fetchCollections } from "../api/collections";
import type { Collection } from "../types";
import CollectionList from "../components/CollectionList/CollectionList";

const Home = () => {
    const [collections, setCollections] = useState<Collection[]>([]);
    const [fetchError, setFetchError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const load = async () => {
            try {
                const data = await fetchCollections();
                setCollections(data.collections);
                setFetchError(null);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    console.log(err);
                    setFetchError(err.message);
                } else {
                    setFetchError(String(err));
                }
            } finally {
                setIsLoading(false);
            }
        };

        load();
    }, []);

    return (
        <main>
            {isLoading && <p>Loading Items...</p>}
            {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
            {!fetchError && (
                <CollectionList
                    collections={collections.filter(c => parseFloat(c.floor_price) > 0)}
                />
            )}
        </main>
    )
};

export default Home;
