// to define a file / function as a server action
"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { createReview } from "@/data/services/reviews";

// zod Schema
// import { ReviewSchema } from "@/data/zod/schemas/Review";

export async function addReviewAction(
    productId: string,
    data: { rating: number; text: string }
) {
    // "use server ";

    const session = await getServerSession(authOptions);

    if (!session) {
        throw new Error("Not authenticated!");
    }

    // zod validation
    // const result = ReviewSchema.safeParse(data);

    // if (!result.success) {
    //     const issues = result.error.flatten().fieldErrors;
    //     throw new Error(`Validation failed: ${JSON.stringify(issues)}`);
    // }

    const review = {
        ...data,
        username: session.user?.email,
        date: new Date().toISOString(),
    };

    const updatedReviews = await createReview(productId, review);
    return updatedReviews;
}