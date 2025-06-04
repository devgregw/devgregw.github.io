import { Button, type ButtonProps, Menu, IconButton } from "@mui/material";
import { useState, MouseEvent, ReactNode } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';

type BaseProps = { children: (close: () => void) => ReactNode, color?: Color}
type MenuButtonProps = {label: string, ButtonProps?: ButtonProps}
type IconButtonProps = {icon: true, ButtonProps?: Omit<ButtonProps, 'endIcon' | 'startIcon'>}
type Color = "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning"

export default function MenuButton(props: BaseProps & (MenuButtonProps | IconButtonProps)) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return <>
            {'label' in props ? <>
                <Button {...(props.ButtonProps || {})} color={props.color || 'primary'} onClick={handleClick}>
                    {props.label}
                </Button>
            </> : <>
                <IconButton {...(props.ButtonProps || {})} color={props.color || 'default'} onClick={handleClick}>
                    <MoreVertIcon/>
                </IconButton>
            </>}
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                {props.children(handleClose)}
            </Menu>
    </>
}
