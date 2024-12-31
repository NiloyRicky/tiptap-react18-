import { Node, mergeAttributes } from '@tiptap/core';

export const CustomImage = Node.create({
  name: 'customImage',

  group: 'block',
  draggable: true,

  addAttributes() {
    return {
      src: { default: null },
      alt: { default: null },
      title: { default: null },
      caption: { default: '' },
      align: { default: 'center' },
      class:{default:'custom-img'}
    };
  },

  parseHTML() {
    return [
      {
        tag: 'figure',
        getAttrs: (node) => ({
          src: node.querySelector('img')?.getAttribute('src'),
          alt: node.querySelector('img')?.getAttribute('alt'),
          title: node.querySelector('img')?.getAttribute('title'),
          caption: node.querySelector('figcaption')?.textContent,
        }),
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      'figure',
      mergeAttributes({ style: `text-align: ${HTMLAttributes.align}` }),
      ['img', { src: HTMLAttributes.src, alt: HTMLAttributes.alt, title: HTMLAttributes.title ,
        
        class:"custom-img"}],
      ['figcaption', {}, HTMLAttributes.caption],

      
    
    ]
  
  },
  onUpdate() {
    const imgTag = document.querySelector('img');
    if (!imgTag) return;
  
    let isDragging = false;
    let offsetX, offsetY;
  
    // Mouse Down Event
    function mouseDown(e) {
      isDragging = true;
      offsetX = e.clientX - imgTag.offsetLeft;
      offsetY = e.clientY - imgTag.offsetTop;
      imgTag.style.cursor = 'grabbing';
      imgTag.style.position = 'absolute'; 
    }
  
    // Mouse Move Event
    function mouseMove(e) {
      if (isDragging) {
        imgTag.style.left = `${e.clientX - offsetX}px`;
        imgTag.style.top = `${e.clientY - offsetY}px`;
      }
    }
  
    // Mouse Up Event
    function mouseUp() {
      if (isDragging) {
        isDragging = false;
        imgTag.style.cursor = 'grab';
      }
    }
  
    // Assigning Event Listeners
    imgTag.addEventListener('mousedown', mouseDown);
    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
  
    
   
  },

  addCommands() {
    return {
      insertCustomImage: (options) => ({ commands }) => {
        return commands.insertContent({
          type: this.name,
          attrs: {
            src: options.src,
            alt: options.alt || 'Custom Image',
            title: options.title || '',
            caption: options.caption || '',
            align: options.align || 'center',
          },
        });
      },
      updateImageUrl: (src) => ({ commands }) => {
        return commands.updateAttributes(this.name, { src });
      },
      setImageCaption: (caption) => ({ commands }) => {
        return commands.updateAttributes(this.name, { caption });
      },


      deleteCustomImage:
  () =>
  ({ commands }) => {
    const { state } = commands;
      const { doc, selection } = state;
      const { from, to } = selection;

      // Delete the image node at the selected range
      commands.deleteRange({ from, to });

 
    
  },
  
  
    
    };
  



  },
});