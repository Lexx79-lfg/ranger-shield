import type { ReactNode } from 'react';
import { Header } from './Header';
export function Layout({children}:{children:ReactNode}){return <div className="min-h-screen bg-slate-950 text-slate-100"><div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,.18),transparent_32%),linear-gradient(180deg,#0f172a,#020617)]"/><Header/><main className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">{children}</main></div>}
