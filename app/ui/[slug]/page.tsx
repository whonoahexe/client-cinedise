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
        </WorkContainer>
    );
}
 
export default Page;
