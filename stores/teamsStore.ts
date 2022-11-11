import create from "zustand";
import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";

import { db } from "../utils";
import { IFB } from "./articleStore";

const collectionName = "members";
const membersCollectionRef = collection(db, collectionName);

export interface Member {
  firstname: string;
  lastname: string;
  dob: string;
  joinDate: string;
  img?: string;
  bio?: string;
  position: string[];
  contacts: any;
  role: "player" | "coach" | "management" | "staff";
  team:
    | "gazelle"
    | "women"
    | "swaras"
    | "age-grade"
    | "management"
    | "media"
    | "tech";
}

interface TeamStore {
  member: Member | IFB | undefined;
  members: Member[] | [];
  getMember: (id: string) => void;
  getMembers: () => void;
  addMember: (member: any) => Promise<void>;
  editMember: (memberId: string, member: any) => Promise<void>;
}

export const useTeamStore = create<TeamStore>((set) => ({
  member: {},
  members: [],

  // query single member
  getMember: async (id: string) => {
    const name = id.split("-");
    const q = query(
      membersCollectionRef,
      where("firstname", "==", name[0]),
      where("lastname", "==", name[1])
    );

    const querySnapshot = await getDocs(q);

    if (querySnapshot) {
      querySnapshot.forEach((doc) => {
        set({ member: { ...doc.data(), id: doc.id } });
      });
    } else {
      console.log("Something unexpected happened");
    }
  },

  // query all the articles
  getMembers: async () => {
    const squad: any = [];
    const q = query(membersCollectionRef, orderBy("firstname", "asc"));
    const querySnapshot = await getDocs(q);

    if (querySnapshot) {
      querySnapshot.forEach((doc) => {
        squad.push({ ...doc.data(), id: doc.id });
      });

      void set({ members: squad });
    } else {
      console.log("Unable to get members");
    }
  },

  // Creating an article
  addMember: async (member) => {
    const uId = `${member?.firstname}-${member?.lastname}`.toLowerCase();
    try {
      await setDoc(doc(db, collectionName, uId), member);
    } catch (error) {
      console.error("Error adding document");
    }
  },

  // Updating an article
  editMember: async (memberId, member) => {
    const articleRef = doc(db, collectionName, memberId);
    await updateDoc(articleRef, member);
  },
}));
