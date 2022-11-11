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

import { db, formatDate } from "../utils";

export interface IFixture {
  uId: string;
  team: "gazelles" | "women" | "swaras" | "age-grade";
  opponent: string;
  competition: string;
  venue: string;
  home: boolean;
  played: boolean;
  impalaTeamList: {};
  opponentTeamList: {};
  impalaScores: {
    ht: string;
    ft: string;
    try: string;
    pen: string;
    con: string;
  };
  opponentScores: {
    ht: string;
    ft: string;
    try: string;
    pen: string;
    con: string;
  };

  kickOff: any;
  logo?: any;
}

export interface IFB {
  [field: string]: any;
}

const collectionName = "fixtures";
const fixtureCollectionRef = collection(db, collectionName);

interface FixturesStore {
  fixture: IFixture | IFB | undefined;
  fixtures: IFixture[];
  getFixture: (id: string) => void;
  getFixtures: () => void;
  addFixture: (fixture: any) => Promise<void>;
  editFixture: (fixtureId: string, fixture: any) => Promise<void>;
  deleteFixture: (fixtureId: string) => Promise<void>;
}
export const useFixtureStore = create<FixturesStore>((set) => ({
  fixture: undefined,
  fixtures: [],

  // query single fixture
  getFixture: async (id: string) => {
    const q = query(fixtureCollectionRef, where("uId", "==", id));

    const querySnapshot = await getDocs(q);

    if (querySnapshot) {
      querySnapshot.forEach((doc) => {
        set({ fixture: { ...doc.data(), id: doc.id } });
      });
    } else {
      console.log("Error fetching fixture");
    }
  },

  // query all the fixtures
  getFixtures: async () => {
    const games: any = [];
    const q = query(fixtureCollectionRef, orderBy("kickOff", "asc"));
    const querySnapshot = await getDocs(q);

    if (querySnapshot) {
      querySnapshot.forEach((doc) => {
        games.push({ ...doc.data(), id: doc.id });
      });

      void set({ fixtures: games });
    } else {
      console.log("Error fetching fixtures");
    }
  },

  // Creating an fixture
  addFixture: async (fixture) => {
    const temp = fixture?.opponent?.toLowerCase().split(" ").join("-");
    const uId = `${temp}-${new Date(
      fixture?.kickOff.seconds * 1000
    ).getDate()}-${new Date(
      fixture?.kickOff.seconds * 1000
    ).getMonth()}-${new Date(fixture?.kickOff.seconds * 1000).getFullYear()}`;

    // format uId to impala-rugby-10-11-2022

    try {
      await setDoc(doc(db, collectionName, uId), {
        ...fixture,
        label: uId,
      });
    } catch (error) {
      console.error("Error adding new fixture");
    }
  },

  // Updating an fixture
  editFixture: async (fixtureId, fixture) => {
    const fixtureRef = doc(db, collectionName, fixtureId);
    await updateDoc(fixtureRef, fixture);
  },

  // Deleting and fixture
  deleteFixture: async (fixtureId) => {
    await deleteDoc(doc(db, collectionName, fixtureId));
  },
}));
