import { format, formatDistance, subDays } from "date-fns";
import { logEvent } from "firebase/analytics";
import { analytics } from "./firebase";

export const scrollFxn = (direction: string) => {
  // Get direction and current position and build logic
};

interface dateProps {
  date: Date;
  option?: string;
}
export const formatDate = (date: number, option?: string) => {
  if ((option && option?.includes("/")) || option?.includes("-")) {
    return format(date, option);
  } else if (option === "long") {
    return new Date(date).toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } else if (option === "time") {
    return format(date, "HH:mm");
  } else {
    return formatDistance(
      subDays(date ? date : null, 0),
      new Date(),
      {
        addSuffix: true,
      }

      // x days ago
    );
  }
};

export const eventLogger = ({ payload }: any) => {
  analytics && logEvent(analytics, { ...payload });
};

export const replacer = (value: string) => {
  return value
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&");
};
