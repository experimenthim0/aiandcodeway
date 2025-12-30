import React, { useState } from "react";

const promptData = [
  {
    id: 1,
    imgurl: "https://dmeditz.com/wp-content/uploads/2025/12/Dhurandhar-Ai-Photo-Editing-Prompts-100-Faces-Matching-2-747x1024.jpeg",
    simpleText: "A rugged, muscular South Asian man with long hair and a full beard, wearing a black pathani kurta, walking through a gritty street scene while smoking a cigarette. Cinematic, high-contrast lighting.",
    jsonPrompt: {
      "subject": {
        "description": "Rugged, muscular South Asian man",
        "features": ["Long hair", "Full beard"],
        "action": "Walking, smoking"
      },
      "technical": {
        "lighting": "High-contrast",
        "quality": "8k Cinematic"
      }
    }
  },
  {
    id: 2,
    imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepQMleuKoWQF-yjDArX0Y2RKRqwv3lYhcuw&s",
    simpleText: "Transform the uploaded photo into a hyper-detailed graphite pencil sketch on a subtly textured paper background. Focus on capturing the precise anatomical features and expressions of the subject with fine line art and expert cross-hatching for depth. Use soft grayscale shading to create a realistic three-dimensional feel, emphasizing the interplay of light and shadow through dramatic chiaroscuro. The final artwork should have a hand-drawn, professional look with visible but delicate pencil strokes and no digital artifacts, evoking the timeless feel of a classical portrait study.",
    jsonPrompt: {
      
  "task": "image_to_sketch",
  "subject_rules": {
    "preservation": "maintain original anatomy and facial expressions",
    "detail_level": "hyper-detailed technical line art"
  },
  "artistic_style": {
    "medium": "graphite pencil",
    "technique": [
      "expert cross-hatching",
      "fine-line precision",
      "hand-drawn aesthetic"
    ],
    "surface": "subtly textured off-white paper"
  },
  "lighting_and_shading": {
    "style": "chiaroscuro",
    "tonality": "grayscale",
    "shading_type": "soft blending for 3D depth"
  },
  "technical_parameters": {
    "resolution": "8K ultra-HD",
    "negative_prompt": "digital artifacts, blurry, low-res, colored pixels, smooth plastic skin"
  }
}

  },
  {
    id: 3,
imgurl:"https://i.pinimg.com/564x/3a/db/f3/3adbf3daaf10e61f24e8043b9c6c5894.jpg",
simpleText:"Create a hyper-realistic 3D drawing displayed on an Instagram post. The artwork shows a man tearing through a sheet of paper in a realistic 3D effect. He is smiling, waving with one hand, and leaning forward with the other hand resting on the torn paper. He is wearing a black dress/shirt. The Instagram profile should look real and professional. Username: {CUSTOM_USERNAME}Profile Name: {CUSTOM_DISPLAY_NAME}Followers: {CUSTOM_FOLLOWER_COUNT} (example: 1K followers) The Instagram interface should be clearly visible, including profile picture, username at the top, like and comment icons, and a clean modern UI.The overall style should be ultra-realistic, high detail, cinematic lighting, sharp textures, and realistic shadows, making the man appear as if he is breaking out of the Instagram post.",
  jsonPrompt:{
  "task": "3D_image_post_generation",
  "interface": {
    "platform": "Instagram",
    "ui_style": "clean, modern professional",
    "header": {
      "username": "{CUSTOM_USERNAME}",
      "display_name": "{CUSTOM_DISPLAY_NAME}",
      "profile_picture": "high-quality professional headshot"
    },
    "post_stats": {
      "followers": "{CUSTOM_FOLLOWER_COUNT}",
      "interaction_icons": ["like", "comment", "share", "save"]
    }
  },
  "main_subject": {
    "character": "man in professional black dress shirt",
    "pose": [
      "leaning forward out of the frame",
      "waving with one hand",
      "other hand resting on the torn edge of the paper"
    ],
    "expression": "warm, friendly smile",
    "rendering": "hyper-realistic skin textures, pores, and hair detail"
  },
  "visual_illusion": {
    "effect": "3D paper tear",
    "description": "the man is physically tearing through a thick, textured white sheet of paper that occupies the Instagram post frame",
    "depth": "subject breaking the fourth wall, leaning into the viewer's space",
    "shading": "dramatic realistic shadows cast by the man's hands and body onto the torn paper edges"
  },
  "artistic_specs": {
    "style": "cinematic realism",
    "lighting": "soft studio rim lighting, high-contrast chiaroscuro",
    "resolution": "8K ultra-HD, sharp focus",
    "materials": "matte paper texture, fabric detail of black shirt"
  }
}


}



];

