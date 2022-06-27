import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function CheckoutSteps({ step1, step2, step4 }) {

    return (
        <Nav className='justify-content-center mb-4'>
            <Nav.Item>
                {step1 ? (
                    <LinkContainer to='/login'>
                        <Nav.Link>Логін</Nav.Link>
                    </LinkContainer>
                ) : (
                        <Nav.Link disabled>Логін</Nav.Link>
                    )}
            </Nav.Item>

            <Nav.Item>
                {step2 ? (
                    <LinkContainer to='/shipping'>
                        <Nav.Link>Доставка</Nav.Link>
                    </LinkContainer>
                ) : (
                        <Nav.Link disabled>Доставка</Nav.Link>
                    )}
            </Nav.Item>

           

            <Nav.Item>
                {step4 ? (
                    <LinkContainer to='/placeorder'>
                        <Nav.Link>Підтвердити замовлення</Nav.Link>
                    </LinkContainer>
                ) : (
                        <Nav.Link disabled>Підтвердити замовлення</Nav.Link>
                    )}
            </Nav.Item>
        </Nav>
    )
}

export default CheckoutSteps
