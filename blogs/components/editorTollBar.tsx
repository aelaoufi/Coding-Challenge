// components/EditorToolbar.tsx
import { Editor } from '@tiptap/react';
import { FC } from 'react';

interface EditorToolbarProps {
  editor: Editor | null;
}

const EditorToolbar: FC<EditorToolbarProps> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex space-x-2 mb-4">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`px-3 py-1 border rounded ${editor.isActive('bold') ? 'bg-gray-200' : ''}`}
      >
        B
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`px-3 py-1 border rounded ${editor.isActive('italic') ? 'bg-gray-200' : ''}`}
      >
        I
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`px-3 py-1 border rounded ${editor.isActive('underline') ? 'bg-gray-200' : ''}`}
      >
        U
      </button>
    </div>
  );
};

export default EditorToolbar;
