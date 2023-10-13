const bears = [
    {
        type: "polar bear ",
        location: "arctic",
        color: "white",
        diet: ["ringed seals", "walrus", "narwhals", "beluga"],
        endangered: true,
    },
    {
        type:"grizzly bear",
        location:"Alaska, Wyoming, Montana, Idaho ",
        color: "brown ",
        diet: ["fruits", "roots", "grasses", "nuts"],
        endangered: false,
    },
    {
        type: "panda bear",
        location: "Asia",
        color: "black and white",
        diet: ["bamboo shoots", "leaves", "vegetation", "fish"],
        endangered: false,
    },
    {
        type: "black bear ",
        location:"Pacific Northwest's forests and mountains ",
        color: " black",
        diet: ["roots", "fish", "berries", "insects"],
        endangered: false,
    },
];




bears.forEach((bear)=> console.log(bear.type));
bears.forEach((bear)=> bear.diet.forEach((food) => console.log(food)) );

const food = bears.filter((bear) => bear.endangered !== true);
console.log(food);
