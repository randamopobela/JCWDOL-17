import contentfulClient from "@/contentful/contentfulClient";
import {
    TypeBlogPostSkeleton,
    IContentfulAsset,
} from "@/contentful/types/blogPost.types";
import Image from "next/image";
import Link from "next/link";

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
                        <Link href={`article/${blog.fields.slug}`}>
                            <div className="card">
                                <Image
                                    src={`https:${
                                        (blog.fields.image as IContentfulAsset)
                                            ?.fields.file.url
                                    }`}
                                    alt="gambar"
                                    width={480}
                                    height={480}
                                />
                                {/*Untuk mengambil data gambar perlu menggunakan
                        IContenfulAsset*/}
                                <p>{blog.fields.title}</p>
                                <p>{blog.fields.slug}</p>
                            </div>
                        </Link>
                    </div>
                ))}
        </div>
    );
}
