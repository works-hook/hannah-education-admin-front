import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

import '@toast-ui/editor/dist/i18n/ko-kr';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { useRef } from "react";

export default function Writer(props) {
	const editorRef = useRef();

	const onChange = () => {
		const data = editorRef.current.getInstance().getHTML()
    props.onChange(data)
	}

	return (
	<Editor
      	previewStyle='vertical'
		initialValue={props.value}
		initialEditType="wysiwyg"
		language='ko-KR'
		ref={editorRef}
		onChange={onChange}
      	plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
	/>
	);
}
