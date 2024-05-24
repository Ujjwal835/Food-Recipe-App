"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

export default function RecipeDetailsItem({ getRecipeDetails }) {
  return (
    <CardContainer className="inter-var bg-black/80 text-white">
      <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white dark:text-white"
        >
          {getRecipeDetails?.name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-white text-lg font-bold max-w-sm mt-2 dark:text-neutral-300 "
        >
          {getRecipeDetails.cuisine}
        </CardItem>
        <div className="flex">
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src={getRecipeDetails?.image}
              alt={getRecipeDetails?.name}
              className="w-4/5 rounded object-cover"
            />
          </CardItem>
          <div>
            <h1 className="text-xl font-bold">Ingredients</h1>
            <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700">
              {getRecipeDetails?.ingredients.map((item) => (
                <li className="text-white text-nowrap">{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <CardItem
          translateZ={20}
          className="px-1 py-2 rounded-xl text-lg font-normal dark:text-white"
        >
          MealType: {getRecipeDetails?.mealType}
        </CardItem>
        <CardItem
          translateZ={20}
          className="px-1 py-2 rounded-xl text-lg font-normal dark:text-white"
        >
          Rating: {getRecipeDetails?.rating}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
