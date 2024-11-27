'use client'

import Image from "next/image";
import Search from "../components/Search";
import { useState } from "react";

export default function Home() {
  // Define the searchable content
  const wikiContent = [
    {
      title: "Welcome",
      content: "Welcome to Beamspeed's wiki. The goal of this site is to centralize documentation pertaining to the infrastructure which powers Beamspeed's network. Documents contained herein will attempt to provide the reader with site specific details regarding Beamspeed's implementation of various hardware & software which powers our operational network."
    },
    {
      title: "Target audience",
      content: "This site is primarily geared toward IT professionals such as field technicians, customer support representatives, and system / network administrators. Some concepts may be easily understood by those not serving directly in a technical capacity."
    },
    {
      title: "Getting started",
      content: "Use the search bar to find any topics you need information on or click on Overview to see all pages in this wiki."
    }
  ];

  return (
    <div className="min-h-screen p-8 font-sans">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Beamspeed's Wiki</h1>

        <Search content={wikiContent} />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
          <ul className="list-disc pl-6">
            <li>Welcome</li>
            <li>Target audience</li>
            <li>Getting started</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Welcome</h2>
          <p className="mb-4">
            Welcome to Beamspeed's wiki. The goal of this site is to centralize documentation pertaining to the infrastructure which powers Beamspeed's network. Documents contained herein will attempt to provide the reader with site specific details regarding Beamspeed's implementation of various hardware & software which powers our operational network. At the end of each document the reader should at least have a high to intermediate level understanding of the selected topic's role and configuration in our network.
          </p>
          <p>
            Content is organized into various sections according to type / role (ex: network, servers). Some articles may be more detailed than others. This will depend on whether the subject is specific solely to Beamspeed, and the public availability of other training resources.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Target audience</h2>
          <p className="mb-4">
            This site is primarily geared toward IT professionals such as field technicians, customer support representatives, and system / network administrators. Some concepts may be easily understood by those not serving directly in a technical capacity. However, it should not be assumed all content will be as easily digestible due to the inherent technical complexity of a service provider IP network.
          </p>
          <p>
            It is not the intent of this site to be a learning resource for the topics contained herein. It is assumed the reader has a basic understanding of the subject or is willing to seek resources to obtain a thorough understanding of any topics which he/she does not fully understand.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Getting started</h2>
          <p>
            Use the search bar to find any topics you need information on or click on Overview to see all pages in this wiki.
          </p>
        </section>
      </main>
    </div>
  );
}
