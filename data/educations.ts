type Education = {
    title: string,
    degree: string,
    period: [Date, Date?]
}

const education: Education[] = [
    {
        title: "Pohang University of Science and Technology (POSTECH)",
        degree: "Bachelor",
        period: [new Date("2014/03/01"), undefined]
    }
]

export default education;