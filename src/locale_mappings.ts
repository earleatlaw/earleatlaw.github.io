interface LocaleMapping {
  [key: string]: string;
}

/**
 * `localeMappings` provides all of the strings for the website.
 */
export const localeMappings: { [language: string]: LocaleMapping } = {
  'en-us': {
    'error.404.title': 'Page Not Found',
    'error.404.line1':
      'Sorry, but the page that you requested does not appear to exist.',
    'error.404.line2':
      'Please try using the menu at the top to find the desired page or use the button below to go to the homepage.',
    'footer.copyright': '© Copyright 2021 Earle at Law PLLC',
    'header.services': 'Colorado and Virginia Law Firm',
    'header.services.mobile': 'CO & VA Law Firm',
    'home.1.line1': 'You have legal questions.',
    'home.1.line2': 'We can help.',
    'home.2.values.title': 'Our Values',
    'home.2.values.desc':
      'We believe that access to an attorney should be easy and affordable, and that is what you will find at this firm.  From your private life, to your professional one, let us make things easier for you.',
    'home.3.business.create.desc':
      'Whether you are already making money or want to take the first step to starting your dream, let us help you get your business formed and running.',
    'home.3.business.create.title': 'Small Business',
    'home.3.business.contracts.desc':
      'Review current contracts, drafting new ones, and negotiating a new deal. Know your options and what you’re agreeing to.',
    'home.3.business.contracts.title': 'Contracts',
    'home.3.individual.estate.desc':
      'From Powers of Attorney to Wills, let us help you prepare for the worst. We have flat rate fees for your estate planning needs.',
    'home.3.individual.estate.title': 'Estate Planning',
    'home.3.individual.landlord_tenant.desc':
      'Renting out an investment property? Have an issue with a landlord? Get a solid rental agreement and know your rights as a landlord or tenant.',
    'home.3.individual.landlord_tenant.title': 'Landlord or Tenant',
    'home.3.individual.nuptials.desc':
      'Whether you are entering a marriage or leaving one, do so with the help of an experienced attorney. Whether it is a prenuptial agreement or a property settlement agreement, we have flat rate fees to help you.',
    'home.3.individual.nuptials.title': 'Prenuptial or Postnuptial',
    'home.3.business.other.desc':
      'Don’t see what you are looking for? Let’s get in touch and see how we can help.',
    'home.3.business.other.title': 'Something else?',
    'home.4.people.title': 'Real legal needs for real people.',
    'home.4.people.desc':
      'Thinking about starting a business? Want to finally have your Will done? Need an attorney’s advice about a situation but don’t want to use up your savings doing so? Look no further.',
    'page.about.body.1':
      'Earle at Law, PLLC is a law firm that offers services for Colorado and Virginia legal needs.',
    'page.about.body.2':
      "Sabrina Earle is the Founding Attorney of Earle at Law, PLLC. She is a Colorado and Virginia Attorney whose practice focuses on helping individuals and small businesses with their legal needs. Sabrina received her law degree from the University of Richmond's School of Law and has practiced law in Colorado and Virginia.",
    'page.about.body.3':
      'During her time as an attorney, she has assisted individuals with everything from their estate planning needs to understanding home purchasing contracts and resolving Landlord/Tenant problems. Sabrina has also helped small businesses strengthen their contracts and resolve disputes in a variety of business situations. She is dedicated to offering quality legal services at an affordable price. Getting help from an attorney should not break the bank!',
    'page.about.title': 'About Earle at Law',
    'page.business.service.contracts.desc':
      'Do not let complex legalese stop you from understanding your rights in a contract your business signed. Meet with an experienced business attorney to help you understand what your options are in a difficult business situation.',
    'page.business.service.contracts.list.1':
      'Contract review and consultation is available for $50 - $100 per page',
    'page.business.service.contracts.list.2':
      'Price ranges depend on length and complexity of the contract',
    'page.business.service.contracts.list.3':
      'You will always be provided a quote of costs before starting',
    'page.business.service.contracts.title': 'Contract Reviews',
    'page.business.service.create.desc':
      'Whether you are ready to make your current business legit or ready to take that next step with your dream, let us help you get there. There is a lot that goes into starting a business between federal, state, and local rules and regulations.  We will provide counsel on corporate entity selection; prepare and file your formation with the state; completed DBA filing; step-by-step guidance on obtaining your EIN and local business license - all for a flat fee $400 plus SCC filing fees.  If you would also like to have a standard Operating Agreement included, then the fee is $500 plus filing fees.',
    'page.business.service.create.list.1':
      'Simple setup for $400, plus SCC filing fees',
    'page.business.service.create.list.2':
      'For only $100 more, setup includes a standard Operating Agreement',
    'page.business.service.create.title': 'Creating a Business',
    'page.business.service.drafting.desc':
      'Whether it is a contract you have had in place for a while that you think needs an update or you are looking for some standard contracts to have on hand for your business, we can help you with that! We will determine your biggest concerns and focus points and we will create a contract that is helps your business, is easy to understand, and easy to enforce. Give us a look and we will provide a quote so you know exactly what the cost will be.',
    'page.business.service.drafting.list.1':
      'Contract editing is available for $25 - $50 per page',
    'page.business.service.drafting.list.2':
      'Contract drafting is available for $500 - $1,000 per contract',
    'page.business.service.drafting.list.3':
      'Price ranges depend on length and complexity of the contract',
    'page.business.service.drafting.list.4':
      'Contract negotiation is available on an hourly rate basis',

    'page.business.service.drafting.title': 'Contract Drafting and Negotiation',
    'page.business.service.landlord_tenant.desc':
      'Do not let a poorly written lease stand in your way. Assistance is available whether you are a landlord or a tenant for residential or commercial spaces. Whether it is providing a custom lease for you to use or assistance with your tenancy, if you have an issue then we can help.',
    'page.business.service.landlord_tenant.list.1':
      'Custom leases are available starting for $500',
    'page.business.service.landlord_tenant.list.2':
      'Tenancy consultation is available for $300 an hour',
    'page.business.service.landlord_tenant.title': 'Landlords and Tenants',
    'page.business.service.other.desc':
      "Have a business matter that you do not see listed? That's fine. We just listed our most used services.",
    'page.business.service.other.list.1': 'Contact us for a quote at no cost',
    'page.business.service.other.title': 'Other - Consultations',
    'page.business.header.desc':
      'Getting an attorney to assist you should not be out of the budget. See below for our easy to understand flat fee services. Contact us for further information.',
    'page.business.header.subtitle': 'Transparency and Value for Your Success',
    'page.business.header.title': 'Legal Services for Your Small Business',
    'page.contact.form.business': 'Business Name',
    'page.contact.form.business.error': 'Business Name is required.',
    'page.contact.form.email': 'Email',
    'page.contact.form.email.error': 'Email is required.',
    'page.contact.form.first_name': 'First Name',
    'page.contact.form.first_name.error': 'First Name is required.',
    'page.contact.form.info': 'Description',
    'page.contact.form.info.error':
      'Description is required. You may choose to provide a minimal description until communicating with the attorney.',
    'page.contact.form.info.help':
      'Please provide a brief explanation to prepare the attorney.',
    'page.contact.form.last_name': 'Last Name',
    'page.contact.form.last_name.error': 'Last Name is required.',
    'page.contact.form.phone': 'Phone Number',
    'page.contact.form.phone.error': 'Phone Number is required.',
    'page.contact.form.reason': 'Reason',
    'page.contact.form.reason.error': 'Reason is required.',
    'page.contact.form.reason.business.create': 'Create a Business',
    'page.contact.form.reason.business.contracts': 'Reviewing Contracts',
    'page.contact.form.reason.business.drafting':
      'Editing / Drafting Contracts',
    'page.contact.form.reason.business.landlord_tenant':
      'Landlord / Tenant Matter',
    'page.contact.form.reason.business.other': 'Another Legal Matter',
    'page.contact.form.reason.individual.estate': 'Estate Planning',
    'page.contact.form.reason.individual.nuptials': 'Prenuptial / Postnuptial',
    'page.contact.form.reason.individual.landlord_tenant':
      'Landlord / Tenant Matter',
    'page.contact.form.reason.individual.other': 'Another Legal Matter',
    'page.contact.form.submit': 'Submit Details',
    'page.contact.form.type': 'Type',
    'page.contact.form.type.error': 'Type is required.',
    'page.contact.form.type.business': 'Business',
    'page.contact.form.type.individual': 'Individual',
    'page.contact.request.error':
      'While processing the request, an unexpected error occurred: {error}. Please try again or email the details below to {link}.',
    'page.contact.request.success.body':
      'Thank you for contacting us! We will review the request and reach out soon.',
    'page.contact.request.success.button': 'Close',
    'page.contact.request.success.header': 'Success!',
    'page.contact.title': 'Contact Us',
    'page.individual.service.estate.desc':
      'Everyone should have at least a basic plan for their estate. This includes, but means more than having a Will. Estate planning also includes having a Powers of Attorney so that your personal matters can be handled when you are unable to. Life happens and things can turn for the worst when we least expect it. Planning for this helps prevent a bad situation from becoming worse.',
    'page.individual.service.estate.list.1':
      'Basic estate plans are available for $350 for an individual',
    'page.individual.service.estate.list.2':
      'Basic estate plans for $600 for a couple',
    'page.individual.service.estate.list.3':
      'Assistance is also available for more complex estate planning',
    'page.individual.service.estate.title': 'Estate Planning',
    'page.individual.service.nuptials.desc':
      'It is not a secret that over half of marriages end in divorce, so it is reasonable for you and your spouse to want to protect your interest if it happens. We offer standard prenuptial agreements at $350. More complex agreements are available at an hourly rate.  Already married and wish you had done one? Postnuptial agreements are available at the same rate. If you are divorcing and need help with a Property Settlement Agreement, we can help you with that as well. Standard Property Settlement Agreements are available for $400 for no minor children and $600 for custody arraignments included. More complex agreements can be done on an hourly basis.',
    'page.individual.service.nuptials.list.1':
      'Standard Prenuptial or Postnuptial agreements for $350',
    'page.individual.service.nuptials.list.2':
      'Standard Property Settlement Agreements for $400',
    'page.individual.service.nuptials.list.3':
      'Standard Property Settlement Agreements for $600 if including Custody Arrangements',
    'page.individual.service.nuptials.list.4':
      'Assistance is also available for more complex agreements',
    'page.individual.service.nuptials.title': 'Prenuptial or Postnuptial',
    'page.individual.service.landlord_tenant.desc':
      'Have an extra space or property that you want to look into renting out? Colorado or Virginia compliant residential lease agreements are available for $500. Are you a tenant with a lease agreement that you just do not understand? Meet with an experienced attorney to help you make sense of your lease agreement and your situation with a $300 consultation.',
    'page.individual.service.landlord_tenant.title': 'Landlord or Tenant',
    'page.individual.service.other.desc':
      "Have a matter that you do not see listed? That's ok! One-hour consultations are available for $300. For something other than a consultation, contact us for a quote.",
    'page.individual.service.other.title': 'Other - Consultations',
    'page.individual.header.desc':
      'Below are services that we provide for your individual and personal legal needs.',
    'page.individual.header.subtitle': 'For Personal Legal Matters',
    'page.individual.header.title': 'Legal Services for You',
    'route.about': 'About',
    'route.business': 'Small Business',
    'route.contact': 'Contact Us',
    'route.home': 'Home',
    'route.go_home': 'Go Home',
    'route.individual': 'Individual',
    'route.learn_more': 'Learn More',
    'service.button.contact': 'Contact Us',
    'service.list.contact': 'Contact us for a quote at no cost',
  },
};
