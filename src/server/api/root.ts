import { postRouter } from "~/server/api/routers/post";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  hello: publicProcedure.query(async opts => {
    return "Hello bitch"
  })
});

// export type definition of API
export type AppRouter = typeof appRouter;
