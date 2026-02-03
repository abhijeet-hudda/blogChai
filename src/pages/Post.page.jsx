import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);
    //console.log("userdata",userData)

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    console.log(post)
                    setPost(post);}
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    console.log("post ",post);

    return post ? (
        <div className="w-full bg-[#f4f2ee] text-slate-900">
            <Container>
                <div className="py-10 md:py-14">
                    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                                Featured story
                            </p>
                            <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                                {post.title}
                            </h1>
                        </div>
                        {isAuthor && (
                            <div className="flex flex-wrap items-center gap-3">
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button bgColor="bg-slate-900" className="px-6">
                                        Edit
                                    </Button>
                                </Link>
                                <Button bgColor="bg-red-500" onClick={deletePost}>
                                    Delete
                                </Button>
                            </div>
                        )}
                    </div>
                    <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-2 shadow-[0_24px_70px_-45px_rgba(15,23,42,0.55)] backdrop-blur">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="h-[280px] w-full rounded-2xl object-cover md:h-[420px]"
                        />
                    </div>
                    <div className="mt-8 rounded-3xl border border-white/70 bg-white/90 p-6 shadow-[0_24px_70px_-45px_rgba(15,23,42,0.4)] backdrop-blur md:p-8">
                        <div className="browser-css text-slate-700">
                            {parse(post.content)}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    ) : null;
}
