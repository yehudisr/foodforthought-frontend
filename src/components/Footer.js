import React from "react"
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles"

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "#485145",
				textAlign: "center",
				marginTop: "-50px",
                marginBottom: "40px" }}>
		Food For Thought: A Community Food Partnership 
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Vision</FooterLink>
			
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Post Food Listing</FooterLink>
			<FooterLink href="#">Place an Order</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="mailto:foodforthoughtorder@gmail.com">foodforthoughtorder@gmail.com</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
