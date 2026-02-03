import React from "react";
import {Container,Logo,LogoutBtn} from "../index"
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) =>state.auth?.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
    ];
    return (
        <header className="sticky top-0 z-50 border-b border-white/70 bg-white/80 backdrop-blur">
        <Container>
            <nav className="flex items-center gap-6 py-3">
            <div className="flex items-center gap-3">
                <Link to="/" className="flex items-center gap-2">
                <Logo width="64px" />
                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                    Chai Blog
                </span>
                </Link>
            </div>
            <ul className="ml-auto flex items-center gap-2">
                {navItems.map((item) =>
                item.active ? (
                    <li key={item.name}>
                    <button
                        onClick={() => navigate(item.slug)}
                        className="rounded-full border border-transparent px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-slate-200 hover:bg-slate-50 hover:text-slate-900"
                    >
                        {item.name}
                    </button>
                    </li>
                ) : null
                )}
                {authStatus && (
                <li className="ml-2">
                    <div className="rounded-full border border-slate-200 bg-slate-900/90 px-1 py-1 text-white shadow-[0_10px_30px_-15px_rgba(15,23,42,0.6)]">
                        <LogoutBtn />
                    </div>
                </li>
                )}
            </ul>
            </nav>
        </Container>
        </header>
    );
}
export default Header;
