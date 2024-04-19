'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

import Button from "@/components/core/Button";
import WorkContainer from "@/components/page/WorkContainer";
import WorkPath from "@/components/page/WorkPath";
import WorkCard from "@/components/page/WorkCard";

import cards from "../data.json";
import { titleToSlug } from "@/utils";

const graphic = () => {
    const router = useRouter();
    const categories = ['Branding', 'Illustration', 'Advertisement'];
    const [category, setCategory] = useState<number>(0);

    const filteredCards = cards.filter(card => card.field === "Graphic" && card.category === categories[category]);

    return (
        <WorkContainer>
            <WorkPath />

            <div className="col-span-full flex gap-3 mt-[68px]">
                <div className="border-[0.5px] border-white-primary rounded-full">
                    {categories.map((tab, index) => (
                        <Button key={index} color="secondary" text={tab} isActive={category === index} onClick={() => setCategory(index)} />
                    ))}
                </div>
            </div>

            {filteredCards.map((card, index) => (
                <WorkCard 
                    key={index} 
                    title={card.title} 
                    description={card.description} 
                    image={card.image}
                    cols={card.cols} 
                    className="mt-12"
                    onClick={() => {
                        router.push('/graphic/' + titleToSlug(card.title));
                    }}
                />
            ))}
        </WorkContainer>
    );
}
 
export default graphic;
