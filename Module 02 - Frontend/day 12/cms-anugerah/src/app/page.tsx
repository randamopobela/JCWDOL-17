import Navbar from "@/components/global/Navbar";
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
            <header>
                <Navbar />
            </header>

            <main className="flex pt-40 mx-6">
                <div className="flex justify-center gap-6 flex-wrap">
                    {posts &&
                        posts.items?.map((blog, idx) => (
                            <div key={idx}>
                                <Link href={`article/${blog.fields.slug}`}>
                                    <div>
                                        <div className="card bg-base-100 w-96 h-[480px] shadow-xl">
                                            <figure>
                                                <Image
                                                    src={`https:${
                                                        (
                                                            blog.fields
                                                                .image as IContentfulAsset
                                                        )?.fields.file.url
                                                    }`}
                                                    alt="gambar"
                                                    width={384}
                                                    height={256}
                                                />
                                                {/* Untuk mengambil data gambar perlu menggunakan IContenfulAsset */}
                                            </figure>
                                            <div className="card-body h-56">
                                                <h2 className="card-title font-bold">
                                                    {blog.fields.title}
                                                </h2>
                                                <p>
                                                    Seharusnya berisi preview
                                                    konten... Lorem, ipsum dolor
                                                    sit amet consectetur
                                                    adipisicing elit. Magnam
                                                    asperiores laborum soluta,
                                                    similique quisquam.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                </div>
            </main>
        </div>
    );
}
