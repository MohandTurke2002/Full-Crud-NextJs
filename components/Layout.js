import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Container from "@mui/material/Container";
function Layout(props) {
  return (
    <Container className="page">
      <Header />
      {props.children}
      <Footer />
    </Container>
  );
}

export default Layout;
