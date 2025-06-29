// package/PreviewEditor.tsx
import React from 'react';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { useEffect } from 'react';
export default function PreviewEditor() {
    useEffect(() => {
  console.log('PreviewEditor mounted');
}, []);
  const [editor] = useLexicalComposerContext();

  // Make this editor read-only
  React.useEffect(() => {
    editor.setEditable(false);
  }, [editor]);

  return (
    <RichTextPlugin
      contentEditable={
        <div className="preview-wrapper">
          <ContentEditable className="preview-output" />
        </div>
      }
      placeholder={null}
      ErrorBoundary={LexicalErrorBoundary}
    />
  );
}
