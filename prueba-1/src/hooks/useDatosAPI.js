import { useState, useEffect } from "react";

export function useDatosAPI(url) {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return { data };
}
