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
                {card && (
                    <>
                        <div className="w-full aspect-auto bg-black-tertiary rounded-[22px] mt-16">
                            <img src={`/${card.showImg}`} alt="Thumbnail" className="w-full h-full object-cover rounded-[22px]" />
                        </div>

                        {card.showImg2 && (
                            <div className="w-full aspect-auto bg-black-tertiary rounded-[22px] mt-16">
                                <img src={`/${card.showImg2}`} alt="Thumbnail" className="w-full h-full object-cover rounded-[22px]" />
                            </div>
                        )}

                        {card.showImg3 && (
                            <div className="w-full aspect-auto bg-black-tertiary rounded-[22px] mt-16">
                                <img src={`/${card.showImg3}`} alt="Thumbnail" className="w-full h-full object-cover rounded-[22px]" />
                            </div>
                        )}

                        {card.showImg4 && (
                            <div className="w-full aspect-auto bg-black-tertiary rounded-[22px] mt-16">
                                <img src={`/${card.showImg4}`} alt="Thumbnail" className="w-full h-full object-cover rounded-[22px]" />
                            </div>
                        )}

                        <div className="flex flex-col gap-2 mt-6">
                            <p className="text-[45px] text-white"><span className="cursor-pointer tracking-[-0.08em]">{card.title}</span></p>
                            <p className="text-[18px] text-white">{card.description}</p>
                        </div>
                    </>
                )}
            </div>
        </WorkContainer>
    );
}
 
export default Page;
