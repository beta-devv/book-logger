"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useEffect } from "react";
export default function Home() {
  // const { isLoading, data } = useQuery({
  //   queryKey: ["books"],
  //   queryFn: () =>
  //     axios.get("https://openlibrary.org/search.json?q=the lord of the rings"),
  // });
  useEffect(() => {
    axios.get("https://openlibrary.org/search.json?q=the lord of the rings");
  }, []);
  // if (isLoading) <div className="">Loading</div>;
  return <main>{JSON.stringify("")}</main>;
}
