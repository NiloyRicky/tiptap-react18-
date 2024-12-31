import React ,{useState,useEffect}from 'react';
import Image from '@tiptap/extension-image'
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import { ChemicalArrow } from './CustomArrowExtension'; // Custom extension for arrows
import { FaArrowRight } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";

import { FaArrowsLeftRight } from "react-icons/fa6";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { CustomImage } from './RandomImageExtension';

const TiptapEditor = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [caption, setCaption] = useState('');
  const[flagDelete,setFlagDelete]=useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit, 
      Subscript, 
      Superscript, 
      CustomImage,
      ChemicalArrow // For arrows (→, ⇌, ←)
    ],
    content: '<p class="ptag">Write chemical reactions here...</p>',
  });



  const toggleSubscript = () => {
    editor.chain().focus().toggleSubscript().run();
  };

  const toggleSuperscript = () => {
    editor.chain().focus().toggleSuperscript().run();
  };


  
   
  
    const insertCustomImage = () => {
      if (imageUrl) {
        editor.chain().focus().insertCustomImage({ src: imageUrl, caption }).run();
        setImageUrl('');
        setCaption('');
        setFlagDelete(true)
      }
    }

    const deleteImage=()=>{
      
     
      window.location.reload();
        setFlagDelete(false)

    }

  return (<>
  <div className='container'>
      <div className='btnContainer'>
        <button onClick={()=>editor.commands.insertForwardArrrow()}><FaArrowRight/></button>
        <button onClick={()=>editor.commands.insertReversibleArrrow()}><FaArrowRightArrowLeft/></button>
        <button onClick={()=>editor.commands.insertBackwardArrrow()}><FaArrowLeft/></button>
        <button onClick={()=>editor.commands.insertBidirectionalArrrow()}><FaArrowsLeftRight/></button>
        <button onClick={()=>editor.commands.insertUpwardArrrow()}><FaArrowUp/></button>
        <button onClick={()=>editor.commands.insertDownwardArrrow()}> <FaArrowDown /> </button>
        <button onClick={toggleSubscript}>Subscript</button>
        <button onClick={toggleSuperscript}>Superscript</button>
        
      </div>
      </div>
     
      <div style={{ marginTop: '10px' }} className='input_container'>
        <div className='input_field'>
        <input
          type="text"
          placeholder="Enter Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          style={{ marginRight: '10px', width: '300px' }}
        />
       <input
          type="text"
          placeholder="Enter Caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          style={{ marginRight: '10px', width: '300px' }}
        />
        
        </div>
        
       <div>
       {flagDelete==true?<button onClick={deleteImage}>Delete</button>:
        <button onClick={insertCustomImage}>Insert Custom Image</button>}
       </div>
        
      </div>
      <div className='tiptap-editor'>
      <EditorContent editor={editor} />
      </div>
     

  
  
  
  </>
    
     
  );
};

export default TiptapEditor;