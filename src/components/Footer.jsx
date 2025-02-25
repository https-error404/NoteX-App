const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-4 mt-10">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} NoteX - Your Digital Notebook. All rights reserved.
          </p>
          <div className="flex justify-center my-2 mx-4 space-x-4">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-400">Contact</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  