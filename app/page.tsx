import { Arrow } from "@/components/svg";

export default function Home() {
    return (
        <div className="relative w-full h-full">
			{/* the reel goes below */}
            <div className="absolute w-full h-full sm:w-8/12 sm:h-full bg-black-secondary rounded-[22px] hidden sm:block" />

            <div className="absolute w-full h-full">
                <div className="grid grid-cols-1 gap-6 mx-[58px] h-full sm:grid-cols-12">
                    <div className="flex flex-col justify-end pb-10 sm:col-span-1">
                        <Arrow />
                    </div>

                    <div className="flex flex-col justify-end items-end gap-5 pb-10 sm:col-span-11">
                        <p className="text-[91px] text-right leading-[102px] tracking-[-0.08em] text-white-primary sm:text-[91px] sm:leading-[102px] sm:tracking-[-0.08em]">
                            We design everything <br /> you 
                            <span className="inline-block bg-accent-secondary rounded-full px-2 ml-8 mt-1">
                                think of.
                            </span>
                        </p>
                        <p className="text-4xl text-right leading-[44px] tracking-[-0.08em] text-accent-primary">cinedise.studio</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
