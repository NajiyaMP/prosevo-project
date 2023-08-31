import {Container,Nav,Navbar,NavLink} from 'react-bootstrap';



function Navigation() {


  
  return (
   
    <>
      <Navbar bg="dark" variant="dark"  sticky="top" fixed="top" expand="lg">
        <Container>

          <Nav className="me-auto">
            
            <NavLink href="/Salads">Salads and Soup</NavLink>
            <NavLink href="/Barnys">From The Barnyard</NavLink>
            <NavLink href="/Hen">From the Hen House</NavLink>

          </Nav>
        </Container>
      </Navbar>
       
    

      
      
    </>
    
  );
}

export default Navigation;