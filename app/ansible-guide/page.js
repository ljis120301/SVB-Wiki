"use client"

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"

export default function GuidePage() {
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
              <BreadcrumbPage>Bootstrap host with Ansible</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-6 w-full overflow-hidden">
          <h1 className="text-3xl font-bold break-all dark:text-white">Bootstrap host with Ansible</h1>

          <div className="space-y-4 w-full overflow-hidden">
            <h2 className="text-2xl font-semibold break-all dark:text-white">Table of Contents</h2>
            <ul className="list-disc pl-8 space-y-2 text-gray-700 dark:text-gray-300">
              <li className="break-all">
                <a href="#manage-server" className="hover:text-blue-600 dark:hover:text-blue-400 break-all">
                  Manage server using Ansible
                </a>
              </li>
              <li className="break-all">
                <a href="#prerequisites" className="hover:text-blue-600 dark:hover:text-blue-400 break-all">
                  Prerequisites
                </a>
              </li>
              <li className="break-all">
                <a href="#bootstrap" className="hover:text-blue-600 dark:hover:text-blue-400 break-all">
                  Bootstrap a host
                </a>
              </li>
            </ul>
          </div>

          <section id="manage-server" className="space-y-6">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Manage server using Ansible</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Beamspeed uses Ansible for server configuration management. Ansible is an agent-less config mgmt software which utilizes SSH and Python to manage servers.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              A simple "playbook" exists to install Python on a server, and create a dedicated "ansible" user which will be used for system management.
            </p>
          </section>

          <section id="prerequisites" className="space-y-6">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Prerequisites</h2>
            
            <div className="space-y-4">
              <h3 className="text-xl font-medium dark:text-gray-200">1. Install Ansible</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Install Ansible on your workstation using your package manager:
              </p>
              <div className="space-y-2">
                <p className="text-gray-700 dark:text-gray-300">For FreeBSD:</p>
                <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm">
                  pkg install py39-ansible
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mt-4">For Ubuntu/Debian:</p>
                <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm">
                  sudo apt update && sudo apt install ansible
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mt-4">For CentOS/RHEL:</p>
                <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm">
                  sudo yum install epel-release && sudo yum install ansible
                </div>
              </div>

              <h3 className="text-xl font-medium pt-6 dark:text-gray-200">2. Network Connectivity</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Ensure your workstation has network access to the target server:
              </p>
              <ul className="list-disc pl-8 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Verify firewall rules in pf.conf allow SSH (port 22) access</li>
                <li>Test connectivity using ping:</li>
              </ul>
              <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm">
                ping -c 4 HOSTNAME_OR_IP
              </div>

              <h3 className="text-xl font-medium pt-6 dark:text-gray-200">3. SSH Configuration</h3>
              <p className="text-gray-700 dark:text-gray-300">
                The target server must have SSH enabled and properly configured:
              </p>
              <ul className="list-disc pl-8 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Ensure SSH daemon is running:</li>
              </ul>
              <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm">
                service sshd status
              </div>
              <ul className="list-disc pl-8 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Enable SSH daemon if not already enabled:</li>
              </ul>
              <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm">
                # Add to /etc/rc.conf:
sshd_enable="YES"

# Start the service:
service sshd start</div>
              <ul className="list-disc pl-8 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Configure SSH to allow password authentication (temporarily):</li>
              </ul>
              <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm">
                ee /etc/ssh/sshd_config
                
# Ensure these lines are set:
PasswordAuthentication yes
PermitRootLogin no

# Restart sshd after changes:
service sshd restart</div>
              <p className="text-gray-700 dark:text-gray-300 text-sm italic">
                Note: After bootstrap, SSH will be configured to use key-based authentication only
              </p>

              <h3 className="text-xl font-medium pt-6 dark:text-gray-200">4. User Account Setup</h3>
              <p className="text-gray-700 dark:text-gray-300">
                You need a user account on the target server with wheel group access:
              </p>
              <ul className="list-disc pl-8 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Create a new user (if needed):</li>
              </ul>
              <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm">
                # Add user with home directory and sh shell
pw useradd -m -n USERNAME -s /bin/sh
                
# Set password for new user
passwd USERNAME</div>
              <ul className="list-disc pl-8 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Grant wheel access:</li>
              </ul>
              <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm">
                pw groupmod wheel -m USERNAME</div>
              <ul className="list-disc pl-8 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Configure sudo access:</li>
              </ul>
              <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm">
                # Install sudo if not already installed
pkg install sudo

# Configure sudo access
visudo

# Add the following line:
%wheel ALL=(ALL) ALL</div>
            </div>

            <div className="mt-4 bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200">FreeBSD Verification Checklist</h4>
              <ul className="list-none pl-4 mt-2 space-y-2 text-blue-700 dark:text-blue-300">
                <li>✓ Python 3.9+ and Ansible are installed</li>
                <li>✓ Target server is reachable via ping</li>
                <li>✓ SSH service is enabled and running</li>
                <li>✓ User account exists with wheel group access</li>
                <li>✓ Sudo is installed and configured</li>
                <li>✓ Password authentication is temporarily enabled</li>
                <li>✓ PF firewall allows SSH connections</li>
              </ul>
            </div>

            <div className="mt-4 p-4 border border-yellow-500 rounded-lg bg-yellow-50 dark:bg-yellow-900/20">
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">FreeBSD-Specific Notes</h4>
              <ul className="list-disc pl-4 mt-2 space-y-2 text-yellow-700 dark:text-yellow-300">
                <li>FreeBSD uses <code className="bg-black/10 dark:bg-white/10 px-1 rounded">pw</code> for user management instead of useradd/usermod</li>
                <li>System services are managed through <code className="bg-black/10 dark:bg-white/10 px-1 rounded">rc.conf</code> and the <code className="bg-black/10 dark:bg-white/10 px-1 rounded">service</code> command</li>
                <li>The default shell is <code className="bg-black/10 dark:bg-white/10 px-1 rounded">/bin/sh</code> rather than bash</li>
                <li>Package management is done through <code className="bg-black/10 dark:bg-white/10 px-1 rounded">pkg</code> instead of apt/yum</li>
              </ul>
            </div>
          </section>

          <section id="bootstrap" className="space-y-6">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Bootstrap a host</h2>
            <p className="text-gray-700 dark:text-gray-300">
              To bootstrap a host, execute the bootstrap playbook using ansible-playbook.
            </p>
            
            <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm">
              ansible-playbook playbooks/bootstrap.yml -i HOSTNAME_OR_IP, --ask-pass --ask-become-pass --user USERNAME
            </div>

            <p className="text-gray-700 dark:text-gray-300">
              Ansible will login, create a dedicated "ansible" user account, install sudo, and facter.
            </p>
          </section>

          <div className="mt-8 p-4 border dark:border-gray-700 rounded-lg w-full overflow-hidden">
            <h2 className="text-xl font-semibold mb-2 break-all dark:text-white">Last Modified</h2>
            <p className="text-gray-600 break-all dark:text-gray-400">
              Last configuration update: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
