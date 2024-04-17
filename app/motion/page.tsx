'use client';

import { useState } from "react";

import Button from "@/components/core/Button";
import WorkContainer from "@/components/page/WorkContainer";
import WorkPath from "@/components/page/WorkPath";
import WorkCard from "@/components/page/WorkCard";

import cards from "../data.json";

const motion = () => {
    const categories = ['2D', '3D'];
    const [category, setCategory] = useState<number>(0);

    const filteredCards = cards.filter(card => card.field === "Motion" && card.category === categories[category]);

    return (
        <WorkContainer>
            <WorkPath />

            <div className="col-span-full flex gap-3 mt-[68px]">
                {categories.map((tab, index) => (
                    <Button key={index} text={tab} isActive={category === index} onClick={() => setCategory(index)} />
                ))}
            </div>

            {filteredCards.map((card, index) => (
                <WorkCard key={index} title={card.title} description={card.description} cols={card.cols} className="mt-12" />
            ))}
        </WorkContainer>
    );
}
 
export default motion;
