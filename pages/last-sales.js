import { volume } from "@cloudinary/url-gen/actions/videoEdit";
import React, { useState } from "react";
import { useEffect } from "react";
import useSWR from "swr";

const lastSalesPage = (props) => {
  const [sales, setSales] = useState(props.sales);
  const [isLoading, setIsLoading] = useState(false);

  const { data, error } = useSWR(
    "https://nextjs-course-52920-default-rtdb.firebaseio.com/sales.json"
  );

  useEffect(() => {
    if (data) {
      const transfrom = [];
      for (const key in data) {
        transfrom.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(data);
    }
  }, [data]);

  //   useEffect(() => {
  //     setIsLoading(true);
  // fetch("https://nextjs-course-52920-default-rtdb.firebaseio.com/sales.json")
  //   .then((response) => response.json)
  //   .them((data) => {
  //     const transfrom = [];
  //     for (const key in data) {
  //       transfrom.push({
  //         id: key,
  //         username: data[key].username,
  //         volume: data[key].volume,
  //       });
  //     }
  //     setSales(data)
  //     setIsLoading(false)
  //   })
  //   }, []);

  if (error) {
    return <h1>Failed to load</h1>;
  }

  if (!data && !sales) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - {sale.volume}
        </li>
      ))}
    </ul>
  );
};

export async function getStaticProps(context) {
 const respone = await  fetch('https://nextjs-course-52920-default-rtdb.firebaseio.com/sales.json')
 const data = respone.json()
      const transfromedSales = [];
      for (const key in data) {
        transfromedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }

      return {
        props: {
          sales: transfromedSales,
        },
        revalidate: 10,
      };
}

export default lastSalesPage;
