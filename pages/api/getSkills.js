import { NextApiRequest, NextApiResponse} from "next";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";

const query = groq

export default async function handler(req, res) {
  const skills = await sanityClient.fetch(query);
  res.status(200).json({ skills})
};