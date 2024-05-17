'use client'

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import CharacterCount from '@tiptap/extension-character-count';
import EditorToolbar from './editorToolBar';
import { useEffect } from 'react';

interface Props {
  _content?: string;
  onChange?: (content: string) => void;
}

function TextEditor({ _content, onChange }: Props) {
  const limit = 700;
  const editor = useEditor({
    extensions: [
      StarterKit,
      Bold,
      Italic,
      Underline,
      Link,
      CharacterCount.configure({
        limit,
      }),
    ],
    editorProps: {
      attributes: {
        class: 'h-full p-4',
      },
    },
    content: _content || '',
  });

  useEffect(() => {
    if (editor && onChange) {
      editor.on('update', () => {
        const text = editor.getText();
        onChange(text);
      });
    }
  }, [editor, onChange]);

  return (
    <>
      <div className="flex flex-col border border-gray-300 rounded-md p-4 h-full">
        <EditorToolbar editor={editor} />
        <EditorContent editor={editor} className="prose flex-grow min-h-[150px]" />
      </div>
    </>
  );
}

export default TextEditor;
