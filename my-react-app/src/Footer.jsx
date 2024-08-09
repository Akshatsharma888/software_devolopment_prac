
// this is how we create a component in react. and then call it in the app.jsx file

function Footer(){
  return(
    <footer>
    <p>&copy; {new Date().getFullYear()} your website name.</p>
    </footer>
  );
}

export default Footer;