"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from 'next-auth/react';
// import { Session } from 'next-auth';
import { ReactNode, useState } from "react";

interface Props {
    children: ReactNode,
    session: any // @todo - Improve the type info
}

export default function Providers({ children, session }: Props) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <SessionProvider session={session}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </SessionProvider>
    );
}