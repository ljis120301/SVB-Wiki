"use client"

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"

export default function DecodingZTEDHCPPage() {
  return (
    <div className="p-6 w-full">
      <div className="w-full overflow-hidden">
        <Breadcrumb className="mb-6 w-full overflow-hidden">
          <BreadcrumbList className="flex-wrap">
            <BreadcrumbItem className="break-all">
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem className="break-all">
              <BreadcrumbLink href="/network">Network</BreadcrumbLink>
            </BreadcrumbItem>
            
            <BreadcrumbSeparator />
            <BreadcrumbItem className="break-all">
              <BreadcrumbPage>Decoding ZTE DHCP Client ID</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-6 w-full overflow-hidden">
          <h1 className="text-3xl font-bold break-all dark:text-white">Decoding ZTE DHCP Client ID</h1>

          <nav className="space-y-2">
            <h2 className="text-lg font-semibold dark:text-white">Table of Contents</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li>Decoding LTE IMSI from DHCP Client Identifier in ISC-DHCPD</li>
              <li>ZTE Client ID format</li>
              <li>Decoding in ISC-DHCPD</li>
            </ul>
          </nav>

          <section id="overview" className="space-y-4">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">
              Decoding LTE IMSI from DHCP Client Identifier in ISC-DHCPD
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              ZTE vGW encodes client-specific information such as the GTP-C, IMSI, and NSAPI in the DHCP Client Identifier field.
              This document will help the reader to understand the format of the field, and how to decode it.
            </p>
          </section>

          <section id="client-identifier" className="space-y-6">
            <h3 className="text-xl font-semibold scroll-mt-16 dark:text-white">
              Client Identifier from Wireshark (Copy {`>`} as Hex Dump)
            </h3>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm">
              <pre className="whitespace-pre-wrap break-words">0000   3d 0c 0a 03 05 37 13 72 09 00 00 00 58 67</pre>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              Ignore the first quad zeros in the value. So, we have:
            </p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm">
              <code>3d 0c 0a 03 05 37 13 72 09 00 00 00 58 67</code>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              This is the hex representation of the DHCP Option in TLV-encoded format.
            </p>
            <code className="block bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono">
              {`<Type><Length><Value>`}
            </code>
            <p className="text-gray-700 dark:text-gray-300">
              The first hextet, <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">3d</code>, signifies the DHCP Option Type. Translating it to decimal we get <code className="font-mono">61</code>. This is the &apos;Client Identifier&apos; option.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The second hextet, <code className="font-mono">0c</code>, is the length of the remaining data payload contained within the option. Converting it to decimal returns <code className="font-mono">12</code>. This means the next 12 bytes in the packet are the &apos;value&apos; of this DHCP Option.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              So, we end up with this value:
            </p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm">
              <pre className="whitespace-pre-wrap break-words">
                # DHCP Option Value
                0a 03 05 37 13 72 09 00 00 00 58 67
              </pre>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              There is no specified format for this value. It can contain any value, and it is up to the network operator to assign significance to the contained value.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              In our case, we know ZTE encodes useful client information into this field in a pre-defined format. We can use this information to reliably decode the packet contents.
            </p>
          </section>

          <section id="format" className="space-y-6">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">ZTE Client ID Format</h2>
            <p className="text-gray-700 dark:text-gray-300">
              ZTE has defined the following format for the Client Identifier:
            </p>
            <code className="block bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono">
              {`<4 bytes:GTP-C address(PGW)> <8 bytes:IMSI with trailing NSAPI>`}
            </code>
            <p className="text-gray-700 dark:text-gray-300">
              Recall the value from the previous packet inspection, <code className="font-mono">0a 03 05 37 13 72 09 00 00 00 58 67</code>. Let&apos;s decode this value given the specified ZTE Client ID format.
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
              <h3 className="font-semibold mb-4 dark:text-white">GTP-C IP Address</h3>
              <pre className="font-mono text-sm text-gray-700 dark:text-gray-300">
                0a    03   05   37 (hex)
                <br />
                10    3    5    55 (dec)
              </pre>
              </div>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                Converting the first 4 bytes to decimal reveals the IP address of the packet gateway the DHCP Request came in on, <code>10.3.5.55</code> .
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                The remainder of the packet (8 bytes) is the IMSI that has been assigned the IP, along with its Network Service Access Point Identifier (<a href="https://en.wikipedia.org/wiki/Network_service_access_point" className="text-primary dark:text-primary-dark hover:underline">NSAPI</a>).
              </p>

              <p className="text-gray-700 dark:text-gray-300">
                The hex values for these bytes are not actual decimal encodings of the IMSI, but rather then IMSI itself with each byte reversed.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
              <pre className="font-mono text-sm text-gray-700 dark:text-gray-300">
                
                13 72 09 00 00 00 58 67
                <br />
                31 27 90 00 00 00 85 76 (bytes reversed)
                <br />
                31 27 90 00 00 00 85 7 (IMSI) (6=NSAPI)
              </pre>
              </div>

          </section>

          <section id="decoding" className="space-y-6">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Decoding in ISC-DHCPD</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Now that we know how to manually decode the Client Identifier option it would be beneficial to automatically decode this information within the DHCP server so that it can be saved in the lease database.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              We&apos;ll use ISC DHCP&apos;s conditional evaluation (dhcp-eval(5)) functionality to programmatically extract, convert, and store the values in the following format:
            </p>
            <code className="block bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono">
              {`<GTP-C address>|<IMSI><NSAPI>`}
            </code>
            <p className="text-gray-700 dark:text-gray-300">
              To do this we would use the following configuration within the subnet {`{ }`} declaration block:
            </p>
            <div className="block bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono">
              <pre className="whitespace-pre-wrap leading-relaxed text-sm ">{`set imsi = concat(
    # GTP-C
    binary-to-ascii(10, 8, ".", substring(option dhcp-client-identifier, 0, 4)), "|",
    # IMSI
    reverse(1, suffix(concat("0", binary-to-ascii(16, 8, "", substring(option dhcp-client-identifier, 4,  1))), 2)),
    reverse(1, suffix(concat("0", binary-to-ascii(16, 8, "", substring(option dhcp-client-identifier, 5,  1))), 2)),
    reverse(1, suffix(concat("0", binary-to-ascii(16, 8, "", substring(option dhcp-client-identifier, 6,  1))), 2)),
    reverse(1, suffix(concat("0", binary-to-ascii(16, 8, "", substring(option dhcp-client-identifier, 7,  1))), 2)),
    reverse(1, suffix(concat("0", binary-to-ascii(16, 8, "", substring(option dhcp-client-identifier, 8,  1))), 2)),
    reverse(1, suffix(concat("0", binary-to-ascii(16, 8, "", substring(option dhcp-client-identifier, 9,  1))), 2)),
    reverse(1, suffix(concat("0", binary-to-ascii(16, 8, "", substring(option dhcp-client-identifier, 10, 1))), 2)),
    reverse(1, suffix(concat("0", binary-to-ascii(16, 8, "", substring(option dhcp-client-identifier, 11, 1))), 2))
);`}</pre>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              This looks quite complex, but let&apos;s break it down.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              First, we need to extract the GTP-C address which is stored in the first 4 bytes of the payload 
              <code> (0a 03 05 37)</code>.
            </p>
            <div className="block bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono">
              <pre className="whitespace-pre-wrap break-words leading-relaxed">
                # GTP-C
                substring(option dhcp-client-identifier, 0, 4)
              </pre>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              This actually just retrieves the bytes in binary format. It isn&apos;t much use to us in this format so we must convert it to something more reasonable.
            </p>
            <div className="block bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono">
              <pre className="whitespace-pre-wrap break-words leading-relaxed"># Convert the value of byte to ASCII.
                <br />
                # Process each byte as base 10 (decimal), byte width is 8 bits, join ASCII chars together by "."
                <br />
                binary-to-ascii(10, 8, ".", substring(option dhcp-client-identifier, 0, 4)) {`=>`} 10.3.5.55</pre>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              Now that we have the GTP-C address, we must process the IMSI. Each digit of the IMSI is stored as a &apos;nibble&apos; (4 bits) within each hextet (8 bits / 1 byte). Each hextet represents two digits of the IMSI. There are several steps that must be taken to process each byte & convert it to the correct IMSI format.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              We'll focus on the conversion of one byte for our example in order to grant the reader a clear understanding of the process used.
            </p>
            <div className="block bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono">
              <pre className="whitespace-pre-wrap break-words leading-relaxed">
                # Convert the value of the first byte of the IMSI
                <br />
                # Process the byte as base 16 (hexadecimal), byte width is 8 bits, do not join ASCII chars
                <br />
                binary-to-ascii(16, 8, "", substring(option dhcp-client-identifier, 4, 1)) {`=>`} 13</pre>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              We now have the hex representation of the first byte, the first IMSI digits in reverse.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              An astute reader may recognize a problem here. When converting values containing preceding zeros from binary to hex the zero is dropped during conversion. Therefore, seventh byte in our example <code>(09)</code> would return the hex value <code className="font-mono bold">9</code> and not <code className="font-mono">09</code>. This effectively removes a necessary digit from the 15-character IMSI, and therefore would result in incomplete IMSI number.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              To rectify this we will prepend <code className="font-mono">0</code> to every single value read:
            </p>
            <div className="block bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono">
              <pre className="whitespace-pre-wrap break-words leading-relaxed">
                concat("0", "13") {`=>`} 013
                <br />
                concat("0", "72") {`=>`} 072
                <br />
                concat("0", "9") {`=>`} 09
                <br />
                ...
              </pre>
            </div>

            <p className="text-gray-700 dark:text-gray-300">
              While this resolves the issue of values with preceding zeros having the zero removed it now introduces an extra digit onto values that were not truncated.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              To resolve this we will simply use the suffix() command to grab only the last two bytes from the value:
            </p>
                <div className="block bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono">
                <pre className="whitespace-pre-wrap break-words leading-relaxed">
                suffix("013", 2) {`=>`} 13
                <br />
                suffix("072", 2) {`=>`} 72
                <br />
                suffix("09", 2) {`=>`} 09
              </pre>
            </div>

            <p className="text-gray-700 dark:text-gray-300">
              Now that we have the original value which was stored in the byte sequence. We must simply reverse the value to obtain the correct value:
            </p>
            <div className="block bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono">
              <pre className="whitespace-pre-wrap break-words leading-relaxed">
                reverse(1, "13") {`=>`} 31
                <br />
                reverse(1, "72") {`=>`} 27
                <br />
                reverse(1, "09") {`=>`} 90
                <br />
                ...
              </pre>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              Performing the above functions on bytes <code className="font-mono">5 - 12</code>, and joining them with <code className="font-mono">concat()</code> results in the following decoded IMSI & NSAPI:
            </p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <p className="font-mono text-sm">3127900000008576</p>
            </div>
          </section>

          <div className="mt-8 p-4 border dark:border-gray-700 rounded-lg w-full overflow-hidden">
            <h2 className="text-xl font-semibold mb-2 break-all dark:text-white">Last Modified</h2>
            <p className="text-gray-600 break-all dark:text-gray-400">
              Last update: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
