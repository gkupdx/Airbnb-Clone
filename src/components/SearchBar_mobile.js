//// SearchBar_mobile.js

import { useState, useEffect } from 'react';
import { BiSearch, BiChevronLeft } from 'react-icons/bi';
import { BsChevronRight } from 'react-icons/bs';
import Modal from 'react-modal';

import TabletBar from './TabletBar';
import TabletBarSticky from './TabletBarSticky';

const SearchBar = () => {
  const [modalState, setModalState] = useState(false);
  const [sticky, setSticky] = useState(true);
  const [tabletView, setTabletView] = useState(false);

  const searchIconStyle = {
    color: "red",
    fontSize: "18px",
    marginRight: "5px"
  }

  const chevronRightStyle = {
    fontSize: "25px",
    fontWeight: "600",
    backgroundImage: "linear-gradient(to right, #4d0585, #b3277f)",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent"
  }

  // Transition from FIXED to STICKY search bar on window scroll
  const stickySearchBar = () => {
    if (window.pageYOffset === 0) {
      setSticky(false);
    } else {
      setSticky(true);
    }
  }

  useEffect(() => {
    stickySearchBar()
    window.addEventListener("scroll", stickySearchBar)
  });

  // Transition from MOBILE to TABLET search bar on window resize (dynamic)
  const tabletSearchBar = () => {
    if (window.innerWidth >= 850) {
      setTabletView(true);
    } else {
      setTabletView(false);
    }
  }

  useEffect(() => {
    tabletSearchBar()
    window.addEventListener("resize", tabletSearchBar)
  })

  // Open modal on search bar click
  const openModal = () => {
    setModalState(true);
  }

  // Close modal on chevron button click
  const closeModal = () => {
    setModalState(false);
  }

  return (
    <>
    {!tabletView ?
      // browser width LESS than 850px ---> display MOBILE search bar
      <div className={!sticky ? "fixedSearchBar" : "stickySearchBar"}>
        <button className={!sticky ? "searchBtn" : "searchBtn2"}><BiSearch style={searchIconStyle}/>Where are you going?</button>
      </div>
      :
      // browser width GREATER/EQUAL to 850px ---> display TABLET search bar
      <div className={!sticky ? "fixedSearchBar" : "stickySearchBar"}>
        {!sticky ? <TabletBar /> : <TabletBarSticky />}
      </div>
    }

      {/* Search bar onClick modal */}
      <Modal className={modalState ? "openModal" : "closedModal"} isOpen={modalState}>
        <button className="closeModalBtn" onClick={closeModal}><BiChevronLeft /></button>
        <input className="inputBtn" type="text" placeholder="Where are you going?"/>
        <p className="flavorText">GO ANYWHERE, ANYTIME</p>
        <button className="flexibleBtn"><p>I'm flexible</p><BsChevronRight style={chevronRightStyle}/></button>
      </Modal>
    </>
  )
}

export default SearchBar;
