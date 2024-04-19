"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breadcrumbs from "../components/breadcrumbs.js"; // Ensure you have this component set up
import Footer from "../components/footer.js"; // Adjust the path as necessary
import "bootstrap/dist/css/bootstrap.min.css";
import { CompareSurfboardsProvider } from "../contexts/CompareSurfboardsContext";

const inter = Inter({ subsets: ["latin"] });

/*export const metadata = {
  title: "The ultimate Surfboards Comparator",
  description: "The ultimate Surfboards Comparator",
};*/

export default function RootLayout({ children }) {
  const breadcrumbItems = [
    { title: "Home", href: "/" },
    // Add more breadcrumb items as needed
  ];

  return (
    <CompareSurfboardsProvider>
      <html lang="en">
        <body className={inter.className}>
          <Container fluid>
            <Row className="align-items-center">
              <Col xs={1}>
                <a href="/main/">
                  {" "}
                  <img
                    id="logo"
                    src="\img\logo.png"
                    alt="logo of a surfboard with a tick"
                  ></img>{" "}
                </a>{" "}
              </Col>
              <Col xs={9}>
                <h1 className="title">The ultimate Surfboards Comparator</h1>
              </Col>
              <Col xs={2}>
                <a href="admin">
                  {
                    //Login
                  }
                </a>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                {/* Render Breadcrumbs */}
                <Breadcrumbs items={breadcrumbItems} />
              </Col>
            </Row>
          </Container>
          {children}
          <Footer /> {/* This is where the Footer gets rendered */}
        </body>
      </html>
    </CompareSurfboardsProvider>
  );
}
