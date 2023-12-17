import sql from "better-sqlite3";
import { resolve } from "path";

import { Meal } from "@/types";

const db = sql("meals.db");

export async function getMeals(): Promise<Meal[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const mealsData = db.prepare("SELECT * FROM meals").all();

  return mealsData as Meal[];
}
