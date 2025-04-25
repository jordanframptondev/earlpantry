'use client';
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import EarlPantryLogo from "../../public/images/EarlPantry.svg";
import TomatoPlant from "@/components/TomatoPlant";
import Basket from "@/components/Basket";

export default function Harvest() {
    const [harvestedTomatoes, setHarvestedTomatoes] = useState([]);
    const [plantTomatoes, setPlantTomatoes] = useState([
        { id: 1, top: 120, left: 80 },
        { id: 2, top: 180, left: 40 },
        { id: 3, top: 140, left: 130 },
        { id: 4, top: 220, left: 120 },
        { id: 5, top: 260, left: 70 }
    ]);

    const basketRef = useRef(null);

    const handleDragStart = (e, id) => {
        e.dataTransfer.setData("tomatoId", id);
    };

    const handleDrop = (e) => {
        const id = parseInt(e.dataTransfer.getData("tomatoId"));
        const tomato = plantTomatoes.find(t => t.id === id);

        if (tomato) {
            setHarvestedTomatoes([...harvestedTomatoes, tomato]);
            setPlantTomatoes(plantTomatoes.filter(t => t.id !== id));
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <div className="flex flex-col h-dvh w-full md:justify-center items-center font-bb-modern relative bg-[#f5f5dc]">
            <div className='absolute min-w-[200px] md:min-w-[300px] top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-in-out'>
                <Image src={EarlPantryLogo} alt='Earl Pantry' width={300} height={300}/>
            </div>

            <h1 className="text-[60px] md:text-[80px] text-[#B2BC18] mt-32 md:mt-0 mb-8">
                HARVEST TIME!
            </h1>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full">
                <div className="relative h-[400px] w-[300px]">
                    <TomatoPlant />
                    {plantTomatoes.map(tomato => (
                        <div
                            key={tomato.id}
                            className="absolute cursor-grab active:cursor-grabbing"
                            style={{ top: `${tomato.top}px`, left: `${tomato.left}px` }}
                            draggable
                            onDragStart={(e) => handleDragStart(e, tomato.id)}
                        >
                            <svg width="50" height="50" viewBox="0 0 50 50">
                                <circle cx="25" cy="25" r="20" fill="red" stroke="black" strokeWidth="2" />
                                <path d="M25 5 L25 15" stroke="green" strokeWidth="3" />
                            </svg>
                        </div>
                    ))}
                </div>

                <div
                    ref={basketRef}
                    className="relative h-[200px] w-[250px]"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                >
                    <Basket />
                    {harvestedTomatoes.map((tomato, index) => (
                        <div
                            key={tomato.id}
                            className="absolute"
                            style={{
                                top: `${50 + (index % 3) * 25}px`,
                                left: `${80 + (index % 4) * 30}px`,
                                zIndex: 2
                            }}
                        >
                            <svg width="40" height="40" viewBox="0 0 50 50">
                                <circle cx="25" cy="25" r="20" fill="red" stroke="black" strokeWidth="2" />
                            </svg>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-6 text-center text-xl text-[#333]">
                {harvestedTomatoes.length === 0 ? (
                    <p>Drag the tomatoes into the basket!</p>
                ) : (
                    <p>You've harvested {harvestedTomatoes.length} tomatoes!</p>
                )}
            </div>
        </div>
    );
}
