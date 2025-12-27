import React,{useState,useEffect} from 'react'
import '../assets/style.css'
function ToolsSection() {
    const tools =
        [
  {
    name: "ChatGPT",
    imgurl: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    url: "https://chatgpt.com/",
    category: "chat",
    desc: "A conversational AI chatbot by OpenAI that can answer questions, explain topics, summarize text, and write emails."
  },
  {
    name: "Gemini (Google AI)",
    imgurl: "https://logowik.com/content/uploads/images/google-ai-gemini91216.logowik.com.webp",
    url: "https://gemini.google.com",
    category: "chat",
    desc: "Google’s smart assistant for text generation, search, and content creation."
  },
  {
    name: "Claude AI",
    imgurl: "https://logowik.com/content/uploads/images/claude4477.logowik.com.webp",
    url: "https://claude.ai",
    category: "chat",
    desc: "Anthropic’s conversational AI assistant that handles long documents and deep context."
  },
  {
    name: "Jasper AI",
    imgurl: "https://logowik.com/content/uploads/images/jasper-ai6944.logowik.com.webp",
    url: "https://jasper.ai",
    category: "chat",
    desc: "AI content creator for marketing, blogs, and product ads."
  },
  {
    name: "Grammarly",
    imgurl: "https://logowik.com/content/uploads/images/grammarly3875.jpg",
    url: "https://grammerly.com",
    category:"productivity",
    desc: "Checks grammar, tone, clarity, and plagiarism in writing."
  },
  {
    name: "GitHub Copilot",
    imgurl: "https://logowik.com/content/uploads/images/github-copilot3792.logowik.com.webp",
    url: "https://github.com/copilot",
    category: "Vibe Coding",
    desc: "AI pair programmer that autocompletes code and suggests functions."
  },
   {
     name: "Replit Ghostwriter",
    imgurl: "https://logowik.com/content/uploads/images/replit4759.logowik.com.webp",
    url: "https://replit.com/",
  category: "Vibe Coding",
    desc: "AI coding assistant integrated in Replit for instant help."
  },
  {
    name: "Midjourney",
    imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_y2874Vk98frPYMcNRiKI_YpzWt9ZkoFCzw&s",
    url: "https://midjourney.com/",
    category: "Image Gen",
    desc: "AI image generator that creates stunning visuals from text prompts using Discord."
  },
  {
    name: "Microsoft Copilot",
    imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS50VRToKkRhTLKfBwI1hXSWLaG8VfOF4w2ZQ&s",
    url: "https://copilot.microsoft.com",
    category: "productivity",
    desc: "Integrated AI assistant in Microsoft 365 that helps with Word, Excel, PowerPoint, and more."
  },
  {
    name: "Ollama",
    imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8povsrqhnpatgxsXhPlGc4il4aZ4YExD3bw&s",
    url: "https:/ollama.com",
    category: "chat",
    desc: "Run and use powerful LLMs like LLaMA, Mistral, and others locally on your PC."
  },
  {
    name: "Ideogram AI",
    imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTeW_K4X-Py-IXCTBCK563MLQjeIimkwu5RQ&s",
    url: "https://ideogram.ai/",
    category: "Image Gen",
    desc: "Text-to-image AI generator that creates realistic graphics and logos."
  },
  {
    name: "Leonardo AI",
    imgurl: "https://cdn.brandfetch.io/leonardo.ai/fallback/lettermark/theme/dark/h/256/w/256/icon?c=1bfwsmEH20zzEfSNTed",
    url: "https://leonardo.ai/",
    category: "Image Gen",
    desc: "AI-powered design platform to generate game assets, UI elements, and artwork."
  },
  {
    name: "Perplexity AI",
    imgurl: "https://zorgle.co.uk/wp-content/uploads/2024/11/Perplexity-logo.png",
    url: "https://perplexity.ai/",
    category: "chat",
    desc: "AI-powered search engine that gives cited answers from real sources."
  },
  {
    name: "Adobe Firefly",
    imgurl: "https://static.vecteezy.com/system/resources/previews/030/738/523/non_2x/adobe-firefly-logo-isolated-on-white-illustration-adobe-has-announced-the-release-of-its-ai-art-generator-tool-firefly-is-generative-artificial-intelligence-free-vector.jpg",
    url: "https://www.adobe.com/products/firefly.html",
    category: "Image Gen",
    desc: "Adobe’s AI tool for generating and editing images, text effects, and vectors."
  },
  {
    name: "Gamma AI",
    imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-VszPMHFVmyykM1wfRFRk3bgqzNaWXe8w5w&s",
    url: "https://gamma.app/",
    category: "productivity",
    desc: "Create beautiful presentations, documents, and webpages with AI assistance."
  },
  {
    name: "DeepAI",
    imgurl: "https://deepai.org/static/images/dolphin-icon.jpeg",
    url: "https://deepai.org/",
    category: "Image Gen",
    desc: "A platform offering a wide range of AI APIs including image generation, colorization, and summarization."
  },
  {
    name: "Hugging Face",
    imgurl: "https://logowik.com/content/uploads/images/hugging-face4024.logowik.com.webp",
    url: "https://huggingface.co/",
    category: "Vibe Coding",
    desc: "A hub for ML models, datasets, and libraries. Used for hosting and sharing models in NLP, vision, and more."
  },
  {
    name: "LLaMA (Meta AI)",
    imgurl: "https://logowik.com/content/uploads/images/ollama-language-model9633.logowik.com.webp",
    url: "https://www.llama.com/",
    category: "chat",
    desc: "A series of open large language models from Meta for research and commercial use."
  },
  {
    name: "Blackbox.ai",
    imgurl: "https://img.utdstc.com/icon/012/cf9/012cf9c4c37f23b8f9961de3d2fa2948cb2d148e6ae62aa1b554b78602d12e6d:200",
    url: "https://www.blackbox.ai/",
    category: "Vibe Coding",
    desc: "AI coding assistant that extracts code from videos, improves snippets, and provides suggestions."
  },
  {
    name: "Aithor.ai",
    imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPnDN_VPOcgZcSS_oM92T3hOzNjDnANF2J2g&s",
    url: "https://www.aithor.com/",
    category: "productivity",
    desc: "Helps students write assignments and essays using AI with plagiarism checks."
  },
  {
    name: "RunwayML",
    imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHlra3Wvr7b8qHqshw5br-_hI5-DD1mj5kQw&s",
    url: "https://runwayml.com/",
    category: "Video Gen",
    desc: "RunwayML is a powerful platform for video editing and AI-driven content creation, including tools for generating, editing, and transforming videos with ease."
  },
  {
    name: "Eleven Labs",
    imgurl: "https://meta-l.cdn.bubble.io/cdn-cgi/image/w=64,h=64,f=auto,dpr=1.5,fit=contain/f1695934891987x967228831744164200/Eleven_Labs.png",
    url: "https://elevenlabs.io/",
    category: "productivity",
    desc: "Eleven Labs provides realistic voice synthesis powered by AI. You can generate human-like voiceovers, clone voices, and narrate text with emotion and clarity."
  },
  {
    name: "Kruti AI",
    imgurl: "https://images.yourstory.com/cs/286/fe056c90507811eea8de27f99b086345/Screenshot2025-06-09171717-1749469647621.png?mode=crop&crop=faces&ar=16%3A9&format=auto&w=1920&q=75",
    url: "https://www.kruti.ai/",
    category: "chat",
    desc: "Kruti is an Indian multilingual generative AI chatbot that can assist users in multiple regional languages for various tasks."
  },
  {
    name: "Perplexity Agents",
    imgurl: "https://www.perplexity.ai/favicon.ico",
    url: "https://www.perplexity.ai/",
    category: "chat",
    desc: "Perplexity offers domain-specific AI agents like Travel, Finance, and Academic Assistants to help users explore information quickly and interactively."
  },
  {
    name: "NotebookLM",
    imgurl: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F32016ce7-10b0-4717-9e49-b6a2d204f5e7_1502x1502.jpeg",
    url: "https://notebooklm.google/",
    category: "productivity",
    desc: "NotebookLM is an AI-powered research assistant by Google that helps you organize information, ask questions across documents, and keep notes. Convert every resource into audio."
  },
  {
    name: "Kolor Virtual",
    imgurl: "https://cdn-avatars.huggingface.co/v1/production/uploads/62f0babaef9cc6810cec02ff/sVnELkcfVo5kxg5308rkr.png",
    url: "https://huggingface.co/spaces/Kwai-Kolors/Kolors-Virtual-Try-On",
    category: "Image Gen",
    desc: "Kolor Virtual is a virtual try-on AI tool where users can preview fashion wear on digital avatars with realistic rendering."
  },
  {
    name: "Viva.ai",
    imgurl: "https://vivago.ai/favicon.ico",
    url: "https://easywithai.com/ai-video-generators/viva-ai/",
    category: "Video Gen",
    desc: "Viva.ai is an AI-powered creative assistant that helps users design graphics, presentations, and visuals with the help of generative models."
  },
  {
    name: "Grok AI",
    imgurl: "https://pbs.twimg.com/profile_images/1893219113717342208/Vgg2hEPa_400x400.jpg",
    url: "https://x.ai/grok",
    category: "chat",
    desc: "Grok is an AI chatbot developed by xAI (Elon Musk's company), integrated with X (Twitter), and designed to provide humorous yet insightful responses."
  },
  {
    name: "Flux.1",
    imgurl: "https://flux-ai.io/images/logo.png",
    url: "https://flux1.ai/",
   category: "Image Gen",
    desc: "Flux.1 is an open-source AI model by Hugging Face designed for image generation tasks, with multiple variations and fast processing."
  },
  {
    name: "DeepSeek",
    imgurl: "https://cdn.mos.cms.futurecdn.net/RmiUewCvAnsTGnH2ToZyuK-970-80.jpg.webp",
    url: "https://chat.deepseek.com/",
    category: "chat",
    desc: "DeepSeek is a multilingual AI chatbot designed to assist with information retrieval, document analysis, and intelligent Q&A in various languages."
  },
  {
    name: "Qwen",
    imgurl: "https://meta-q.cdn.bubble.io/f1738334022352x870236535338942300/qwen.webp",
    url: "https://chat.qwen.ai/",
    category: "chat",
    desc: "Qwen is a large language model developed by Alibaba Cloud that supports diverse tasks like summarization, translation, and code generation."
  }
]
 const categories=[
   "chat",
   "Image Gen",
   "Video Gen",
   "Vibe Coding",
 ]
const [visible, setVisible] = useState(8);


const productList=tools

 

   const [filteredProductList, setFilteredProductList] = useState([]);
   const [selectedCategories, setSelectedCategories] = useState([]);
  
  useEffect(() => {
    if(selectedCategories.length === 0){
        setFilteredProductList(productList);
    } else{
        setFilteredProductList(productList.filter((item)=>(selectedCategories.includes(item.category))));
    }
  }, [selectedCategories])



  const addCategory = (category) => {
    setSelectedCategories([...selectedCategories, category]);
  };

  const removeCategory = (category) => {
    setSelectedCategories(selectedCategories.filter((c) => c !== category));
  };

  const resetCategory = () => {
    setSelectedCategories([]);
  };

 const handleCategoryToggle = (category) => {
  const isSelected = selectedCategories.includes(category);
  
  if (isSelected) {
    setSelectedCategories(selectedCategories.filter(c => c !== category));
  } else {
    setSelectedCategories([...selectedCategories, category]);
  }
};
 


  const handleLoadMore = () => {
    setVisible((prev) => prev + 8);
  };
  return (
    <>
    <section id='aitools'>
  


<div className="w-full">
  <div className="flex flex-col gap-3">
    <span className="font-medium text-center text-2xl">Categories:</span>
    
    {/* Horizontal category buttons */}
    <div className="flex flex-wrap gap-2 justify-center px-3">
      {categories.map((category) => {
        const isSelected = selectedCategories.includes(category);
        return (
          <button
            key={category}
            onClick={() => handleCategoryToggle(category)}
            className={`px-3 py-1/2 rounded-full font-medium transition-all capitalize duration-300 ${
              isSelected
                ? 'bg-blue-500 text-white border-2 border-blue-500 hover:bg-blue-600'
                : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-400 hover:text-blue-600'
            }`}
          >
            {category.split("-").join(" ")}
          </button>
        );
      })}
    </div>
  </div>

  {/* Selected category count and clear button */}
  {selectedCategories.length > 0 && (
    <div className="flex justify-center items-center gap-3 mt-5">
      <span className="text-sm text-gray-600">
        {selectedCategories.length} selected
      </span>
      <button
        onClick={resetCategory}
        className="px-3 py-1/2 text-sm text-white bg-red-500 rounded-full hover:bg-red-600 transition"
      >
        Clear All
      </button>
    </div>
  )}
</div>

       <div className="min-h-screen bg-black-400 p-6">
      
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProductList.slice(0, visible).map((tool, index) => (
          <div
            key={index}
            className="bg-black text-white  rounded-2xl p-5 hover:shadow-xs transition duration-300 shadow-orange-200"
          ><div className='flex gap-3 border-b-2 pb-3 mb-3 items-center'>
            <img src={tool.imgurl} alt="not found" className='w-20 rounded-2xl '/>
            <h2 className="text-xl font-semibold mb-2 px-4 py-3">{tool.name}</h2>
           </div>
            <p className="text-gray-100 mb-4">{tool.desc}</p>
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 hover:underline"
            >
              Visit →
            </a>
          </div>
        ))}
      </div>
       {/* Load More button */}
        <div className="flex justify-center mt-8">
          {visible < tools.length ? (
            <button
              onClick={handleLoadMore}
             className="px-6 py-2 rounded-lg bg-yellow-500 text-white hover:bg-yellow-600 hover:text-white border border-yellow transition">
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