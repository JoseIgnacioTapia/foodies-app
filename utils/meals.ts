import sql from "better-sqlite3";
import { resolve } from "path";
import slugify from "slugify";
import xss from "xss";

import { Meal } from "@/types";
import MealItem from "../components/meals/meal-item";

const db = sql("meals.db");

export async function getMeals(): Promise<Meal[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const mealsData = db.prepare("SELECT * FROM meals").all();

  //   throw new Error("Loading meals failed");

  return mealsData as Meal[];
}

export function getMeal(slug: string): Meal | undefined {
  const result = db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
  return result as Meal | undefined;
}

export function saveMeal(meal: Meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
}
