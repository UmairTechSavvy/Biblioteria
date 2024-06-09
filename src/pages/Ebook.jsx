import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import PDFViewer from '../componenets/templates'; // Adjust the path according to your project structure
import {motion} from 'framer-motion'
import B5 from '/src/b5.jpg'
import Footer from '../componenets/footer'



const pdfSources = [
  {
    name: 'React in Action',
    url: 'https://web.archive.org/web/20180827131006/http://home.earthlink.net/~momotuk/pointers.pdf',
  },
  {
    name: 'The basic of C Programming',
    url: 'https://www.phys.uconn.edu/~rozman/Courses/P2200_13F/downloads/TheBasicsofCProgramming-draft-20131030.pdf',
  },
  {
    name: 'C# Programming Yellow Book',
    url: 'https://static1.squarespace.com/static/5019271be4b0807297e8f404/t/5df9306ec60881645ea57ced/1576611956760/CSharp+Book+2019+Refresh.pdf',
  },
  {
    name: 'Learning C# Language',
    url: 'https://riptutorial.com/Download/csharp-language.pdf',
  },
  {
    name: 'C++ for C Programmers',
    url: 'https://tfetimes.com/wp-content/uploads/2015/04/c-for-c-programmers.pdf'
 
  },
  {
    name: 'Open Data Structures (in C++)',
    url: 'https://opendatastructures.org/ods-cpp.pdf'
 
  },
  {
    name: 'Programming IBM Rational Development Studio forILE COBOL Language Reference',
    url: 'https://www.ibm.com/docs/de/ssw_ibm_i_74/pdf/sc092539.pdf'
 
  },
 
  {
    name: 'How To Win Friends And Influence People',
    url: 'https://www.rfpmm.org/pdf/how-to-win-friends-and-influence-people.pdf'
 
  },
  {
    name: 'Think And Grow Rich',
    url: 'https://apex.oracle.com/pls/apex/lonestar/r/files/static/v13Y/Think-And-Grow-Rich_2011-06.pdf'
 
  },
  {
    name: 'Atomic Habits',
    url: 'https://dn790007.ca.archive.org/0/items/atomic-habits-pdfdrive/Atomic%20habits%20%28%20PDFDrive%20%29.pdf'
    
 
  },
  {
    name: 'Mindset the new pysychology of success',
    url: 'https://adrvantage.com/wp-content/uploads/2023/02/Mindset-The-New-Psychology-of-Success-Dweck.pdf'
 
  },
  {
    name: 'The Power Of Now',
    url: 'https://www.adphc.gov.ae/-/media/Project/ADPHC/ADPHC/Books-and-Publications/The-Power-of-now-Eng.pdf'
 
  },
  {
    name: 'The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life',
    url: 'https://nibmehub.com/opac-service/pdf/read/The%20Subtle%20Art%20of%20Not%20Giving%20a%20Fck%20A%20Counterintuitive%20Approach%20to%20Living%20a%20Good%20Life%20by%20Mark%20Manson%20(z-lib.org).pdf'
 
  },
  {
    name: 'Daring Greatly: How the Courage to Be Vulnerable Transforms the Way We Live, Love, Parent, and Lead"',
    url: 'https://site.ieee.org/sb-nhce/files/2021/06/Brene-brown-book1.pdf'
 
  },
  {
    name: 'Grit: The Power of Passion and Perseverance"',
    url: 'https://dingwallasc.com/wp-content/uploads/2020/03/grit-the-power-of-passion-and-perserverance-angela-duckworth.pdf'
 
  },
  {
    name: 'Mans Search for Meaning',
    
    url: 'https://antilogicalism.com/wp-content/uploads/2017/07/mans-search-for-meaning.pdf'
 
  },
  
];

const Ebook = ({ showPage, setShowPage, onHomePageClick }) => {
  const [pdfFile, setPdfFile] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [show, setShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredPDFSources = pdfSources.filter((source) =>
    source.name && source.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPDFSources.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredPDFSources.slice(startIndex, startIndex + itemsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSelectPDF = (url) => {
    setPdfFile(url);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setShow(e.target.value.trim() !== '');
    setCurrentPage(1); // Reset to first page on new search
  };

  const handleHomePageClick = () => {
    sessionStorage.setItem("isEbookPage", JSON.stringify(false));
    window.location.reload(); // Reload the page to show the homepage
  };

  return (
    <>
      <motion.div
        className="min-h-screen flex flex-col items-center justify-center relative"
        style={{
          backgroundImage: `url(${B5})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, #0000ff, #ffffff)',
            opacity: 0.8,
            zIndex: -1,
          }}
          initial={{ y: '100vh' }}
          animate={{ y: 0 }}
          transition={{ duration: 2, delay: 1 }}
        ></motion.div>

        <motion.button
          className="absolute left-10 top-4 rounded-lg shadow-lg text-5xl text-red italic font-bold border border-gray-800"
          onClick={handleHomePageClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            backgroundColor: "white",
            zIndex: 5,
            borderStyle: "inset",
            borderWidth: "2px",
          }}
        >
          Home Page
        </motion.button>

        <div style={{ display: "flex" }}>
          {"Biblioteria".split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: index * 0.1 }}
              style={{ display: "inline-block", fontStyle: "italic" }}
              className='font-bold italic text-2xl text-gray-300'
              whileHover={{ scale: 1.2 }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        <div style={{ display: "flex" }}>
          {"Find a book to read".split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: index * 0.1 }}
              style={{ display: "inline-block", fontStyle: "italic" }}
              className='font-bold italic text-2xl text-gray-400 mt-0'
            >
              {letter}
            </motion.span>
          ))}
        </div>

        <motion.div>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search PDF by name"
            className="px-4 py-2 mb-4 mt-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500 bg-white"
          />

          {show && (
            <div className="w-full max-w-4xl mx-auto">
              <ul className="flex flex-wrap justify-center space-x-4 space-y-4">
                {currentItems.map((source, index) => (
                  <li key={index} className="w-full sm:w-auto">
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold text-center rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
                      onClick={() => handleSelectPDF(source.url)}
                    >
                      {source.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center mt-4 space-x-2">
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition duration-300 ease-in-out ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
                >
                  Previous
                </button>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition duration-300 ease-in-out ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}
                >
                  Next
                </button>
              </div>
              <div className="flex justify-center mt-2">
                <span className="text-sm text-gray-600">Page {currentPage} of {totalPages}</span>
              </div>
            </div>
          )}
        </motion.div>

        {pdfFile && <PDFViewer pdfUrl={pdfFile} />}
        {!pdfFile && (
          <div className="drop-area border-2 border-gray-300 border-dashed rounded-md p-10 cursor-pointer">
            <p className="text-gray-600">Or drag and drop a PDF file here</p>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default Ebook;