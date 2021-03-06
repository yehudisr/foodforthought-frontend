import styled from 'styled-components';

export const Box = styled.div`
padding: 80px 60px;
background: #ECF0E9;
/* position: absolute; */
bottom: 0;
width: 100%;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #5E8074;
margin-bottom: 20px;
font-size: 14px;
text-decoration: none;

&:hover {
	color: #485145;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 18px;
color: #5E8074;
margin-bottom: 40px;
font-weight: bold;
`;
export const Text = styled.p`
font-size: 14px;
color: #5E8074;
margin-top: 20px;

`
