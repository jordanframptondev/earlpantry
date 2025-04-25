import Image from "next/image";
import EarlPantryLogo from "../public/images/EarlPantry.svg";
import EarlHorseLogo from "../public/images/EarlHorse.svg";


export default function Home() {
    return (
        <div className={"flex flex-col h-dvh w-full md:justify-center items-center bg-[#B2BC18] text-[#FFFD00] font-bb-modern relative"}>
            <div className={'absolute min-w-[200px] md:min-w-[300px] top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-in-out'}>
                <Image src={EarlPantryLogo} alt={'Earl Horse'} width={300} height={300}/>
            </div>
            <div className={"coming-soon-content flex flex-col md:flex-row transition-all duration-1000 ease-in-out mt-[250px] md:mt-0"}>
                <div className={'self-center md:px-0 md:mr-4 w-[225px] lg:w-[300px] xl:w-[350px]'}>
                    <Image src={EarlHorseLogo} alt={'Earl Horse'} width={350} height={350}/>
                </div>
                <div
                    className={"hidden md:flex md:flex-col justify-end md:text-[80px] md:leading-[65px] lg:text-[105px] lg:leading-[85px] xl:text-[120px] xl:leading-[100px] whitespace-nowrap"}>
                    <p>SOMETHING&#39;S</p>
                    <p>COMING SOON</p>
                </div>
                <div className={"md:hidden flex flex-col text-[50px] items-center justify-center mt-12"}>
                    <p className={"leading-[42px]"}>GOODS</p>
                    <p className={"leading-[42px]"}>COMING</p>
                    <p className={"leading-[42px]"}>SOON</p>
                </div>
            </div>
        </div>
    );
}
