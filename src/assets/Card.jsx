
export function Card ({username, name, isFollowing}){
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
                <button className=" ml-4 rounded-full py-1  px-2 font-bold border">
                    Seguir
                </button>
            </aside>
       </article>
    )
}

export default Card
