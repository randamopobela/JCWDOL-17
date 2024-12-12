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
            {article && (
                <div>
                    <div className="flex flex-col relative w-full">
                        <Image
                            src={`https:${
                                (article?.image as IContentfulAsset)?.fields
                                    .file.url
                            }`}
                            className="item-center"
                            width={720}
                            height={720}
                            style={{ objectFit: "cover" }}
                            alt="article-image"
                        />
                        <h1 className="text-3xl font-bold">{article?.title}</h1>
                        <RichText document={article?.body} />
                    </div>
                </div>
            )}
        </div>
    );
}
