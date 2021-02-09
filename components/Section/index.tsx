import { SectionContainer, SectionText, SectionImage, SectionButtons } from '../../theme/components/Section';
import { Text, Button } from '../../theme/components';
import React from 'react';
import { useRouter } from 'next/router';


const Section = (props: any) => {

    return(<SectionContainer padding={props.padding} margin={props.margin}>
        { props.image.position === 'left' && <div>
        {props.image.source && <SectionImage>
            <img 
                alt={props.image.alt}
                style={props.image.styles}
                src={props.image.source} />
        </SectionImage>}
        {props.title &&  <SectionText>
            {props.title && <Text {...props.title.options}>{props.title.text}</Text>}
            {props.subtitle && <Text {...props.subtitle.options}>{props.subtitle.text}</Text>}
            {props.description && <Text {...props.description.options}>{props.description.text}</Text>}
            <SectionButtons>
                {props.primaryButton && <Button 
                {...props.primaryButton.options} 
                    margin={props.primaryButton.options.margin}
                    primary={props.primary}
                    onClick={() => { window.location.href = props.primaryButton.link }}
                    primaryOutline={props.primaryOutline}>
                    {props.primaryButton.text}</Button>}

                {props.secondaryButton && <Button 
                {...props.secondaryButton.options} 
                    margin={props.secondaryButton.options.margin}
                    secondary={props.secondary}
                    secondaryOutline={props.secondaryOutline}
                >{props.secondaryButton.text}</Button>}
            </SectionButtons>
        </SectionText>}
        </div>}

        { props.image.position === 'right' && <div>
        {props.title &&  <SectionText>
            {props.title && <Text {...props.title.options}>{props.title.text}</Text>}
            {props.subtitle && <Text {...props.subtitle.options}>{props.subtitle.text}</Text>}
            {props.description && <Text {...props.description.options}>{props.description.text}</Text>}
            <SectionButtons>
                {props.primaryButton && <Button 
                    {...props.primaryButton.options} 
                    margin={props.primaryButton.options.margin}
                    primary={props.primary}
                    primaryOutline={props.primaryOutline}
                    >{props.primaryButton.text}</Button>}

                {props.secondaryButton && <Button 

                    {...props.secondaryButton.options} 
                    margin={props.secondaryButton.options.margin}
                    secondary={props.secondary}
                    secondaryOutline={props.secondaryOutline}
                    >{props.secondaryButton.text}</Button>}

            </SectionButtons>
        </SectionText>}
        {props.image.source && <SectionImage>
            <img 
                alt={props.image.alt}
                style={props.image.styles}
                src={props.image.source} />
        </SectionImage>}
        </div>}
        
        
    </SectionContainer>);
}

export default Section;