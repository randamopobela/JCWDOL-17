import contentfulClient from "@/contentful/contentfulClient";
import {
    TypeBlogPostSkeleton,
    IContentfulAsset,
} from "@/contentful/types/blogPost.types";

const getBlogPostsContenful = async () => {
    try {
        const data = await contentfulClient.getEntries<TypeBlogPostSkeleton>(); // Method getEntries akan mengambil semua konten kita di contenful.
        console.log(data.items);

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
            {posts &&
                posts.items?.map((blog, idx) => (
                    <div key={idx}>
                        <p>{blog.fields.title}</p>
                        <img
                            src={`https:${
                                (blog.fields.image as IContentfulAsset)?.fields
                                    .file.url
                            }`}
                            alt=""
                        />
                        {/*Untuk mengambil data gambar perlu menggunakan
                        IContenfulAsset*/}
                        <p>{blog.fields.slug}</p>
                    </div>
                ))}
        </div>
    );
}
