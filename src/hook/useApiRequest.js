import { useState } from "react";
import BasicProvider from "../services/basicProvider";

const useApiRequest = () => {
  const [loading, setLoading] = useState(false);

  const fetchData = async (
    url,
    navigate,
    method = "GET",
    data = null,

  ) => {
    setLoading(true);
    try {
      const provider = new BasicProvider(url, navigate, true);
      const response =
        method === "GET"
          ? await provider.getRequest()
          : method === "POST"
            ? await provider.postRequest(data)
            : method === "PATCH"
              ? await provider.patchRequest(data)
              : null;

      if (response?.status) {
        return response;
      } else {
        console.log("sfagaga");
      }
    } catch (err) {
      console.log("sfagaga");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };

  return { loading, setLoading, fetchData };
};

export default useApiRequest;
