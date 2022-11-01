import { Button, Card, CardActions, CardContent, CardMedia, Chip, Divider, ListItemButton, ListItemIcon, ListSubheader, Stack, Typography } from "@mui/material";
import MenuButton from "./MenuButton";
import { MenuItem, Action, PortfolioProduct } from "../util/Products";



function MenuItemView(props: {item: MenuItem, onClose: () => void}) {
    if ('header' in props.item)
        return <ListSubheader sx={{background: 'none', lineHeight: '36px'}}>{props.item.label}</ListSubheader>
    else if ('divider' in props.item)
        return <Divider sx={{my: 0.5 }}/>
    else return <ListItemButton href={props.item.href || ''} target={props.item.target} rel={props.item.rel} onClick={() => {
        'onClick' in props.item && props.item.onClick?.call(null)
        props.onClose()
    }}>
        <ListItemIcon><props.item.Icon fontSize="small"/></ListItemIcon>
        {props.item.label}
    </ListItemButton>
}

function ActionView(props: {action: Action, addLeftMargin?: boolean}) {
    return 'button' in props.action ? <>
        <Button sx={{ marginLeft: props.addLeftMargin ? 1 : 0 }} href={props.action.href || ''} rel={props.action.rel} target={props.action.target} onClick={props.action.onClick} size="small" startIcon={props.action.StartIcon ? <props.action.StartIcon /> : undefined} endIcon={props.action.EndIcon ? <props.action.EndIcon/> : undefined}>{props.action.button}</Button>
    </> : <>
        <MenuButton label={props.action.menu} ButtonProps={{size: 'small', endIcon: <props.action.Icon/>}}>
            {close => !('button' in props.action) ? props.action.items.map((item, i) => <MenuItemView item={item} key={i} onClose={close}/>) : <></>}
        </MenuButton>
    </>
}

export default function PortfolioCard(props: {product: PortfolioProduct}) {
    return <>
        <Card className='ta-l'>
            <CardMedia component="img" src={props.product.image} alt={`${props.product.name} logo`} sx={props.product.sx} />
            <CardContent sx={{paddingBottom: '0px'}}>
                <Typography gutterBottom variant="h5" component="div">
                    {props.product.name}{props.product.nameChip ? <>{' '}<Chip label={props.product.nameChip} size="small" /></> : null}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.product.description}
                </Typography>
                <Stack direction="row" sx={{flexWrap: 'wrap', marginLeft: -0.5}}>
                    {props.product.technologies.map(t => <Chip sx={{m: 0.5}} size="small" key={t} label={t}/>)}
                </Stack>
            </CardContent>
            {(props.product.firstAction || props.product.secondAction || props.product.moreActions) && <>
                <CardActions>
                    {props.product.firstAction ? <ActionView action={props.product.firstAction}/> : null}
                    {props.product.secondAction ? <ActionView action={props.product.secondAction} addLeftMargin/> : null}
                    {props.product.moreActions && <MenuButton color="primary" icon ButtonProps={{ size: 'small', sx: {marginLeft: 'auto !important'} }}>
                        {close => props.product.moreActions!.map((item, i) => <MenuItemView onClose={close} item={item} key={i} />)}
                    </MenuButton>}
                </CardActions>
            </>}
        </Card>
    </>
}