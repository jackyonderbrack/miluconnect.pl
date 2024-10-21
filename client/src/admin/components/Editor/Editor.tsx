import { forwardRef, useEffect, useLayoutEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import './Editor.css'

interface EditorProps {
	readOnly?: boolean;
	defaultValue?: any;
	onTextChange?: (...args: any[]) => void;
	onSelectionChange?: (...args: any[]) => void;
}

const Editor = forwardRef<Quill | null, EditorProps>(
	({ readOnly, defaultValue, onTextChange, onSelectionChange }, ref) => {
		const containerRef = useRef<HTMLDivElement | null>(null);
		const defaultValueRef = useRef(defaultValue);
		const onTextChangeRef = useRef(onTextChange);
		const onSelectionChangeRef = useRef(onSelectionChange);

		useLayoutEffect(() => {
			onTextChangeRef.current = onTextChange;
			onSelectionChangeRef.current = onSelectionChange;
		});

		useEffect(() => {
			// Upewnijmy się, że ref istnieje i Quill jest zainicjalizowany
			if (ref && typeof ref !== 'function' && ref.current) {
				ref.current.enable(!readOnly);
			}
		}, [ref, readOnly]);

		useEffect(() => {
			const container = containerRef.current;
			if (!container) return;

			const editorContainer = container.appendChild(
				container.ownerDocument.createElement('div')
			);

			const quill = new Quill(editorContainer, {
				theme: 'snow',
			});

			// Przypisz ref do instancji Quill
			if (ref && typeof ref !== 'function') {
				ref.current = quill;
			}

			if (defaultValueRef.current) {
				quill.setContents(defaultValueRef.current);
			}

			quill.on('text-change', (...args) => {
				onTextChangeRef.current?.(...args);
			});

			quill.on('selection-change', (...args) => {
				onSelectionChangeRef.current?.(...args);
			});

			return () => {
				if (ref && typeof ref !== 'function') {
					ref.current = null;
				}
				container.innerHTML = '';
			};
		}, [ref]);

		return <div ref={containerRef} id='Editor'></div>;
	}
);

Editor.displayName = 'Editor';

export default Editor;
