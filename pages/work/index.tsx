import Head from 'next/head'
import { Container, Content } from '../../theme';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Section from '../../components/Section';

const OurWork = () => {
    return(<Container>
        <Header />
        <Content>
            <Section 
                title={{ 
                text: 'Web and Mobile App Development', 
                options:{title: true, heavy: true} 
                }}
                subtitle={{ 
                text: 'Measure every step and don\'t, no need for guess work', 
                options:{title: false, light: true} 
                }}
                description={{ text: "We help organizations with measuring, collecting, analyzing, and reporting of web data based on organizational and user goals."}}
                image={{
                source: 'https://ebutler.s3.af-south-1.amazonaws.com/static/logo4.png', 
                position:'left',
                styles:{ width: "100%", height: "100%" }
                }}
                primaryButton={{text: 'Learn More', position:'right', options: {medium: true}}}
                padding="24px"
                primary/>

            <Section
                title={{ 
                text: 'Strategy and Consulting', 
                options:{title: true, heavy: true} 
                }}
                subtitle={{ 
                text: 'This is title text', 
                options:{title: true, heavy: true} 
                }}
                description={{ 
                text: 'This is title text', 
                options:{title: true, heavy: true} 
                }}
                image={{
                source: 'https://varsitylinks.s3-eu-west-1.amazonaws.com/flemoji/white_logo.png', 
                position:'right', 
                styles:{ width: "100%", height: "100%" }
                }}
                primaryButton={{text: 'Learn More', position:'right', options: {medium: true}}}
                padding="24px"
                primary/>
            <Section 
                title={{ 
                text: 'Web and Mobile App Development', 
                options:{title: true, heavy: true} 
                }}
                subtitle={{ 
                text: 'Measure every step and don\'t, no need for guess work', 
                options:{title: false, light: true} 
                }}
                description={{ text: "We help organizations with measuring, collecting, analyzing, and reporting of web data based on organizational and user goals."}}
                image={{
                source: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGMAAAAkCAYAAACdZoRBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGYWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTA4LTE2VDE4OjUzOjE3KzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTA4LTE2VDE4OjUzOjE3KzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wOC0xNlQxODo1MzoxNyswMjowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowOGI0ODk0Yi1kNWQzLTBjNDMtYmE5NS1jY2JkY2ExYmViZGEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxNzJjNmYyMC0wNjA4LTIyNGMtOTVhNC0xYWQwOGY5MDA4MjUiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0OTVkNWJkNy1kMDAzLWJhNGYtYTlhYS04OWVlMmU2OGRhN2IiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0OTVkNWJkNy1kMDAzLWJhNGYtYTlhYS04OWVlMmU2OGRhN2IiIHN0RXZ0OndoZW49IjIwMjAtMDgtMTZUMTg6NTM6MTcrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MDhiNDg5NGItZDVkMy0wYzQzLWJhOTUtY2NiZGNhMWJlYmRhIiBzdEV2dDp3aGVuPSIyMDIwLTA4LTE2VDE4OjUzOjE3KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPnhtcC5kaWQ6MDUwNzk5N2UtYzNiNy0wZTQ4LWEzNzMtZDAyODI4MDQ1NjQxPC9yZGY6bGk+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+F8PzxgAADNxJREFUaAXVwQm8rnOBAODn/77v9539nnuuayeusvRTFLqkxpYlU7Y7yZCULK1kKGTJVNMqW8qQQhNGMkNqLrJkCsktLci+hFyu5Z79nG97/3Pqvb/f57hnu8ZtxvOEzW5Z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', 
                position:'left',
                styles:{ width: "100%", height: "100%" }
                }}
                primaryButton={{text: 'Learn More', position:'right', options: {medium: true}}}
                padding="24px"
                primary/>
                
            <Section
                title={{ 
                text: 'Strategy and Consulting', 
                options:{title: true, heavy: true} 
                }}
                subtitle={{ 
                text: 'This is title text', 
                options:{title: true, heavy: true} 
                }}
                description={{ 
                text: 'This is title text', 
                options:{title: true, heavy: true} 
                }}
                image={{
                source: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAIAAAAHjs1qAAAACXBIWXMAAC4jAAAuIwF4pT92AAAGYWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTA0LTIzVDEzOjI2OjUwKzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTA0LTIzVDEzOjI2OjUwKzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wNC0yM1QxMzoyNjo1MCswMjowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ODZjN2VjMy03ZTJiLTQyNDMtOWE4Ni01NTU1MzZhZGEwNDEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5OWQxOWJhMC1jN2IwLTYwNDYtOGVkYy0wMDdkNzQzMGRiYWMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyNjA5MmM0Zi1lNjYwLTllNGYtYmRlYy0wMTc1M2NmYTMxMjMiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoyNjA5MmM0Zi1lNjYwLTllNGYtYmRlYy0wMTc1M2NmYTMxMjMiIHN0RXZ0OndoZW49IjIwMjAtMDQtMjNUMTM6MjY6NTArMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NTg2YzdlYzMtN2UyYi00MjQzLTlhODYtNTU1NTM2YWRhMDQxIiBzdEV2dDp3aGVuPSIyMDIwLTA0LTIzVDEzOjI2OjUwKzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPnhtcC5kaWQ6MGQ4YWUwMTAtZjM5Yi04YzQ1LTk3NjUtNWMzN2MwYzI0Y2NjPC9yZGY6bGk+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8++uFu7gAAEyVJREFUeNrtnYl3FFW+x/kbnqKDyxsd0VFn5r1xn8XzxjfzZA+ygwtgEBEUUDYRUEBAlgCGRRCBEGTLRhaykBASspCQhYSkQzYIJCwmZO0sHTrdWef37JkYDanue6uq+1bV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', 
                position:'right', 
                styles:{ width: "100%", height: "100%" }
                }}
                primaryButton={{text: 'Learn More', position:'right', options: {medium: true}}}
                padding="24px"
                primary/>
            <Section 
                title={{ 
                text: 'Harambee', 
                options:{title: true, heavy: true} 
                }}
                subtitle={{ 
                text: 'Measure every step and don\'t, no need for guess work', 
                options:{title: false, light: true} 
                }}
                description={{ text: "We help organizations with measuring, collecting, analyzing, and reporting of web data based on organizational and user goals."}}
                image={{
                source: 'https://harambee.co.za/wp-content/uploads/2020/04/Harambee-resize-logo.png', 
                position:'left',
                styles:{ width: "100%", height: "100%" }
                }}
                primaryButton={{text: 'Learn More', position:'right', options: {medium: true}}}
                padding="24px"
                primary
                />
                
            <Section
                title={{ 
                text: 'Altur', 
                options:{title: true, heavy: true} 
                }}
                subtitle={{ 
                text: 'This is title text', 
                options:{title: true, heavy: true} 
                }}
                description={{ 
                text: 'This is title text', 
                options:{title: true, heavy: true} 
                }}
                image={{
                source: '/collaboration.png', 
                position:'right', 
                styles:{ width: "100%", height: "100%" }
                }}
                primaryButton={{text: 'Learn More', position:'right', options: {medium: true}}}
                padding="24px"
                primary/>
        </Content>
        <Footer />
        </Container>)
}

export default OurWork;