const Promptdirectory = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [cardModes, setCardModes] = useState({});

  const toggleMode = (id) => {
    setCardModes(prev => ({
      ...prev,
      [id]: prev[id] === "json" ? "simple" : "json"
    }));
  };

  // --- IMPROVED MOBILE-FIRST COPY FUNCTION ---
  const handleCopy = async (e, prompt, index) => {
    // 1. Prevent mobile event bubbling
    e.preventDefault();
    e.stopPropagation();

    const mode = cardModes[prompt.id] || "simple";
    const textToCopy = mode === "json" 
      ? JSON.stringify(prompt.jsonPrompt, null, 2) 
      : prompt.simpleText;

    // 2. Primary Method: Modern Clipboard API
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(textToCopy);
        triggerSuccess(index);
        return;
      } catch (err) {
        console.error("Clipboard API failed, trying fallback...");
      }
    }

    // 3. Fallback Method: Invisible Textarea (Works on all mobile browsers)
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    
    // Ensure the textarea is not visible but part of the DOM
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    textArea.style.top = "0";
    document.body.appendChild(textArea);
    
    textArea.focus();
    textArea.select();
    textArea.setSelectionRange(0, 99999); // For mobile Safari

    try {
      document.execCommand('copy');
      triggerSuccess(index);
    } catch (err) {
      alert("Please long-press to copy on this browser.");
    }

    document.body.removeChild(textArea);
  };

  const triggerSuccess = (index) => {
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="bg-[#030712] w-full min-h-screen pb-20 text-white selection:bg-blue-500/30">
      
      <div className="fixed left-0 right-0 top-0 flex justify-center p-4 z-[100]">
        <div className="px-6 py-2 rounded-full border border-white/10 bg-white/20 backdrop-blur-xl shadow-2xl">
          <h1 className="text-xl font-bold tracking-normal promptlogofont">Prompt Directory</h1>
        </div>
      </div>

      <div className="h-28"></div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 max-w-7xl mx-auto">
        {promptData.map((prompt, index) => {
          const currentMode = cardModes[prompt.id] || "simple";
          
          return (
            <div key={prompt.id} className="bg-zinc-900/40 border border-zinc-800 rounded-[2.5rem] overflow-hidden flex flex-col shadow-xl">
              <div className="p-3">
                <img src={prompt.imgurl} className="w-full h-64 object-cover rounded-[1.8rem] pointer-events-none" alt="Preview" />
              </div>

              <div className="px-5 pb-6 flex-grow flex flex-col">
                <div className="flex items-center justify-between mb-4 bg-black/40 p-1.5 rounded-full border border-zinc-800">
                  
                  <div className="flex bg-zinc-800 rounded-full p-0.5">
                    <button 
                      type="button"
                      onClick={() => toggleMode(prompt.id)}
                      className={`px-4 py-1.5 rounded-full text-[10px] font-black transition-all ${currentMode === 'simple' ? 'bg-white text-black' : 'text-zinc-400'}`}
                    >
                      TXT
                    </button>
                    <button 
                      type="button"
                      onClick={() => toggleMode(prompt.id)}
                      className={`px-4 py-1.5 rounded-full text-[10px] font-black transition-all ${currentMode === 'json' ? 'bg-white text-black' : 'text-zinc-400'}`}
                    >
                      JSON
                    </button>
                  </div>

                  
                  <button 
                    type="button"
                    onTouchStart={(e) => e.currentTarget.classList.add('scale-95')}
                    onTouchEnd={(e) => e.currentTarget.classList.remove('scale-95')}
                    onClick={(e) => handleCopy(e, prompt, index)}
                    className={`relative z-50 px-8 py-2 rounded-full text-xs font-bold transition-all touch-manipulation ${
                      copiedIndex === index ? "bg-green-500 text-white" : "bg-white text-black"
                    }`}
                  >
                    {copiedIndex === index ? "✓ Copied" : "Copy"}
                  </button>
                </div>

                <div className={`p-4 rounded-2xl border min-h-[120px] transition-colors duration-300 ${
                  currentMode === 'json' ? 'bg-blue-950/20 border-blue-900/30 font-mono' : 'bg-zinc-950/50 border-zinc-800 italic'
                }`}>
                  {currentMode === "json" ? (
                    <div className="text-[11px] text-blue-300/80 leading-relaxed overflow-hidden">
                      <p>{"{"}</p>
                      <p className="pl-3">"subject": "...",</p>
                      <p className="pl-3">"technical": "..."</p>
                      <p>{"}"}</p>
                    </div>
                  ) : (
                    <p className="text-sm text-zinc-400 line-clamp-4 leading-relaxed">
                      "{prompt.simpleText}"
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>




      <div className="h-10 w-screen text-center mt-10 animate-pulse">
  <p>Stay Tunned for more prompts</p>


    </div>

    <footer className="w-screen text-center  h-10 bg-[#090909]">
      <p>Developed By <a href="https://nikhilspace0148.netlify.app/" target="_blank" rel="noopener noreferrer" className="underline">Nikhil Yadav</a></p>
    </footer>



</div>


  );
};

export default Promptdirectory;

