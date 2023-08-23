import express from "express";
import * as dotenv from "dotenv";
import OpenAi from "openai";

dotenv.config();

const router = express.Router();

const openai = new OpenAi({
  apiKey: process.env.OPENAI_API_KEY,
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;
    const respones = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      respone_format: "b64_json",
    });

    const image = respones.data.data[0].b64_josn;

    res.status(200).json({ photo: image });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Somgething went wrong" });
  }
});

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Hello from Dall.E Routes" });
});

export default router;
