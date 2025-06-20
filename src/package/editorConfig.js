import PlaygroundNodes from '../package/nodes/PlaygroundNodes'; // adjust path if needed

export const editorConfig = {
  namespace: 'MyEditor',
  theme: {
    paragraph: 'editor-paragraph',
    heading: {
      h1: 'editor-heading-h1',
      h2: 'editor-heading-h2',
      h3: 'editor-heading-h3'
    },
    quote: 'editor-quote',
    list: {
      nested: {
        listitem: 'editor-nested-listitem'
      },
      ol: 'editor-ol',
      ul: 'editor-ul',
      listitem: 'editor-listitem'
    },
    code: 'editor-code',
    link: 'editor-link',
    image: 'editor-image'
  },
  onError(error) {
    throw error;
  },
  
  nodes: [...PlaygroundNodes]
};
