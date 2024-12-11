import contentfulClient from "@/contentful/contentfulClient";
import {
    TypeBlogPostSkeleton,
    IContentfulAsset,
} from "@/contentful/types/blogPost.types";

const getBlogPostsContenful = async () => {
    try {
        const data = await contentfulClient.getEntries<TypeBlogPostSkeleton>(); // Method getEntries akan mengambil semua konten kita di contenful.
        console.log(data);

        return data;
    } catch (err) {
        console.log(err);
    }
};

export default async function Home() {
    const posts = await getBlogPostsContenful();

    return (
        <div>
            <div>HOME</div>
        </div>
    );
}
