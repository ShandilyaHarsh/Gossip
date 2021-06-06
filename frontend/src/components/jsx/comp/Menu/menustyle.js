import styled from 'styled-components';

export const StyledMenu = styled.nav`
         display: ${({open})=>open?"flex":"none"};
         flex-direction: column;
         justify-content: center;
         background-color:#1d1c22 ;
         height: 100vh;
         text-align: left;
         padding: 2rem;
         
         position: absolute;
         transform: ${({ open }) =>
           !open ? 'translateX(100%)' : 'translateX(0%)'};
          
         top: 0;
         right:0;
         
         transition: all 1s ease-in-out;

         @media (max-width: ${({ theme }) => theme.mobile}) {
           width: 100%;
         }

         a {
           font-size: 22px;
           text-transform: uppercase;
           padding: 2rem 0;
           font-weight: bold;
           letter-spacing: 0.25rem;
           color: ${({ theme }) => theme.primaryDark};
           text-decoration: none;
           transition: color 0.3s linear;

           @media (max-width: ${({ theme }) => theme.mobile}) {
             font-size: 1.5rem;
             text-align: center;
           }

           &:hover {
             color: ${({ theme }) => theme.primaryHover};
           }
         }
       `;
