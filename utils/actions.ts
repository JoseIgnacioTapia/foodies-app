"use server";

import { Meal } from "@/types";
import { saveMeal } from "./meals";
import { redirect } from "next/navigation";

export async function shareMeal(formData: FormData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    slug: undefined,
  };

  await saveMeal(meal as Meal);
  redirect("/meals");
}
