import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const Support = () => {
    return (
        <Container>
            <div className="support">
                <Row>
            <div className="supportHeader">
                <h1>Welcome to the support page</h1>
                <h3>Here you can find all the help you need. Charities, events, news and relevant information all about Spina Bifida.</h3>
            </div>
            <Card className="col-lg-4" >
                <Card.Body>
                    <Card.Title>Shine</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Charity</Card.Subtitle>
                    <Card.Text className="supportText">Providing specialist advice and support for spina bifida and hydrocephalus across England, Wales and Northern Ireland</Card.Text>
                    <Card.Link href="https://www.shinecharity.org.uk/" target="_blank">Website</Card.Link>
                </Card.Body>
            </Card>
            <Card className="col-lg-4">
                <Card.Body>
                    <Card.Title>Spina Bifida Association</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Research</Card.Subtitle>
                    <Card.Text className="supportText">The mission of the Spina Bifida Association is to build a better and brighter future for all those impacted by Spina Bifida.</Card.Text>
                    <Card.Link href="https://www.spinabifidaassociation.org/" target="_blank">Website</Card.Link>
                </Card.Body>
            </Card>
            <Card className="col-lg-4">
                <Card.Body>
                    <Card.Title>Christopher Reeve</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Foundation</Card.Subtitle>
                    <Card.Text className="supportText">We are dedicated to curing spinal cord injury by advancing innovative research and improving quality of life for individuals and families impacted by paralysis. There are many ways to get support, get involved and donate to support the Reeve Foundation mission.</Card.Text>
                    <Card.Link href="https://www.christopherreeve.org/living-with-paralysis/health/causes-of-paralysis/spina-bifida" target="_blank">Website</Card.Link>
                </Card.Body>
                    </Card>
                    </Row>
            </div>
        </Container>
    )
}

export default Support;