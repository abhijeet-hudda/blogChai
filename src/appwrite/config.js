import conf from "../config/conf";
import { Client, Databases, ID,Storage,Query } from "appwrite";

// export class Service{
//     client = new Client()
//     databases;
//     bucket;
//     constructor(){
//         this.client
//         .setEndpoint(conf.appwriteUrl)
//         .setProject(conf.appwriteProjecId);
//         this.databases = new Databases(this.client)
//         this.bucket = new Storage(this.client)
        
//     }
//     async createPost({title,slug,content,featuredImage,status,userId}){
//         try {
//             return await this.databases.createDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,{
//                 title,
//                 content,
//                 featuredImage,
//                 status,
//                 userId
//             }) 
//         } catch (error) {
//             throw error
//         }
//     }
//     async updatePost(slug,{title,content,featuredImage,status}){
//         try {
//             return await this.databases.createDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,{
//                 title,
//                 content,
//                 featuredImage,
//                 status,
//                 userId
//             }) 
//         } catch (error) {
//             throw error
//         }
//     }
//     async deletePost(slug){
//         try {
//             await this.databases.deleteDocument(
//                 conf.appwriteDatabaseId,
//                 conf.appwriteCollectionId,
//                 slug)
//             return true;
//         } catch (error) {
//             throw error
//         }
//     }
//     async getPost(slug){
//         try {
//             return await this.databases.getDocument(
//                 conf.appwriteDatabaseId,
//                 conf.appwriteCollectionId,
//                 slug)
//         } catch (error) {
//             throw error
//         }
//     }
//     async getPosts(quries = [Query.equal("status","active")]){
//         try {
//             return await this.databases.listDocuments(
//                 conf.appwriteDatabaseId,
//                 conf.appwriteCollectionId,
//                 quries,
//             )
//         } catch (error) {
//             throw error
//         }
//     }
//     async uploadFile(file){
//         try {
//             return await this.bucket.createFile(
//                 conf.appwriteBucketId,
//                 ID.unique(),
//                 file
//             )
            
//         } catch (error) {
//             throw error
//         }
//     }
//     async deleteFile(fileId){
//         try {
//             return await this.bucket.deleteFile(
//                 conf.appwriteBucketId,
//                 fileId
//             )
            
//         } catch (error) {
//             throw error
//         }
//     }
//     getFilePreview(fileId){
//         return this.bucket.getFilePreview(
//             conf.appwriteBucketId,
//             fileId
//         )
//     }

// }

// const service = new Service()
// export default service


export class Service{
    client = new Client();
    databases;
    bucket;
    
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,

                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                

            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }

    // file upload service

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}


const service = new Service()

export default service