import React from "react";

import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/utils/meals";

async function MealsPage() {
  const meals = await getMeals();
  console.log(meals);

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipes</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}

export default MealsPage;
