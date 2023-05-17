import { useState } from "react";
import axios from "axios";
import { Time } from "../utils/convertToDisplayTime";

export default function useAvailabilities() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState<{ time: Time; available: boolean }[] | null>(
    null
  );

  const fetchAvailabilities = async ({
    slug,
    partySize,
    day,
    time,
  }: {
    slug: string;
    partySize: string;
    day: string;
    time: string;
  }) => {
    console.log({ day, slug, time, partySize });
    setLoading(true);
    try {
      const response = await axios.get(
        `https://rvbvcopentablenextjs.vercel.app//api/restaurant/${slug}/availability`,
        // `https://localhost:3000/api/restaurant/${slug}/availability`,
        {
          params: {
            day,
            time,
            partySize,
          },
        }
      );
      setLoading(false);
      setData(response.data);
    } catch (error: any) {
      setLoading(false);
      setError(error.response.data.errorMessage);
    }
  };

  return { loading, data, error, fetchAvailabilities };
}
