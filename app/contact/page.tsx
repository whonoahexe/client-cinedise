const contact = () => {
    return (
        <>
            <div className="relative w-full">
                <div className="grid grid-cols-1 gap-6 mx-[58px] mt-20 sm:grid-cols-12 h-full">
                    <p className="text-white text-8xl col-span-12 mt-32">
                        <span className='bg-accent-secondary rounded-full px-12'>CONTACT</span>
                    </p>
                    <div className="col-span-6 flex flex-col gap-2 mt-32 px-2">
                        <span className="material-symbols-outlined text-6xl text-white">chat_bubble</span>
                        <p className="text-6xl text-white">General Enquiries</p>
                        <div className="mt-4 text-white-secondary">
                            <p className="text-white-tertiary underline">broken.personal.1211@gmail.com</p>
                            <p className="text-white-tertiary underline">+91 86670979797</p>
                        </div>
                    </div>

                    <div className="col-span-6 flex flex-col gap-2 mt-32 px-2">
                        <span className="material-symbols-outlined text-6xl text-white">chat_bubble</span>
                        <p className="text-6xl text-white">New Business</p>
                        <div className="mt-4 text-white-secondary">
                            <p className="text-white-tertiary underline">broken.contact.1211@gmail.com</p>
                            <p className="text-white-tertiary underline">WhatsApp: +91 86670979797</p>
                        </div>
                    </div>

                    <p className="col-span-10 text-2xl text-accent-primary mt-40">Calling all freelance collaborators! Animators, designers, artists, if you love the little things and want to do work that does good, reach out.</p>
                </div>
            </div>
        </>
    );
}
 
export default contact;
