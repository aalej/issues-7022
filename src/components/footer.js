"use client";

import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <Container fluid className="bg-light mt-5">
      <Row>
        <Col className="text-center py-3">
          © {new Date().getFullYear()} The Ultimate Surfboards Comparator
        </Col>
        <Col className="text-center py-3">
          <Link href="/main/disclaimer" passHref>
            Disclaimer
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
