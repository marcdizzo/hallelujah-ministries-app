import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const appApi = createApi({
    reducerPath: "appApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),

    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (user) => ({
                url:"/users/signup",
                method: "POST",
                body: user,
            })
        }),
        login: builder.mutation({
            query: (user) => ({
                url: "/users/login",
                method: "POST",
                body: user,
            })
        }),
         // creating product
         createSermon: builder.mutation({
            query: (sermon) => ({
                url: "/sermons",
                body: sermon,
                method: "POST",
            }),
        }),

        deleteSermon: builder.mutation({
            query: ({ sermon_id, user_id }) => ({
                url: `/sermons/${sermon_id}`,
                body: {
                    user_id,
                },
                method: "DELETE",
            }),
        }),

        updateSermon: builder.mutation({
            query: (sermon) => ({
                url: `/sermons/${sermon.id}`,
                body: sermon,
                method: "PATCH",
            }),
        }),
          // creating product
          createDevotion: builder.mutation({
            query: (devotion) => ({
                url: "/devotions",
                body: devotion,
                method: "POST",
            }),
        }),

        deleteDevotion: builder.mutation({
            query: ({ devotion_id, user_id }) => ({
                url: `/devotions/${devotion_id}`,
                body: {
                    user_id,
                },
                method: "DELETE",
            }),
        }),

        updateDevotion: builder.mutation({
            query: (devotion) => ({
                url: `/devotions/${devotion.id}`,
                body: devotion,
                method: "PATCH",
            }),
        }),
          // creating blog
          createBlog: builder.mutation({
            query: (blog) => ({
                url: "/blogs",
                body: blog,
                method: "POST",
            }),
        }),

        deleteBlog: builder.mutation({
            query: ({ blog_id, user_id }) => ({
                url: `/blogs/${blog_id}`,
                body: {
                    user_id,
                },
                method: "DELETE",
            }),
        }),

        updateBlog: builder.mutation({
            query: (blog) => ({
                url: `/blogs/${blog.id}`,
                body: blog,
                method: "PATCH",
            }),
        }),
    })
})

export const {
    useSignupMutation,
    useLoginMutation,
    useCreateSermonMutation,
    useDeleteSermonMutation,
    useUpdateSermonMutation,
    useCreateDevotionMutation,
    useDeleteDevotionMutation,
    useUpdateDevotionMutation,
    useCreateBlogMutation,
    useDeleteBlogMutation,
    useUpdateBlogMutation,
} = appApi;



export default appApi;