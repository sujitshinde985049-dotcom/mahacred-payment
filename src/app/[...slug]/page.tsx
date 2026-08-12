import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentPage } from "@/components/content-page";
import { pages } from "@/lib/content";
export function generateStaticParams(){return Object.keys(pages).filter(x=>!x.startsWith("legal/")&&x!=="contact").map(x=>({slug:x.split("/")}));}
export async function generateMetadata({params}:{params:Promise<{slug:string[]}>}):Promise<Metadata>{const {slug}=await params;const key=slug.join("/");const p=pages[key];if(!p)return{};return{title:p.title,description:p.intro,alternates:{canonical:`/${key}`}}}
export default async function Page({params}:{params:Promise<{slug:string[]}>}){const {slug}=await params;const key=slug.join("/");const data=pages[key];if(!data)notFound();return <ContentPage data={data} slug={key}/>}
