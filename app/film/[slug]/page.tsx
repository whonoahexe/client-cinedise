import WorkContainer from "@/components/page/WorkContainer";
import WorkNav from "@/components/page/WorkPath";

interface PageProps {
    params: {
        slug: string;
    };
}

const Page = ({ params }: PageProps) => {
    return (
        <WorkContainer>
            <WorkNav />

            <div className="col-span-full">
                <div className="w-full aspect-video bg-black-tertiary rounded-[22px] mt-16" />

                
                <div className="flex flex-col gap-2 mt-6">
                    <p className="text-[45px] text-white"><span className="cursor-pointer tracking-[-0.08em]">Title One</span></p>
                    <p className="text-[18px] text-white">hehehehehe</p>
                </div>
            </div>
        </WorkContainer>
    );
}
 
export default Page;
