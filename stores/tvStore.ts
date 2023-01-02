import create from "zustand";

// youtube API config
const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY; // SR-Key
const channelID = process.env.NEXT_PUBLIC_CHANNEL_ID; //TGC
const videoCount = 50;
const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${videoCount}`;

interface TvStore {
  video: any;
  videos: any[];
  getVideo: (id: string) => void;
  getVideos: () => void;
}
export const useTvStore = create<TvStore>((set) => ({
  video: undefined,
  videos: [],
  // query single video
  getVideo: async (id: string) => {},

  // query all the videos
  getVideos: async () => {
    let response = await fetch(url);
    if (!response.ok) {
      console.log(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    void set({ videos: data["items"] });
  },
}));
