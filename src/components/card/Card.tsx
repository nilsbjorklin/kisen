import { JSXElement, Show, type Component } from 'solid-js';
import './card.css';

export type CardProps = { focused: () => boolean, className?: string, onClick?: () => void, children?: JSXElement };
export const Card: Component<CardProps> = ({ focused, className, onClick, children }: CardProps) => {
    const classes = "card p-1 flex flex-col border secondary rounded-sm";

    return (
        <Show when={focused()} fallback={
            <div class={`${classes} ${className}`} onClick={onClick}>
                {children}
            </div>}>
            <div class={`${classes} focused ${className}`} onClick={onClick}>
                {children}
            </div>
        </Show>
    )
};