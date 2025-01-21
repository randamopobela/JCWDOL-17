"use client";

import { useState, useEffect } from "react";
import {
    IContentfulAsset,
    TypeBlogPostFields,
    TypeBlogPostSkeleton,
} from "@/contentful/types/blogPost.types";
import contentfulClient from "@/contentful/contentfulClient";
import Image from "next/image";
import { useParams } from "next/navigation";
import RichText from "@/components/global/RichText";
import Navbar from "@/components/global/Navbar";

export default function Article() {
    const params = useParams<{ slug: string }>();
    const [article, setArticle] = useState<any>(null);

    const fetchArticle = async () => {
        try {
            const data =
                await contentfulClient.getEntries<TypeBlogPostSkeleton>({
                    content_type: "blogPost",
                    limit: 1,
                    "fields.slug": params.slug,
                });

            setArticle(data.items[0].fields);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchArticle();
    }, []);

    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main className="flex pt-28 pb-8 mx-6 ">
                {article && (
                    <div className="flex justify-center w-full">
                        <div className="flex flex-col justify-center gap-5 relative lg:w-1/2">
                            <figure className="flex justify-center">
                                <Image
                                    src={`https:${
                                        (article?.image as IContentfulAsset)
                                            ?.fields.file.url
                                    }`}
                                    className="flex items-center justify-center"
                                    width={720}
                                    height={720}
                                    style={{ objectFit: "cover" }}
                                    alt="article-image"
                                />
                            </figure>
                            <h1 className="text-3xl font-bold">
                                {article?.title}
                            </h1>
                            <RichText document={article?.body} />
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
