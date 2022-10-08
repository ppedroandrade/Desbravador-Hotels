import { useHttp } from "./useHttp";

export const useHotels = () => {
  const { GET } = useHttp();

  const imagesHotels = async () => {
    return await GET("nice/image-catalog/v2/hotels/106346");
  };

  return {
    imagesHotels,
  };
};
