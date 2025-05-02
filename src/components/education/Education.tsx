import { SectionHeader } from "../util/SectionHeader";
import { EducationItem } from "./EducationItem";

export const Education = () => {
    return (
        <section className="section-wrapper" id="education">
            <SectionHeader title="Education" dir="l" />
            {education.map((item) => (
                <EducationItem key={item.title} {...item} />
            ))}
        </section>
    );
}

const education = [
    {
        title: "B.Tech (Civil Engineering)",
        position: "Jain College of Engineering & Technology, Hubballi Affiliated to Visvesvaraya Technological University (VTU)",
        time: "2019 to 2023",
        location: "Hubballi - Karnataka",            
    },
    {
        title: "Pre-University Course (Science Stream)",
        position: "Smt. Vidya P Hanchinmani Pre-University Independent Science College, Dharwad",
        time: "2017 to 2019 ",
        location: "Dharwad - Karnataka",
    },
    {
        title: "Secondary School (Class 10 – CBSE) ",
        position: "JSS Shri Manjunatheshwara Central School, Dharwad",
        time: "2017 ",
        location: "Dharwad - Karnataka",
    },
];