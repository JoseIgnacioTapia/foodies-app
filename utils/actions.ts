"use server";

import { Meal } from "@/types";
import { saveMeal } from "./meals";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

function isInvalidText(text: string | null | undefined): boolean {
  return !text || text.trim() === "";
}

export type ShareMealResult = {
  message: string | null;
};

export async function shareMeal(
  prevState: ShareMealResult,
  formData: FormData
): Promise<ShareMealResult> {
  const meal: Meal = {
    title: formData.get("title") as string,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,
    image: formData.get("image") as File,
    creator: formData.get("name") as string,
    creator_email: formData.get("email") as string,
    slug: undefined,
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    !(meal.image instanceof File) ||
    meal.image.size === undefined ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid input",
    };
  }

  await saveMeal(meal as Meal);
  revalidatePath("/meals");
  redirect("/meals");
}
