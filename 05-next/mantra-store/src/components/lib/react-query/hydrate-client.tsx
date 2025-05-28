"use client";

import {
    HydrationBoundary,
    HydrationBoundaryProps,
} from "@tanstack/react-query";

type Props = HydrationBoundaryProps & {
    children: React.ReactNode;
};

export default function HydrateClient({ children, ...props }: Props) {
    return <HydrationBoundary {...props}>{children}</HydrationBoundary>;
}