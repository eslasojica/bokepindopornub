import {
    CalendarIcon,
    CubeIcon,
    DownloadIcon,
    LapTimerIcon,
    RocketIcon,
    Share1Icon,
} from "@radix-ui/react-icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata, ResolvingMetadata } from "next";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { humanDuration, humanSize } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import CopyButton from "@/components/copy-button";
import LikeButton from "@/components/like-button";
import Link from "next/link";
import MessageBox from "@/components/message-box";
import React from "react";
import { SITENAME } from "@/lib/constants";
import SearchCardList from "@/components/search/search-list";
import doodstream from "@/lib/doodstream";

type PageProps = {
    params: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
    { params }: PageProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const data = await doodstream.getFile({ file_code: params.id as string });
     const upstream = await doodstream.getUpstream();
    if (data.status !== 200) {
        return {
            title: data.msg,
            description: "Something went wrong. Please try again later.",
        };
    }

    const file = data.result[0];
    const title = `${file.title} - ${SITENAME}`;
    const description = `${file.title} di ${SITENAME} Video Bokep Indo Jepang Jav Barat Simontok Viral Terbaru Bocil Ngentot Jilbab Smp Mama Sma`;
    const image = file.splash_img;
    const previousOgImages = (await parent).openGraph?.images || [];
    const previousTwImages = (await parent).twitter?.images || [];

    return {
        title,
        description,
        twitter: {
            title,
            description,
            images: [...previousTwImages, image],
        },
        openGraph: {
            title,
            description,
            images: [...previousOgImages, image],
            url: `/v/${file.filecode}`,
            type: `article`,
        },
        alternates: {
            canonical: `/v/${file.filecode}`,
        },
    };
}

export default async function Video({ params }: PageProps) {
    const data = await doodstream.getFile({ file_code: params.id as string });
    const upstream = await doodstream.getUpstream();

    if (data.status !== 200) {
        return (
            <MessageBox title={data.msg} countdown={30} variant="error">
                <p className="text-center">
                    Something went wrong. Please try again later.
                </p>
            </MessageBox>
        );
    }

    const file = data.result[0];
const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: `${file.title} - ${SITENAME}`,
        thumbnailUrl: file.splash_img,
        description: `${file.title} di ${SITENAME} Video Bokep Indo Jepang Jav Barat Simontok Viral Terbaru Bocil Ngentot Jilbab Smp Mama Sma`,
        url: `https://bokepindo.pornub.lol/v/${file.filecode}`,
        embedUrl: `https://${upstream}/e/${file.filecode}`,
        uploadDate: new Date(
            file.uploaded + ".000Z"
        ).toISOString(),
        interactionStatistic: {
            '@type': `InteractionCounter`,
                userInteractionCount: `${file.views}`,
            interactionType: {
                '@type': `WatchAction`,
                target: `https://bokepindo.pornub.lol/v/${file.filecode}`
            }  
        }
        }
        const jsonLd2 = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: `${file.title} - ${SITENAME}`,
        image: file.splash_img,
        description: `${file.title} di ${SITENAME} Video Bokep Indo Jepang Jav Barat Simontok Viral Terbaru Bocil Ngentot Jilbab Smp Mama Sma`,
        url: `https://bokepindo.pornub.lol/v/${file.filecode}`,
        datePublished: new Date(
            file.uploaded + ".000Z"
        ).toISOString(),
        publisher: {
            '@type': 'Organization',
            name: `${SITENAME}`,
            logo: 'https://bokepindo.pornub.lol/favicon.ico'},
            author: {
                '@type': 'Person',
                name: 'admin',
                url: 'https://bokepindo.pornub.lol'
              },
        interactionStatistic: {
            '@type': `InteractionCounter`,
                userInteractionCount: `${file.views}`,
            interactionType: {
                '@type': `ReadAction`,
                target: `https://bokepindo.pornub.lol/v/${file.filecode}`
            }  
        }
        }
        const jsonLd3 = {
            '@context': 'https://schema.org', 
            '@type': 'Book', 
            'name': `${file.title} - ${SITENAME}`, 
            'aggregateRating': {
            '@type': 'AggregateRating',	
                'ratingValue': '5',	
                'ratingCount': `${file.views}`,	
                'bestRating': '5',	
                'worstRating': '1' }
        }
    return (
        <div className="grid col-span-full gap-4 md:gap-4 md:mx-10">
        <section>
        {/* Add JSON-LD to your page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd2) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd3) }}
        />
        {/* ... */}
        </section>
            <iframe
                className="w-full h-[30vh] md:h-[55vh] lg:h-[70vh]"
                src={`https://${upstream}/e/${file.filecode}`}
                scrolling="no"
                title={file.title}
                frameBorder={0}
                allowFullScreen={true}
            ></iframe>
            <Card className="mx-2 mb-8">
                <CardHeader>
                    <CardTitle className="text-xl md:text-3xl font-bold">
                        {file.title}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-flow-row lg:grid-flow-col">
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="flex gap-2 items-center">
                                        <LapTimerIcon className="size-4 md:size-5"></LapTimerIcon>
                                        Duration
                                    </TableCell>
                                    <TableCell>
                                        {humanDuration(file.length)}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="flex gap-2 items-center">
                                        <RocketIcon className="size-4 md:size-5"></RocketIcon>
                                        Views
                                    </TableCell>
                                    <TableCell>{file.views}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="flex gap-2 items-center">
                                        <CubeIcon className="size-4 md:size-5"></CubeIcon>
                                        Size
                                    </TableCell>
                                    <TableCell>
                                        {humanSize(file.size)}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="flex gap-2 items-center">
                                        <CalendarIcon className="size-4 md:size-5"></CalendarIcon>
                                        Uploaded
                                    </TableCell>
                                    <TableCell>
                                        {new Date(
                                            file.uploaded + ".000Z"
                                        ).toLocaleString()}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        <div className="grid grid-cols-2 gap-2 mt-8 md:grid-cols-3 lg:grid-cols-2 lg:ml-4 lg:my-4">
                            <Link
                                href={`https://${upstream}/d/${file.filecode}`}
                                className="col-span-full md:col-auto lg:col-span-full"
                            >
                                <Button className="w-full">
                                    <DownloadIcon className="size-4 me-1 mb-1"></DownloadIcon>
                                    Download
                                </Button>
                            </Link>
                            <CopyButton className="bg-secondary lg:col-span-full">
                                <Share1Icon className="size-4 me-1 mb-0.5"></Share1Icon>
                                Share
                            </CopyButton>
                            <LikeButton
                                className="lg:col-span-full"
                                useButton={true}
                                file={file}
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>
            <p>Video bokep indo terbaru viral {file.title} di {SITENAME} Video Bokep Indo Jepang Jav Barat Simontok Viral Terbaru Bocil Ngentot Jilbab Smp Mama Sma korea china tante live paksa ngentot abg cewek pelajar pijat Hijab Abg Colmek Film Tante Hot Twitter Asia Download Live stw situs indonesia nonton link sd crot playbokep simontok bokepin montok baru perawan anak kecil telegram selingkuh ojol cantik gay vidio lokal artis pelajar janda streaming jepang barat korea japan jav cina japanese china rusia arab india thailand hd anime hentai bokepind gudang avtub pijat sotwe rumah pemerkosaan inggris xpanas pure tobrut vcs ngintip binor remaja yandex update perselingkuhan wiki raja full com porno indoh</p>
            <h2 className="text-2xl font-bold text-center my-4">
                Related Video {file.title}
            </h2>
            <SearchCardList query={file.title.split(" ")[2]} />
        </div>
    );
}