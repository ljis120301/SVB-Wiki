"use client"

import { useEffect, useState } from 'react'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import TerminalCard from "@/components/ui/terminal-card"


export default function EmailPage() {
  const [showScrollButton, setShowScrollButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="p-2 sm:p-6 w-full relative">
      <div className="w-full overflow-x-auto">
        <Breadcrumb className="mb-6 w-full min-w-full">
          <BreadcrumbList className="flex-wrap">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Email</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-6 w-full">
          <h1 className="text-2xl sm:text-3xl font-bold break-words dark:text-white">Email</h1>

          <nav className="space-y-2 overflow-x-auto">
            <h2 className="text-lg font-semibold dark:text-white">Table of Contents</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 break-words">
              <li>
                <a href="#inbound-mail" className="hover:text-blue-600 dark:hover:text-blue-400">Inbound mail delivery</a>
                <ul className="list-disc list-inside ml-4">
                  <li>
                    <a href="#mail-exchanger" className="hover:text-blue-600 dark:hover:text-blue-400">Mail Exchanger</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#cyrus-imap" className="hover:text-blue-600 dark:hover:text-blue-400">Cyrus IMAP</a>
                <ul className="list-disc list-inside ml-4">
                  <li>
                    <a href="#authentication" className="hover:text-blue-600 dark:hover:text-blue-400">Authentication</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          <div className="space-y-6">
            <p className="text-gray-700 dark:text-gray-300 break-words">
              Beamspeed's mail system is comprised of several servers and software packages operating in concert to form a scalable, redundant, and reliable mail infrastructure.
            </p>

            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 break-words">One or more servers are configured for each of the following roles:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4 break-words">
                <li>Mail Exchanger - entry point for domains hosted within the Beamspeed mail system, or on third-party relay hosts.</li>
                <li>SMTP server - Processes outbound messages for authenticated users, or permitted relay clients.</li>
                <li>SPAM filter - Performs message content analysis, classification, and filtering according to system-wide and/or per-user message policies.</li>
                <li>Mail server - Hosts mail user accounts. Final destination inbound mail.</li>
              </ul>
            </div>

            <section id="inbound-mail" className="space-y-4">
              <h2 className="text-xl font-semibold scroll-mt-16 dark:text-white break-words">Inbound mail delivery</h2>
              <p className="text-gray-700 dark:text-gray-300 break-words">
                The diagram below depicts the basic flow of mail as it enters the Beamspeed mail system from the Internet to its final destination on the backend server providing mailbox services to the message recipient.
              </p>

              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg font-mono text-sm">
                <pre className="whitespace-pre-wrap break-words leading-relaxed text-center">
{`Internet
    |
    |
Mail exchanger (Postfix)
    |
    |
Spam filter (amavisd-new)
    |
    |
Backend server (Cyrus IMAP)`}
                </pre>
              </div>
            </section>

            <section id="mail-exchanger" className="space-y-4">
              <h2 className="text-xl font-semibold scroll-mt-16 dark:text-white">Mail Exchanger</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Mail exchangers are first stop for messages entering our network. Their job is to determine:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                <li>Whether destination domain / account is local to our system 2.</li>
              </ul>
            </section>

            <section id="cyrus-imap" className="space-y-6">
              <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Cyrus IMAP</h2>
              
              <section id="authentication" className="space-y-4">
                <h3 className="text-xl font-semibold scroll-mt-16 dark:text-white">Authentication</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Beamspeed stores mail user account credentials in a PostgreSQL database. Passwords are securely saved encrypted as bcrypt hashes. Cyrus is configured to handle user authentication through the Simple Authentication and Security Layer (SASL) framework's saslauthd daemon. Saslauthd, in turn, uses the Unix pam_pgsql Pluggable Authentication Module to query authentication credentials.
                </p>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold dark:text-white">/etc/rc.conf (FreeBSD)</h4>
                  <TerminalCard>
                    {`saslauthd_enable="YES"
saslauthd_flags="-a pam -rc"`}
                  </TerminalCard>

                  <h4 className="text-lg font-semibold dark:text-white">/usr/local/etc/pam.d/[csync|imap|pop|sieve]</h4>
                  <p className="text-gray-700 dark:text-gray-300 break-words">
                    A configuration file must be created for every daemon that will authenticate against saslauthd. Currently all of the Cyrus-related daemons share the same configuration. Thus, is sufficient to create the configuration file once and create hard links for every other instance.
                  </p>
                  <TerminalCard>
                    {`auth            required        pam_pgsql.so    config_file=/usr/local/etc/cyrus/pam_pgsql.conf
account         required        pam_pgsql.so    config_file=/usr/local/etc/cyrus/pam_pgsql.conf
password        required        pam_pgsql.so    config_file=/usr/local/etc/cyrus/pam_pgsql.conf`}
                  </TerminalCard>

                  <h4 className="text-lg font-semibold dark:text-white">/usr/local/etc/cyrus/pam_pgsql.conf</h4>
                  <TerminalCard>
                    {`connect = dbname=userdb user=mailuser password=VenRabSab8 connect_timeout=15 host=db-pgsql2.beamspeed.net

auth_query = SELECT password
    FROM users
    WHERE username = split_part(%u, '@', 1)
    AND domain = COALESCE(
        NULLIF(split_part(%u, '@', 2), ''), 'imap.beamspeed.net'
        );

pwd_query = UPDATE users SET psasword = %p WHERE mailbox = %u
pw_type = crypt`}
                  </TerminalCard>

                  <h4 className="text-lg font-semibold dark:text-white">PostgreSQL crypt support</h4>
                  <TerminalCard>
                    {`(cd /usr/ports/databases/postgresql84-contrib && make install)
psql -U pgsql -d userdb -f /usr/local/share/postgresql/contrib/pgcrypto.sql

# PG Crypt SELECT
SELECT true FROM users WHERE mailbox = 'blake@beamspeed.com' AND password_crypt = crypt('password', password_crypt);

# PG crypt UPDATE
UPDATE users SET password_crypt = crypt('new_pass' gen_salt('bf')) WHERE mailbox = 'blake@beamspeed.com';`}
                  </TerminalCard>
                </div>
              </section>

              <section id="administering-cyrus" className="space-y-6 overflow-x-auto">
                <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white break-words">Administering Cyrus</h2>
                <p className="text-gray-700 dark:text-gray-300 break-words">
                  The Cyrus server is administered using a customized IMAP client called 'cyradm'. This client communicates with the server over the standard IMAP protocol, but also adds a few proprietary extensions for managing Cyrus-specific, non-standard mailbox annotations.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  All of the instructions contained in this section are documented in the cyrus man pages, and numerous other sources online. This information is provided as a quick introduction to managing the Cyrus server. It is not intended to replace the man pages, or official Cyrus documentation.
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold scroll-mt-16 dark:text-white">Defining admin user(s)</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Cyrus administrators must be defined under the admins: line in imapd.conf.
                  </p>
                  <TerminalCard>{`admins: cyrus beamspeed_admin`}</TerminalCard>
                  <h3 className="text-xl font-semibold scroll-mt-16 dark:text-white">Logging into cyradm</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    You may login to cyradm with the following command.
                  </p>
                  <TerminalCard>{`cyradm --user <admin user> <hostname>

ie: cyradm --user cyrus localhost`}
                  </TerminalCard>

                  <h3 className="text-xl font-semibold scroll-mt-16 dark:text-white">Creating a mailbox</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Once authenticated only a single command is required to create a mailbox.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Note: User authentication is handled by saslauthd which is independent from cyradm.
                  </p>
                    
                  <TerminalCard>{`createmailbox user/username@example.com`}</TerminalCard>
                  
                  <p className="text-gray-700 dark:text-gray-300">Optional tasks:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                    <li>Set a quota.</li>
                    <li>Enable extension addresses & FUD queries.</li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300">
                    These may be accomplished with the following commands:
                  </p>
                  <TerminalCard>{`setacl user/username@example.com anonymous p0
setquota user/username@example.com <quota in kilobytes>`}</TerminalCard>
                

                  <h3 className="text-xl font-semibold scroll-mt-16 dark:text-white">Delete mailbox</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    From the cyradm(1) man page.
                  </p>
                  <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 dark:text-gray-300">
                    Administrators do not have implicit delete rights on mailboxes. Use the setaclmailbox command to grant the "x" permission to your principal if you need to delete a mailbox you do not own.
                  </blockquote>
                  <p className="text-gray-700 dark:text-gray-300">
                    An administrator would thus utilize the following commands to delete a mailbox.
                  </p>
                  <TerminalCard>{`setcal user/account@example.com cyrus x`}</TerminalCard>
                  <TerminalCard>{`deletemailbox user/account@example.com`}</TerminalCard>
                    
                  <p className="text-gray-700 dark:text-gray-300">
                    Note: Archived Beamspeed documentation, scripts, and configuration files may reference 'c' as the delete right instead of 'x'. This was RFC 2086 behavior and has been deprecated by RFC 4314.
                  </p>

                  <h3 className="text-xl font-semibold scroll-mt-16 dark:text-white">Restore deleted messages</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Beamspeed utilizes Cyrus delayed delete feature which prevents purging from disk deleted messages and/or mailboxes until a specified interval has passed.
                  </p>
                  <TerminalCard>
{`# imapd.conf
#
# Delay deletion of mailboxes
delete_mode: delayed

# Prepend deletedprefix to 'deleted' mailboxes
# (ie: DELETED/user/account@example.com)
deletedprefix: DELETED

# Delay deletion of messages
expunge_mode: delayed`}
                  </TerminalCard>
                  <p className="text-gray-700 dark:text-gray-300">
                    Cyrus is configured to purge deleted messages after forty-five (45) days, and deleted mailboxes after sixty (60) days. This allows plenty of time for an administrator to restore erroneously deleted messages and/or mailboxes.
                  </p>
                  <TerminalCard>
{`# cyrus.conf
#
EVENTS mailexpire    cmd="cyr_expire -E 7 -X 45 -D 60" at=0430`}
                  </TerminalCard>
                  
                  <p className="text-gray-700 dark:text-gray-300">
                    To recover deleted messages you must use the unexpunge (8) command. The man page shows all available command options. Utilize the following command to recover all messages deleted within -X cyr_expire time.
                  </p>
                  <TerminalCard>{`su - cyrus
unexpunge -a user/account@example.com`}</TerminalCard>

                  <p className="text-gray-700 dark:text-gray-300">
                    If the operation was successful the script should state that it has restored the specified mailbox(es). Otherwise, it will error and expect the problem be manually remedied before continuing.
                  </p>
                  <h4 className="text-lg font-semibold dark:text-white">Re-create user authentication info</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    restore-mailbox.rb only undeletes the mailbox from Cyrus. It does not restore the deleted user's authentication info. To do this you must re-create the email account in Platypus. Plat will create the user's authentication information as it does for new services, but error on the actual mailbox creation because the account already exist within Cyrus. This is normal.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    At this point the account has been re-created and can be accessed by the user. The user may be required to re-SUBSCRIBE to the restored folders within their IMAP client so that the inboxes are displayed within the client. This procedure is client-specific, and thus is not detailed here.
                  </p>
                </div>
              </section>

              <section id="fud-queries" className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  FUD communicates using plain text strings with parameters concatenated by the pipe symbol.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Queries consist of two parameters:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                  <li>Username</li>
                  <li>Mailbox</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300">
                  Queries are sent in the following format:
                </p>
                <TerminalCard>{`&lt;username&gt;|&lt;mailbox&gt;`}</TerminalCard>
                  
                <p className="text-gray-700 dark:text-gray-300">
                  If the user & mailbox exist, and the proper permissions are set, FUD returns a successful reply.
                </p>
                <TerminalCard>{`&lt;username&gt;|&lt;mailbox&gt;|&lt;new messages&gt;|&lt;timestamp of last message arrival&gt;|&lt;last accessed timestamp&gt;` }</TerminalCard>
               
                <p className="text-gray-700 dark:text-gray-300">
                  Example query & reply:
                </p>
                <TerminalCard>{`Q: blake@beamspeed.com|user/blake@beamspeed.com
R: blake@beamspeed.com|user/blake@beamspeed.com|0|1336878524|1336877639`}</TerminalCard>

                <p className="text-gray-700 dark:text-gray-300">
                  If the username / mailbox does not exist FUD returns an error string of UNKNOWN. If the 'anonymous' user does not have right '0' then FUD retruns an error string of PERMDENY.
                </p>
              </section>

              <section id="mailstore-replication" className="space-y-4">
                <h3 className="text-xl font-semibold scroll-mt-16 dark:text-white">Mailstore Replication</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  === Cyrus Replication allows Cyrus "…to replicate the mailstore on standalone Cyrus servers or 'backend' servers…[to a standby server in order to] provide a high-availability environment."
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Replication works by having the master server (primary mailstore / replica client) connect to a replica server (backup mailstore) and push changes.
                </p>
                <TerminalCard>{`Primary server (replica client) --messages--&gt; Standby/backup server (replica server)`}</TerminalCard>

                <h4 className="text-lg font-semibold dark:text-white">Configuring replication</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  To configure replication you must first enable the replication / synchronization server (syncserver) on the backup server by configuring it under SERVICES {} in cyrus.conf.
                </p>
                <TerminalCard>{`# Replica cyrus.conf
SERVICES 
syncserver   cmd="sync_server" listen="
`}
                </TerminalCard>

                <p className="text-gray-700 dark:text-gray-300">
                  This makes the backup server listen for incoming sync connections from the primary mailstore.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Second, you must enable the sync_client on the primary server. The -r flag enables 'rolling replication' which continuously (near real-time) replicates changes on the primary mailstore to the backup machine.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Note: Without rolling replication the sync_client must be manually run in order to backup the mailstore. This would typically be performed by creating an entry in the EVENT {} section of cyrus.conf
                </p>
                <TerminalCard>{` # Master cyrus.conf
 START {
  # Sychronization client with rolling / continuious replication enabled
  syncclient     cmd="sync_client -r"
 }

 # Master imapd.conf
 sync_host: <backup server hostname>
 sync_authname: <backup server's admin user>
 sync_password: <admin password>

 # Kerberos realm. Not utilized.
 sync_realm:
 sync_log: yes
guid_mode: sha1`}
                </TerminalCard>
              </section>
            </section>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 border dark:border-gray-700 rounded-lg w-full overflow-hidden">
        <h2 className="text-xl font-semibold mb-2 break-all dark:text-white">Last Modified</h2>
        <p className="text-gray-600 break-all dark:text-gray-400">
          Last configuration update: {new Date().toLocaleDateString()}
        </p>
      </div>

      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 z-50 dark:bg-blue-700 dark:hover:bg-blue-800"
          aria-label="Scroll to top"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 sm:h-6 sm:w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </button>
      )}
    </div>
  )
}
