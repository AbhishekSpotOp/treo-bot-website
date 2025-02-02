
export default function Developers() {

    return (
        <>
            <div className="w-full my-10">
            <div className="flex w-full justify-center">
      <img width="400" src="/img/bck4.png" />
      </div>
                <h1 className="py-7 animateHeader text-4xl font-extrabold text-center text-white">
                    <i className="fal fa-stars text-amber-400 mr-2" />
                    Developers
                </h1>
            </div>

             <div className="lg:max-w-screen-lg mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="flex flex-col justify-center text-white rounded">
            <a href="https://dsc.gg/apexa-support">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://images-ext-2.discordapp.net/external/Z6YJ1hUWPFTsSnQst35MIG1j4JDwNKzqaV9M3W7A25E/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/822541512968765452/dc47f55df44daeb0ab2623df7abfd254.webp" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">Heyo! I'm Abhishek,</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                       I'm the developer and founder of Apexa. I know javascript, html, css. Click here to know about me
                                    </p>
                                </div>     
                            </div>
                        </div>
                    </a>
                    </div>

                    <div className="flex flex-col justify-center text-white rounded">
                        <a href="https://dsc.gg/apexa-support">
                            <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://images-ext-2.discordapp.net/external/gYla0oFl30cZrFdL04MmUE_5Xe1C8diYt-Qa1_bntDM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1027468380392935424/3504ea22aa10a9bea7887e637b1e48d1.webp" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">Heyo! I'm<br />Prem,</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                    Hi, I'm the Co Developer of Apexa . With 3 years of experience developing with discord.js and HTML CSS.
                                    </p>
                                </div>     
                            </div>
                        </div>
                        </a>
                        </div>

                </div>
                <div className="py-10"></div>
        </>
    );
};
