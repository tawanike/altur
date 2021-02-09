import { SectionContainer } from '../../theme/components/Section';
import { ListItem, ListItemImage } from '../../theme/components/List';

import { Text, Button } from '../../theme/components';
import React from 'react';


const Item = (props: any) => {
    return(<ListItem key={props.key} padding={props.padding} margin={props.margin}>
        <a href={props.item.link} target="_blank"><ListItemImage src={props.item.image} /></a>
        {/* <Text center medium bold>{props.item.title}</Text> */}
       </ListItem>)
}

export default Item;