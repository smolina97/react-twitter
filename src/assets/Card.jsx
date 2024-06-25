import { Button } from "@material-tailwind/react";
import { useState } from "react";


export function Card ({username, name}){

    const [isFollowing, setFollowing] = useState(false)
    const handleFollowing = () => setFollowing(!isFollowing)
        
    const [isHovering, setIsHovering] = useState(false);
    const textFollowing = isFollowing
      ? isHovering ? "Dejar de seguir" : "Siguiendo"
      : "Seguir";

    const buttonFollowing = `rounded-full inline-block text-center w-40 ${isFollowing ? 'bg-blue-500/40 hover:bg-red-500/40 hover:text-red-900' : 'bg-blue-500/10 hover:bg-blue-500/30'}`

    return (
       <article className=" flex items-center justify-between" >
            <header className = " flex items-center gap-1">
                <img className= " size-12 rounded-full" 
                    src={`https://unavatar.io/${username}`}
                    alt={username}></img>
                <div className = "flex flex-col ml-3">
                    <strong>{name}</strong>
                    <span className = " opacity-60">@{username}</span>
                </div>
            </header>
            <aside>
                <Button variant="text" color="blue" className={buttonFollowing} onClick={handleFollowing} 
                    onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}
                >
                    {textFollowing}
                </Button>
            </aside>
       </article>
    )
}

export default Card
