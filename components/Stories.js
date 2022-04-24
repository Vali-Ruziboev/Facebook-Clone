import StoryCard from "./StoryCard";

const stories = [
    {
        name:"Vali Ruziboev",
        src:"https://avatars.githubusercontent.com/u/89704608?v=4",
        profile:"https://avatars.githubusercontent.com/u/89704608?v=4",
    },
    {
        name:"Elon Mask",
        src:"https://links.papareact.com/4zn",
        profile:"https://links.papareact.com/kxk",
    },
    {
        name:"Jeff Bezoz",
        src:"https://links.papareact.com/k2j",
        profile:"https://links.papareact.com/f0p",
    },
    {
        name:"Mark Zuckerberg",
        src:"https://links.papareact.com/xql",
        profile:"https://links.papareact.com/snf",
    },
    {
        name:"Bill Gates",
        src:"https://links.papareact.com/4u4",
        profile:"https://links.papareact.com/zvy",
    },
]

const Stories = () => {
    return (  
        <div className="flex justify-center space-x-3 mx-auto ">
            {/* Stortcard */}
            {stories.map(story=>{
                return(
                    <StoryCard 
                    key={story.src}
                    name={story.name} 
                    src={story.src} 
                    profile={story.profile} />
                )
            })}
        </div>
    );
}

export default Stories;