import Reveal from "../util/Reveal";

interface Props {
    title: string;
    position: string;
    time: string;
    location: string;
}

export const EducationItem = ({
    title,
    position,
    time,
    location,
}: Props) => {
    return (
        <div className="mb-6 border-b pb-6 border-zinc-700">
            <div className="flex items-center justify-between mb-2">
                <Reveal>
                    <span className="font-bold text-xl">{title}</span>
                </Reveal>
                <Reveal>
                    <span>{time}</span>
                </Reveal>
            </div>

            <div className="flex items-center justify-between mb-4">
                <Reveal>
                    <span className="text-indigo-300 font-bold">{position}</span>
                </Reveal>
                <Reveal>
                    <span>{location}</span>
                </Reveal>
            </div>
        </div>
    );
}