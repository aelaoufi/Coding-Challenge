'use client'

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import CharacterCount from '@tiptap/extension-character-count';
import { FC } from 'react';
import EditorToolbar from './editorTollBar';

const TextEditor: React.FC = () => {
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
			  class: 'h-full',
			},
		  },
		content: '',
	  });
	
	  return (
		<>
			<div className="flex flex-col border border-gray-300 rounded-md p-4 h-full">
			<EditorToolbar editor={editor} />
			<EditorContent editor={editor} className="prose flex-grow min-h-[150px]" />
			</div>
		</>
	  );
}

export default TextEditor
