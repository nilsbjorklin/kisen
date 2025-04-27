import { JSX } from 'solid-js';

export type ContainerProps = { children: JSX.Element }
export const Container = ({ children }: ContainerProps) => {
    return (
        <div class='px-3 container secondary md mx-auto shadow-xl min-h-lvh'>
            {children}
        </div>
    );
};