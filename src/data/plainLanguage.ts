export interface PlainLanguage { explain: string; howToCheck: string; why: string }

// Plain-language help for each question, written for owners without an IT background.
export const plainLanguage: Record<string, PlainLanguage> = {
  'mfa-email': {
    explain: 'Multi-factor authentication (MFA) means logging in takes your password plus a second step, like a code on your phone.',
    howToCheck: 'Ask whoever manages your email (Google Workspace or Microsoft 365) whether MFA is required for every user, or look for "2-Step Verification" in the admin settings.',
    why: 'Stolen email passwords are the most common way small businesses get breached. MFA stops most of those attacks even if the password leaks.',
  },
  'mfa-admin': {
    explain: 'Admin accounts can change settings, add users, or delete data. These accounts should always need that second login step.',
    howToCheck: 'List who has admin rights in your email, website, and other key systems, then confirm each of those accounts uses MFA.',
    why: 'An attacker with an admin account can take over everything, lock you out, or erase your data.',
  },
  'mfa-remote': {
    explain: 'If people log in from home or on the road, through a VPN, remote desktop, or cloud apps, those logins should need a second step too.',
    howToCheck: 'List every way staff reach business systems from outside the office, and check whether each one asks for a code or phone approval.',
    why: 'Remote logins are open to the whole internet, so they are constantly targeted with stolen and guessed passwords.',
  },
  'password-manager': {
    explain: 'A password manager is an app that creates and stores strong passwords, so nobody has to remember them or write them down.',
    howToCheck: 'Ask staff where they keep business passwords. Spreadsheets, sticky notes, or browser memory on shared computers mean the answer is no.',
    why: 'It makes strong, unique passwords easy, and keeps shared logins out of emails, texts, and documents.',
  },
  'password-policy': {
    explain: 'Your systems can be set to reject short or common passwords, so weak ones are never allowed in the first place.',
    howToCheck: 'Look at the password settings in your email admin console and other key systems for a minimum length (12 or more characters is a good target).',
    why: 'Short or common passwords can be guessed by automated tools in minutes.',
  },
  'password-reuse': {
    explain: 'Each business account should have its own password, never one reused across sites.',
    howToCheck: 'Ask staff directly. If someone uses the same password for work email and a personal shopping site, the answer is no.',
    why: 'When any website gets breached, attackers try those same passwords everywhere else.',
  },
  'email-auth': {
    explain: 'SPF, DKIM, and DMARC are settings on your email domain that prove emails really come from you, which helps stop impersonation.',
    howToCheck: 'Free tools like MXToolbox can check your domain in seconds. Your email provider or web host can also confirm whether these are set up.',
    why: 'Without them, criminals can send emails that look like they come from your business, to your clients or your own staff.',
  },
  'email-filtering': {
    explain: 'Email filtering scans incoming messages and blocks dangerous attachments, fake links, and impersonation attempts.',
    howToCheck: 'Check your email provider\'s security settings, or ask your IT person whether phishing and malware protection are turned on.',
    why: 'Phishing emails are how most attacks start. Filtering catches many of them before anyone clicks.',
  },
  'email-forwarding': {
    explain: 'Attackers who break into a mailbox often set up a hidden rule that quietly forwards copies of every email to themselves.',
    howToCheck: 'Your email admin console can list forwarding rules. Ask whoever manages email to check for any that send mail outside the business.',
    why: 'A hidden forwarding rule can leak client information for months without anyone noticing.',
  },
  'endpoint-av': {
    explain: '"Endpoint protection" means security software, like antivirus, running on every work computer.',
    howToCheck: 'On each computer, check that security software is installed and switched on. Windows Security and similar built-in tools count if they are active.',
    why: 'It blocks known viruses and ransomware before they can run.',
  },
  'endpoint-health': {
    explain: 'This means being able to tell which computers have security software that is out of date or not working.',
    howToCheck: 'If your security software has a dashboard, look for devices marked as out of date. If you have no dashboard, the answer is probably no.',
    why: 'Protection that quietly stopped working is as bad as no protection, and you will not know until something goes wrong.',
  },
  'endpoint-usb': {
    explain: 'USB drives and other removable storage can carry viruses or be used to copy files off a computer.',
    howToCheck: 'Ask whether staff can plug in any USB drive, and whether your security software scans drives when they are connected.',
    why: 'Infected drives are an easy way for malware to get in, and drives make it easy for data to walk out the door.',
  },
  'updates-os': {
    explain: 'Your computers\' operating system (Windows or macOS) should install security updates automatically.',
    howToCheck: 'On a Mac, open System Settings, then General, then Software Update. On Windows, open Settings, then Windows Update. Look for automatic updates turned on.',
    why: 'Most attacks use security holes that already have a fix available. Updates close those holes.',
  },
  'updates-apps': {
    explain: 'Web browsers, Office or Google apps, PDF readers, and other programs need updates too, not just the operating system.',
    howToCheck: 'Open the main programs your staff use and look for update prompts, or check whether automatic updates are turned on.',
    why: 'Browsers and common apps are frequent targets, because almost everyone uses them every day.',
  },
  'updates-unsupported': {
    explain: 'Unsupported software is any program the maker no longer updates or fixes.',
    howToCheck: 'List the main programs you use and check whether each one still gets updates. Very old versions of Office, Windows, or accounting software are common examples.',
    why: 'When a maker stops fixing security problems, any new hole found in that software stays open forever.',
  },
  'updates-hardware': {
    explain: 'Every computer eventually becomes too old to run a version of Windows or macOS that still receives security updates.',
    howToCheck: 'Check each computer\'s model year and operating system version. Macs and PCs around six or more years old often can no longer get current security updates.',
    why: 'An old computer stuck on an unsupported system cannot be patched, which makes it one of the easiest ways into a business network.',
  },
  'seg-sensitive': {
    explain: 'Network segmentation means keeping your most sensitive computers and files on a separate part of the network from everything else.',
    howToCheck: 'Ask your IT person whether client files and key systems sit on a separate network or are protected from general office devices.',
    why: 'If one device gets infected, separation keeps the attack from spreading to everything you care about.',
  },
  'seg-payment': {
    explain: 'Computers used for banking, payroll, or payments should be kept separate from everyday web browsing and guest access.',
    howToCheck: 'Note which computers handle money, and whether those same machines are used for general browsing or share a network with guests.',
    why: 'Financial systems are a top target for criminals, so they deserve extra protection.',
  },
  'seg-admin': {
    explain: 'Only trusted computers should be able to change your router, firewall, or Wi-Fi settings.',
    howToCheck: 'Ask whoever set up your network whether any office device can log in to the router, or only specific trusted ones.',
    why: 'Someone who controls your network equipment can watch traffic or open doors for attackers.',
  },
  'guest-network': {
    explain: 'A guest Wi-Fi network lets visitors use the internet without joining the network your business computers use.',
    howToCheck: 'Look at the Wi-Fi networks in your office. If visitors get the same password your staff use, the answer is no.',
    why: 'Visitors\' phones and laptops may be infected, and they should never share a network with client files.',
  },
  'guest-isolation': {
    explain: 'Even with a guest network, it needs to be blocked from reaching your business computers, printers, and storage.',
    howToCheck: 'Ask whoever set up your Wi-Fi whether "guest isolation" or "client isolation" is turned on in the router settings.',
    why: 'A guest network that can still see your business devices gives no real protection.',
  },
  'guest-review': {
    explain: 'The guest Wi-Fi password should be changed from time to time, especially after it has been widely shared.',
    howToCheck: 'Think about when the guest password last changed. If it is the same one from years ago, the answer is no.',
    why: 'Old guest passwords end up shared far beyond the people you meant to give them to.',
  },
  'firewall-inbound': {
    explain: 'A firewall is the gatekeeper between your office network and the internet. By default, it should block connections nobody asked for.',
    howToCheck: 'Most office routers include a firewall. Ask your IT person or internet provider to confirm it is turned on and blocks unrequested incoming traffic.',
    why: 'Without it, attackers can reach devices inside your office directly from the internet.',
  },
  'firewall-admin': {
    explain: 'Your router\'s settings page should only be reachable from inside the office, not from anywhere on the internet.',
    howToCheck: 'Look in your router settings for "remote management" or "remote administration" and confirm it is off.',
    why: 'Routers with settings open to the internet get attacked constantly, and a taken-over router exposes the whole office.',
  },
  'firewall-review': {
    explain: 'When you add or drop a vendor, tool, or service, the firewall rules made for it should be reviewed.',
    howToCheck: 'Ask your IT person when the firewall rules were last reviewed. If nobody knows, the answer is probably no.',
    why: 'Old rules for services you no longer use can leave doors open that nobody remembers.',
  },
  'backup-schedule': {
    explain: 'Important files and systems should be copied to a backup automatically, on a regular schedule.',
    howToCheck: 'Ask where your client files and records are backed up, how often it happens, and who checks that it worked.',
    why: 'Backups are what let you recover from ransomware, hardware failure, or someone deleting files by mistake.',
  },
  'backup-restore': {
    explain: 'Testing a backup means actually restoring a file from it, to prove the backup really works.',
    howToCheck: 'Ask when someone last restored a file from backup. If it has never been tried, the answer is no.',
    why: 'Many businesses discover their backups are broken only when they desperately need them.',
  },
  'backup-protected': {
    explain: 'Backups should be protected so ransomware or a hacked account cannot delete or lock them.',
    howToCheck: 'Ask whether backups are kept offline, in a separate account, or with protection against deletion.',
    why: 'Modern ransomware hunts down backups first, so it can force you to pay.',
  },
  'access-lifecycle': {
    explain: 'When people join, change jobs, or leave, their access to systems should be added, changed, or removed promptly.',
    howToCheck: 'Think of the last person who left. Were their email and other accounts shut off right away? Is there a checklist for this?',
    why: 'Former employees\' accounts that stay active are a common and easily avoided risk.',
  },
  'access-privilege': {
    explain: 'Each person should only be able to reach the files and systems they need for their job, nothing more.',
    howToCheck: 'Ask whether everyone can open every folder and system, or whether access matches each person\'s role.',
    why: 'If one account is compromised, limited access limits the damage.',
  },
  'access-shared': {
    explain: 'Shared logins mean several people use the same username and password.',
    howToCheck: 'Look for accounts like "office@" or "frontdesk" that multiple people log in to.',
    why: 'With shared logins, you cannot tell who did what, and you cannot remove one person\'s access without affecting everyone.',
  },
  'encryption-laptops': {
    explain: 'Full-disk encryption scrambles everything stored on a laptop so it is unreadable without the login.',
    howToCheck: 'On a Mac, check System Settings, then Privacy & Security, for FileVault turned on. On Windows, look for BitLocker or Device Encryption.',
    why: 'If a laptop is lost or stolen, encryption keeps client files from being read.',
  },
  'encryption-mobile': {
    explain: 'Phones and tablets that get business email should have a screen lock, which also turns on their built-in encryption.',
    howToCheck: 'Check that every phone with work email requires a passcode, fingerprint, or face unlock.',
    why: 'Phones get lost far more often than laptops, and they often hold email full of client information.',
  },
  'encryption-keys': {
    explain: 'Encryption comes with a recovery key, a backup code to unlock the device if the password is lost.',
    howToCheck: 'Ask where recovery keys for FileVault or BitLocker are stored, and whether more than one trusted person can get to them.',
    why: 'Lose the recovery key, and an encrypted laptop\'s data can be gone for good.',
  },
  'incident-contacts': {
    explain: 'An incident contact list says who to call if something goes wrong: your IT help, insurance company, attorney, and bank.',
    howToCheck: 'Check whether this list exists somewhere easy to find, including on paper in case computers are down.',
    why: 'In the first hours of an attack, knowing exactly who to call saves time, money, and stress.',
  },
  'incident-isolate': {
    explain: 'Isolating a device means quickly disconnecting it from the network if you think it has been infected.',
    howToCheck: 'Ask staff what they would do if a strange message popped up demanding payment. Do they know to unplug or turn off Wi-Fi?',
    why: 'Disconnecting fast can stop ransomware from spreading to other computers.',
  },
  'incident-report': {
    explain: 'Staff need a simple, known way to report suspicious emails, lost devices, or accounts that seem hacked.',
    howToCheck: 'Ask a staff member who they would tell if they clicked a bad link. If they are unsure, the answer is no.',
    why: 'Problems caught early are much cheaper to fix, and people report more when it is easy and blame-free.',
  },
};
