import React,{useState} from 'react'

function ToolsSection() {
  const tools = [
   {name:"Bg Ibelick",url:"https://bg.ibelick.com/",description:"Get Best Website Backgrounds", imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkFzhqmiilM_Ft4EHNQNOGApjHgBeQBFmDXw&s"},
   { name: "Uiball", url: "https://uiball.com/ldrs/", imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToVZmZqjEVsYp0BAxGqvR_Je5_iyyCoW2XnQ&s", description: "Best loading animations for websites" },
   { name: "Uiverse", url: "https://uiverse.io/", imgurl: "https://avatars.githubusercontent.com/u/103369066?s=280&v=4", description: "Collection of sleek UI elements" },
   { name: "Design.com", url: "https://www.design.com/", imgurl: "https://s3-eu-west-1.amazonaws.com/tpd/logos/654b18d33e2c058cc7573c35/0x0.png", description: "Logo and poster maker" },
   { name: "Typefaceanimator", url: "https://www.typefaceanimator.com/", imgurl: "https://9bf214cbf065b67e1f490854e6d6a239.cdn.bubble.io/cdn-cgi/image/w=384,h=,f=auto,dpr=2.5,fit=contain/f1703868850185x271055217281936700/snap.gif", description: "Animation tools for fonts" },
   { name: "Logo Diffusion", url: "http://logodiffusion.com/", imgurl: "https://yt3.googleusercontent.com/XnbHrmUdotR4tf82HzN69HOm4RzENesOeQqCsAsRN3uF6R6BCtvVoVh-bxwC_vQ2deQKSD0V9Kg=s900-c-k-c0x00ffffff-no-rj", description: "AI-powered logo generator" },
   {name:"Button Ibelick",url:"https://button.ibelick.com/",description:"Get Best Buttons", imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkFzhqmiilM_Ft4EHNQNOGApjHgBeQBFmDXw&s"},
   { name: "Pigment", url: "https://pigment.shapefactory.co/", imgurl: "https://cdn-1.webcatalog.io/catalog/shapefactory-pigment/shapefactory-pigment-social-preview.png", description: "Color palette chooser" },
   { name: "Media.io", url: "https://www.media.io/", imgurl: "https://cdn.techimply.com/uploads/software/31224/logo/4c72ca8e1b4d9e2e32b2c25964029275.png", description: "Online tools to edit, convert & enhance video, image & audio files" },  // :contentReference[oaicite:0]{index=0}
   { name: "Phase", url: "https://www.phase.com/", imgurl: "https://assets.disquiet.io/images/product/thumbnail/4ed0750442816dd5dba753c4adb51cc47115c0889df231ecd45abb72fe8c1598", description: "Design–prototype tool with micro-interactions and no-code animations" },  // :contentReference[oaicite:1]{index=1}
   { name: "Font Finder", url: "https://ifonts.xyz/display", imgurl: "https://ifonts.xyz/wp-content/uploads/2024/02/logo-ifonts.png", description: "Font finder & preview tool" },
   { name: "MyFonts", url: "https://www.myfonts.com/", imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv_8r2eZpTPN1YVFJ-d6nMwvbppDcwl5ObwXu3uxR5ujRYE6zEe0xjlB5UWLBFhTJc_EI&usqp=CAU", description: "Extensive font library" },
   { name: "Stitch ⭐⭐", url: "https://stitch.withgoogle.com/", imgurl: "https://media2.dev.to/dynamic/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fzhshikvds4e6nn22fngm.png", description: "App & web design by text (Google Stitch)" },
   { name: "Reactbits", url: "https://www.reactbits.dev/", imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLuowUjaOWu7gD__sbISQai7nzr6j8gL4x2Q&s", description: "React animations and UI elements library" },
   {name:"UI Ibelick",url:"https://ui.ibelick.com/",description:"Get Best UI Elements", imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkFzhqmiilM_Ft4EHNQNOGApjHgBeQBFmDXw&s"},
   { name: "Aceternity", url: "https://ui.aceternity.com/", imgurl: "https://assets.aceternity.com/logo-dark.png", description: "UI framework with React animations" },
   { name: "shadcn", url: "https://shadcn.com/", imgurl: "https://avatars.githubusercontent.com/u/139895814?v=4", description: "Modern UI framework (Tailwind-based)" },
   { name: "daisyUI", url: "https://daisyui.com/", imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZvOgtTYVL_w8kND07LcUN6LRUdS54THScfA&s", description: "High-level Tailwind CSS components plugin" },  // :contentReference[oaicite:2]{index=2}
   { name: "Magic UI", url: "https://magicui.com/", imgurl: "https://avatars.githubusercontent.com/u/166878038?s=200&v=4", description: "Collection of reusable animated components, blocks & templates" },  // :contentReference[oaicite:3]{index=3}
   { name: "iamsajid.com", url: "https://www.iamsajid.com/", imgurl: "https://yt3.googleusercontent.com/IrLMXJ00GN-Vn_JY0I4ejJGxufqKMtRgaP6xEPJGngxj3qzHJnfq3SeYeO0vMU6C7OsX2x2Qnw=s900-c-k-c0x00ffffff-no-rj", description: "UI color palette inspiration" },
   { name: "Tw-Elements", url: "https://tw-elements.com/docs/react/", imgurl: "https://pbs.twimg.com/profile_images/1636330216808128514/uNTub8J7_400x400.jpg", description: "React + Tailwind template components" },
   { name: "CSS Loading Animations", url: "https://dev.to/webdeasy/25-awesome-loading-animations-where-you-like-to-wait-1b5f", imgurl: "https://10015.io/assets/tools/list/css-loader-generator.svg", description: "Collection of CSS loading animations" },
   { name: "Haikei", url: "https://app.haikei.app/", imgurl: "https://resourcesfordesigner.com/wp-content/uploads/2021/03/haikei.jpg", description: "SVG shape and background generator" },
   { name: "SVG Wave", url: "https://svgwave.in/", imgurl: "https://resourcesfordesigner.com/wp-content/uploads/2021/03/svgwave-400x300.jpg.webp", description: "SVG wave generator" },
   { name: "Google Labs", url: "https://labs.google/experiments", imgurl: "https://pbs.twimg.com/profile_images/1792661411102863360/fzzB7K-f_400x400.png", description: "Find Googles new Experiments" },
  { name: "Creatica", url: "https://creatica.app/", imgurl: "https://cdn-1.webcatalog.io/catalog/creatica/creatica-icon-filled-256.webp?v=1733302938058", description: "SVG background generator for web designs" },  // :contentReference[oaicite:4]{index=4}
  { name: "Storyset", url: "https://storyset.com/", imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS57MNUcorD2G5HmdDnJnyp3gj0rliVKBTVeg&s", description: "Customizable website graphics and illustrations" },
  { name: "Blush", url: "https://blush.design/", imgurl: "https://blush.design/logo-lightmode.svg", description: "Create and customize illustrations by artists worldwide" },  // :contentReference[oaicite:5]{index=5}
  { name: "IRA Design", url: "https://iradesign.io/", imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvw8McVz14lNTQCcZmSrJcGzuh8FRzOi-Hhw&s", description: "Illustrations and vector graphics toolkit" },
  { name: "Open Peeps", url: "https://www.openpeeps.com/", imgurl: "https://cdn.prod.website-files.com/5e51c674258ffe10d286d30a/5e535956e35d380d2b67a11f_peep-66.svg", description: "Hand-drawn character illustrations" },
  { name: "Humaaans", url: "https://blush.design/collections/humaaans/humaaans", imgurl: "https://framerusercontent.com/images/0WiNDjL5Lbi7eMgv65lyahb3Y.png", description: "Mix-and-match human illustrations from Humaaans" },
  { name: "Reshot", url: "https://reshot.com/", imgurl: "https://pbs.twimg.com/profile_images/955521430300471296/b1PDD8b4_400x400.jpg", description: "Free stock photos, icons & illustrations" },
  { name: "Lummi", url: "https://www.lummi.ai/", imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrO3-A-FwknNjx1aEC-ULS3lpyZYs60AE-WQ&s", description: "AI-powered royalty-free visuals and stock images" }  // :contentReference[oaicite:6]{index=6}
  

];
const [visible, setVisible] = useState(8);

  const handleLoadMore = () => {
    setVisible((prev) => prev + 8); // show 8 more each click
  };

  return (
    <>
    <section id='webtools'>
       <div className="min-h-screen bg-black-400 p-6 text-center">
        <div className='flex flex-col justify-center items-center'>
      <h2 className='text-2xl mb-1 font-bold  inline-flex'>Build Better Website with these Tools</h2>
      <span className='bg-white w-60 h-1 rounded-full inline-flex justify-center items-center mb-3'></span>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {tools.slice(0, visible).map((tool, index) => (
          <div
            key={index}
            className="bg-black text-white  rounded-2xl p-5 hover:shadow-xs  transition duration-300 shadow-white flex justify-center items-center flex-col"
          ><img src={tool.imgurl} alt="not found" className='w-20 rounded-2xl '/>
            <h2 className="text-xl font-semibold mb-2">{tool.name}</h2>
            <p className="text-gray-100 mb-4">{tool.description}</p>
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 hover:underline"
            >
              Website →
            </a>
          </div>
        ))}
      </div>


       {/* Load More button */}
        <div className="flex justify-center mt-8">
          {visible < tools.length ? (
            <button
              onClick={handleLoadMore}
              className="px-6 py-2 rounded-lg bg-yellow-500 text-white hover:bg-yellow-600 hover:text-white border border-yellow transition"
            >
              Load More
            </button>
          ) : (
            <button
              disabled
              className="px-6 py-2 rounded-lg bg-gray-500 text-white cursor-not-allowed"
            >
              No More Tools
            </button>
          )}
        </div>
    </div>
    </section>
    </>
  )
}

export default ToolsSection