import { Node, mergeAttributes } from '@tiptap/core';

export const ChemicalArrow = Node.create({
  name: 'chemicalArrow',
  group: 'inline',
  inline: true,
  atom: true,

  addAttributes() {
    return {
      type: {
        default: 'forward', // forward | reversible | backward
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'span[data-chemical-arrow]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    const arrowMap = {
      forward: '→',
      reversible: '⇌',
      backward: '←',
    };
    return ['span', mergeAttributes({ 'data-chemical-arrow': true }), arrowMap[HTMLAttributes.type]];
  },

  addCommands() {
    return {
     
        insertForwardArrrow:() =>({editor})=> {
            editor.chain().focus().insertContent('\u2192').run();
          },
        
          insertReversibleArrrow :() => ({editor})=>{
            editor.chain().focus().insertContent('\u21CC').run();
          },
        
          insertBackwardArrrow: () => ({editor})=>{
            editor.chain().focus().insertContent('\u2190').run();
          },
          insertBidirectionalArrrow :() => ({editor})=>{
            editor.chain().focus().insertContent('\u2194').run();
          },

          insertUpwardArrrow :() => ({editor})=>{
            editor.chain().focus().insertContent('\u2191').run();
          },

          insertDownwardArrrow :() => ({editor})=>{
            editor.chain().focus().insertContent('\u2193').run();
          }
          

          



    
    };
  },
});