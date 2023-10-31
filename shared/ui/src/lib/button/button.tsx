import style from './button.module.scss';

type ButtonT = React.ComponentProps<'button'>;

export const Button = (props : ButtonT) => {
    const { children, className, ...cleanProps } = props;

    return (
        <button className={`${style['primary']} ${className ?? ''}`} {...cleanProps}>
            {children}
        </button>
    )
}