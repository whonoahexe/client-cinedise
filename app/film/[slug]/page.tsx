import WorkContainer from "@/components/page/WorkContainer";
import WorkNav from "@/components/page/WorkPath";

import cards from "../../data.json";

interface PageProps {
    params: {
        slug: string;
    };
}

const Page = ({ params }: PageProps) => {
    const card = cards.find(card => String(card.id) === params.slug);

    return (
        <WorkContainer>
            <WorkNav />

            <div className="col-span-full">
                <div className="w-full aspect-video bg-black-tertiary rounded-[22px] mt-16">
                    <iframe width="full" height="full" src={card?.show} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="w-full aspect-video rounded-[22px]" />
                </div>
                
                {card && (
                    <div className="flex flex-col gap-2 mt-6">
                        <p className="text-[45px] text-white"><span className="cursor-pointer tracking-[-0.08em]">{card.title}</span></p>
                        <p className="text-[18px] text-white">{card.description}</p>
                    </div>
                )}
            </div>
        </WorkContainer>
    );
}
 
export default Page;
