import { useRouter } from "next/router";

export default function DetailsPage() {
    const router = useRouter();

    return <h1>The {router.query.newsId} page</h1>;
}