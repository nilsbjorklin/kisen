import { createEffect, createSignal, JSXElement, Show, type Component, type JSX } from 'solid-js';
import { Card } from '../card/Card';
import './TextField.css';

export type TextFieldProps = { id: string, title: string, onChange?: (value: string) => void, defaultValue?: string, autofocus?: boolean }
export const TextField: Component<TextFieldProps> = ({ id, title, onChange, defaultValue, autofocus }) => {
    let inputRef!: HTMLInputElement;
    const [focused, setFocused] = createSignal(autofocus || false)
    const [value, setValue] = createSignal(defaultValue ?? '')
    const focus = () => inputRef.focus();
    return (
        <Card focused={focused} onClick={focus} className='max-w-sm'>
            <label class='label relative bottom-0 ease-in p-0' for={id}>{title}</label>
            <input
                id={id}
                class="outline-0 m-0"
                value={value()}
                placeholder={title}
                onInput={(event) => setValue(event?.target?.value)}
                onfocusin={() => setFocused(true)}
                onFocusOut={() => setFocused(false)}
                ref={inputRef} />
        </Card>
    );
};