import create from "zustand";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";

import { db } from "../utils";
import { localArticles } from "../public/resources/resources";

export interface IArticle {
  id: number;
  title: string;
  headline: string;
  image_1: any;
  image_2: any;
  type: string;
  tags: string;
  author: string;
  created: string;
  posted: string;
  caption_1?: string;
  caption_2?: string;
  label: string;
}

const articlesCollectionRef = collection(db, "stories");

interface ArticlesStore {
  article: IArticle | {};
  articles: IArticle[];
  getArticle: (id: string) => void;
  getArticles: () => void;
  createArticle: (article: any) => Promise<void>;
  editArticle: (articleId: string, article: any) => Promise<void>;
  deleteArticle: (articleId: string) => Promise<void>;
}
export const useArticlesStore = create<ArticlesStore>((set) => ({
  article: {},
  articles: [],

  // query single article
  getArticle: async (id: string) => {
    const q = query(articlesCollectionRef, where("label", "==", id));

    const querySnapshot = await getDocs(q);

    if (querySnapshot) {
      querySnapshot.forEach((doc) => {
        set({ article: { ...doc.data(), id: doc.id } });
      });
    } else {
      console.log("Error fetching article");
    }
  },

  // query all the articles
  getArticles: async () => {
    const posts: any = [];
    const q = query(articlesCollectionRef, orderBy("created", "desc"));
    const querySnapshot = await getDocs(q);

    if (querySnapshot) {
      querySnapshot.forEach((doc) => {
        posts.push({ ...doc.data(), id: doc.id });
      });

      void set({ articles: posts });
    } else {
      console.log("Error fetching articles");
    }
  },

  // Creating an article
  createArticle: async (article) => {
    const uId =
      article.title.toLowerCase().split(" ").join("-") +
      "-" +
      new Date().getFullYear();
    console.log({ uId });

    try {
      await setDoc(doc(db, "stories", uId), {
        ...article,
        label: uId,
      });
    } catch (error) {
      console.error("Error creating new article");
    }
  },

  // Updating an article
  editArticle: async (articleId, article) => {
    const articleRef = doc(db, "stories", articleId);
    await updateDoc(articleRef, article);
  },

  // Deleting and article
  deleteArticle: async (articleId) => {
    await deleteDoc(doc(db, "stories", articleId));
  },
}));
