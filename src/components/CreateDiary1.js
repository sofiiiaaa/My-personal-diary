import React from "react";
import {Container, Row, Col} from "react-bootstrap"

const CreateDiary1 = () => {
    return (  
        <Container className="chooseCover">
            <h1>here you can create your diary!!</h1>
            <h1>Now, choose you cover!</h1>
            <Row>        
                <Col>
                    <img className="img-fluid" alt="n1" src="/imgCoversDiaries/n1.jpg"/>
                </Col>
                <Col>
                    <img className="img-fluid" alt="n2" src="/imgCoversDiaries/n2.jpg"/>
                </Col>
                <Col>
                    <img className="img-fluid" alt="n3" src="/imgCoversDiaries/n3.jpg"/>
                </Col>
            </Row>           
            <Row>  
                <Col>                   
                    <img className="img-fluid" alt="n4" src="/imgCoversDiaries/n4.jpg"/>
                </Col>
                <Col>
                    <img className="img-fluid" alt="n5" src="/imgCoversDiaries/n5.jpg"/>
                </Col>
                <Col>
                    <img className="img-fluid" alt="n6" src="/imgCoversDiaries/n6.jpg"/>
                </Col> 
                </Row>            
            <Row> 
                <Col>
                    <img className="img-fluid" alt="n7" src="/imgCoversDiaries/n7.jpg"/>
                </Col>
                <Col>
                    <img className="img-fluid" alt="n8" src="/imgCoversDiaries/n8.jpg"/>
                </Col>
                <Col>
                    <img className="img-fluid" alt="n9" src="/imgCoversDiaries/n9.jpg"/>
                </Col>                   
            </Row>            
                <Row> 
                <Col>
                   <img className="img-fluid" alt="n10" src="/imgCoversDiaries/n10.jpg"/>
                </Col>
                <Col>
                    <img className="img-fluid" alt="n11" src="/imgCoversDiaries/n11.jpg"/>
                </Col>
                <Col>
                    <img className="img-fluid" alt="n12" src="/imgCoversDiaries/n12.jpg"/>
                </Col>                    
                 <Col>
                    <img className="img-fluid" alt="n13" src="/imgCoversDiaries/n13.jpg"/>
                </Col>            
            </Row>           
        </Container>
    );
}
 
export default CreateDiary1;