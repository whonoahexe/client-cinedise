import { Burger } from "../svg";

const Nav = () => {
    return (
        <>
            <div className="fixed top-[69px] right-[69px] cursor-pointer z-50">
                <Burger />
            </div>
        </>
    );
}
 
export default Nav;
