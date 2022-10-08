import { useCallback } from "react";
import httpInstance from "./intanceAxios";

export const useHttp = () => {
  const GET = useCallback(async (url) => {
    const response = await httpInstance.get(url);
    return response;
  }, []);

  return { GET };
};
