import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

import classes from "./page.module.css";
import { getMeal } from "@/utils/meals";

export async function generateMetadata({
  params,
}: {
  params: { mealSlug: string };
}) {
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    return notFound();
  }

  return {
    title: meal?.title,
    description: meal?.summary,
  };
}

function MealDetailsPage({ params }: { params: { mealSlug: string } }) {
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    return notFound();
  }

  meal.instructions = meal?.instructions.replace(/\n/g, "<br />");
  const imageSrc = meal?.image as string;

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={imageSrc} alt={meal?.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal?.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal?.creator_email}`}>{meal?.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}

export default MealDetailsPage;
