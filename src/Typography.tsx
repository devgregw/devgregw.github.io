import { Theme, Typography, TypographyTypeMap } from "@mui/material";
import { DefaultComponentProps } from "@mui/material/OverridableComponent";
import { SystemStyleObject } from "@mui/system";

const GlitchBaseStyle = (gradient: boolean) => ({
    fontFamily: '"Rubik Glitch", Rubik',
    fontVariantLigatures: 'normal',
    ...(gradient ? Gradient : {})
})

const Gradient = {
    background: 'linear-gradient(to right, #f05a28, #ec008c, #f05a28)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'gradient var(--anim-dur) linear 10',
    WebkitAnimation: 'gradient var(--anim-dur) linear 10',
    backgroundRepeat: 'repeat-x',
    backgroundSize: 'var(--bkg-size)'
}

export function Glitch(props: DefaultComponentProps<TypographyTypeMap> & {gradient?: boolean}) {
    return <Typography {...{
        ...props,
        sx: props.sx && typeof props.sx === 'function' ? (t => ({ ...(props.sx as ((theme: Theme) => SystemStyleObject<Theme>))(t), ...GlitchBaseStyle(props.gradient || false) })) : { ...props.sx, ...GlitchBaseStyle(props.gradient || false) }
    }}/>
}

export function Mono(props: DefaultComponentProps<TypographyTypeMap>) {
    return <Typography {...{
        ...props,
        sx: { fontFamily: '"JetBrains Mono", monospace' }
    }} />
}