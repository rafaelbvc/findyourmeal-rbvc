import { Dispatch, SetStateAction, useState } from "react";
import axios from "axios";

export default function useReservation() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createReservation = async ({
    slug,
    partySize,
    day,
    time,
    bookerFirstName,
    bookerLastName,
    bookerPhone,
    bookerEmail,
    bookerOccasion,
    bookerRequest,
    setBook,
  }: {
    slug: string;
    partySize: string;
    day: string;
    time: string;
    bookerFirstName: string;
    bookerLastName: string;
    bookerPhone: string;
    bookerEmail: string;
    bookerOccasion: string;
    bookerRequest: string;
    setBook: Dispatch<SetStateAction<boolean>>;
  }) => {
    console.log({ day, slug, time, partySize });
    setLoading(true);
    try {
      const response = await axios.post(
        `https://rvbvcopentablenextjs.vercel.app/api/restaurant/${slug}/reserve`,
        // "https://localhost:3000",
        {
          bookerFirstName,
          bookerLastName,
          bookerPhone,
          bookerEmail,
          bookerOccasion,
          bookerRequest,
        },
        {
          params: {
            day,
            time,
            partySize,
          },
        }
      );
      setLoading(false);
      setBook(true);
      return response.data;
    } catch (error: any) {
      setLoading(false);
      setError(error.response.data.errorMessage);
    }
  };

  return { loading, error, createReservation };
}
