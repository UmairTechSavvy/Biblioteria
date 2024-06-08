import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import PDFViewer from '../componenets/templates'; // Adjust the path according to your project structure
import {motion} from 'framer-motion'
import B5 from '/src/b5.jpg'



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

function Ebook({ showPage, setShowPage, onHomePageClick }) {
  const [pdfFile, setPdfFile] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [show, setShow] = useState(false);

  const handleSelectPDF = (url) => {
    setPdfFile(url);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setShow(true);
  };
  const handleHomePageClick = () => {
    sessionStorage.setItem("isEbookPage", JSON.stringify(false));
    window.location.reload(); // Reload the page to show the homepage
  };
  const filteredPDFSources = pdfSources.filter((source) =>
    source.name && source.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
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
    mixBlendMode: "multiply",
    zIndex: 5,
    borderStyle: "inset", // Apply groove border style
    borderWidth: "2px", // Border width
  }}
>
  Explore
</motion.button>
      <motion.header 
      
      whileInView={{color:"#1400c6"}}
      whileHover={{scale:2}}
      className="text-center">
        <h1 className="text-3xl font-bold text-gray-300 italic mb-4">
          <strong>Biblioteria</strong>
        </h1>
      </motion.header>
      <motion.div className="mb-8" initial={{rotate:0}} animate={{rotate:360}}>
        <h2 className="text-xl text-gray-300 font-semibold italic mb-2">
          <strong>Find a book to read:</strong>
        </h2>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search PDF by name"
          className="px-4 py-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500 bg-white"
        />

        {show && (
          <ul className="flex flex-wrap justify-center">
            {filteredPDFSources.map((source, index) => (
              <li key={index} className="mr-4 mb-4">
                <a
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  {source.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </motion.div>
      {pdfFile && <PDFViewer pdfUrl={pdfFile} />}
      {!pdfFile && (
        <div className="drop-area border-2 border-gray-300 border-dashed rounded-md p-10 cursor-pointer">
          <p className="text-gray-600">Or drag and drop a PDF file here</p>
        </div>
      )}
    </motion.div>
  );
}

export default Ebook;