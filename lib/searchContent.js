'use client'

import { createContext, useContext, useState } from 'react';

const searchableContent = [
  // Home page content
  {
    title: "Welcome",
    content: "Welcome to Beamspeed's wiki. The goal of this site is to centralize documentation pertaining to the infrastructure which powers Beamspeed's network...",
    path: "/"
  },
  {
    title: "Target audience",
    content: "This site is primarily geared toward IT professionals such as field technicians, customer support representatives, and system / network administrators...",
    path: "/#target-audience"
  },
  {
    title: "Getting started",
    content: "Use the search bar to find any topics you need information on or click on Overview to see all pages in this wiki.",
    path: "/#getting-started"
  },

  // Expedience Programming page
  {
    title: "Expedience Programming",
    content: "This document explains how to configure a new or replacement Expedience BTS for Beamspeed's network.",
    path: "/expedience"
  },
  {
    title: "Programming new BTS",
    content: "Steps for programming a new BTS including restore to default settings and configuration.",
    path: "/expedience#new-bts"
  },
  {
    title: "Restore to Default Settings",
    content: "Instructions for restoring Expedience BTS to default settings.",
    path: "/expedience#restore-defaults"
  },
  {
    title: "Pre-installation configuration",
    content: "The base template below has the defaults being used on deployed base stations.",
    path: "/expedience#pre-install"
  },
  {
    title: "Base template default values",
    content: "Default configuration values for Expedience BTS including airlink, device, radio, and system settings.",
    path: "/expedience#base-template"
  },
  {
    title: "Non-default values",
    content: "Configuration values that differ from default settings.",
    path: "/expedience#non-default"
  },
  {
    title: "Upgrading to new version",
    content: "Process for upgrading Expedience BTS software.",
    path: "/expedience#upgrading"
  },
  {
    title: "Post Installation configuration",
    content: "The airlink parameter does not allow CPEs to access the newly deployed base station. Once the base station is fully operational check that the GPS has a lock and disable private mode.",
    path: "/expedience#post-install"
  },
  {
    title: "Replacement procedure",
    content: "In some cases a base will have problems such as underpower.",
    path: "/expedience#replacement"
  },

  // Brocade CES Template page
  {
    title: "Brocade CES Template",
    content: "Configuration templates and settings for Brocade CES devices.",
    path: "/brocade-ces-template"
  },
  {
    title: "Common Configuration",
    content: "Standard configuration settings applied to all Brocade CES devices.",
    path: "/brocade-ces-template#common-configuration"
  },
  {
    title: "Unique Configuration",
    content: "Device-specific configuration settings for Brocade CES devices.",
    path: "/brocade-ces-template#unique-configuration"
  },

  // BGP Configuration page
  {
    title: "BGP Configuration",
    content: "Beamspeed utilizes BGP routing to carry Internet and customer prefixes within our Autonomous System...",
    path: "/bgp"
  },

  // Email System page
  {
    title: "Email System",
    content: "Beamspeed's mail system is comprised of several servers and software packages operating in concert...",
    path: "/email"
  },

  // Microtik Configuration page
  {
    title: "Microtik Configuration",
    content: "Standard configuration templates for Microtik devices used in our network...",
    path: "/microtik"
  },

  // VOIP pages
  {
    title: "VOIP System",
    content: "Documentation for Beamspeed's Voice over IP system including configuration and troubleshooting.",
    path: "/voip"
  },
  {
    title: "VOIP Provisioning",
    content: "Steps for provisioning new VOIP services and devices.",
    path: "/voip/provisioning"
  },
  {
    title: "VOIP Troubleshooting",
    content: "Common issues and troubleshooting procedures for VOIP services.",
    path: "/voip/troubleshooting"
  },

  // Inventory and Ordering
  {
    title: "Inventory and Ordering",
    content: "System for tracking and managing network equipment inventory.",
    path: "/inventory-and-ordering"
  },


  // Platypus
  {
    title: "Platypus Documentation",
    content: "Documentation about Platypus regarding dependent and external applications developed to assist in customer management.",
    path: "/platypus"
  },
  {
    title: "Custom Applications",
    content: "Information about custom applications developed for the Platypus system.",
    path: "/platypus#custom-applications"
  },
  {
    title: "Service Provisioning",
    content: "Details about service provisioning within the Platypus system.",
    path: "/platypus#service-provisioning"
  },

  // Puppet
  {
    title: "Puppet Configuration",
    content: "Configuration management using Puppet for automated system administration.",
    path: "/puppet"
  },

  // Ansible
  {
    title: "Ansible Documentation",
    content: "Automation and configuration management using Ansible.",
    path: "/ansible-guide"
  },


  // Network pages
  {
    title: "Network",
    content: "Overview of Beamspeed's network infrastructure and topology.",
    path: "/network"
  },
  {
    title: "BGP LOA",
    content: "Tools and procedures for monitoring network performance and health.",
    path: "/network/bgp-loa"
  },
  {
    title: "Circuit Information",
    content: "Security policies and procedures for network infrastructure.",
    path: "/network/circut-information"
  },
  {
    title: "LTE",
    content: "Common network issues and troubleshooting procedures.",
    path: "/network/lte"
  },

  // Microtik specific pages
  {
    title: "5GHz AP Template",
    content: "Configuration template for 5GHz Access Points including RADIUS, user, system and wireless configurations.",
    path: "/microtik/5ghz-template"
  },
  {
    title: "SXT CPE Template",
    content: "Configuration template for SXT Customer Premise Equipment including wireless setup and bridge configuration.",
    path: "/microtik/sxt-cpe-template"
  }
];

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const queryLower = query.toLowerCase();
    const results = searchableContent.filter(page => 
      page.title.toLowerCase().includes(queryLower) ||
      page.content.toLowerCase().includes(queryLower)
    );

    setSearchResults(results);
  };

  const value = {
    searchQuery,
    setSearchQuery,
    searchResults,
    setSearchResults,
    handleSearch,
    searchableContent
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}

export default searchableContent; 