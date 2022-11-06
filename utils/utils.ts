import { format, formatDistance, subDays } from "date-fns";

export const scrollFxn = (direction: string) => {
  // Get direction and current position and build logic
};

interface dateProps {
  date: Date;
  option?: string;
}
export const formatDate = (date: number, option?: string) => {
  if (option) {
    return format(date, option);
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
