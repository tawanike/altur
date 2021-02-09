import { useState } from 'react';
import { SectionContainer } from '../../theme/components/Section';
import { ListContainer, ListHeader, ListItems } from '../../theme/components/List';
import ListItem from './Item';
import { Text, Button } from '../../theme/components';
import React from 'react';

const List = (props: any) => {
    const [items, setItems] = useState([
        {
            title: "eButler South Africa",
            image: '/work/logos/ebutler.svg',
            link: "https://www.ebutler.co.za"
        },
        {
            title: "Flemoji",
            image: '/work/logos/flemoji.svg',
            link: "https://www.flemoji.com"
        },
        {
            title: "Venture Links",
            image: '/work/logos/venturelinks.svg',
            link: "https://www.venturelinks.co.za"
        },
        {
            title: "Varsity Links",
            image: '/work/logos/varsitylinks.svg',
            link: "https://www.varsitylinks.co.za"
        },
        {
            title: "Altur",
            image: '/work/logos/altur.svg',
            link: "https://www.altur.io"
        }
    ]);

    return(<SectionContainer padding={props.padding} margin={props.margin}>
        { props.vertical && <ListContainer vertical>
            {props.title &&  <ListHeader>
            {props.title && <Text {...props.title.options}>{props.title.text}</Text>}
            {props.subtitle && <Text {...props.subtitle.options}>{props.subtitle.text}</Text>}
            {props.description && <Text {...props.description.options}>{props.description.text}</Text>}
        </ListHeader>}
        <ListItems>
            <ListItem key={items[0]} item={items[0]}/>
            <ListItem key={items[1]} item={items[1]}/>
            <ListItem key={items[2]} item={items[2]}/>
            <ListItem key={items[3]} item={items[3]}/>
        </ListItems>
        </ListContainer>}


        { props.horizontal && <ListContainer horizontal>
            {props.title &&  <ListHeader>
            {props.title && <Text {...props.title.options}>{props.title.text}</Text>}
            {props.subtitle && <Text {...props.subtitle.options}>{props.subtitle.text}</Text>}
            {props.description && <Text {...props.description.options}>{props.description.text}</Text>}
        </ListHeader>}
        <ListItems>
            {items.map((item: any, index: number) => {
                return(<ListItem item={item}/>);
            })}
        </ListItems>
        </ListContainer>}
    </SectionContainer>)
}

export default List;