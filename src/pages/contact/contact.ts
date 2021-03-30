import createHttpError from 'http-errors';

/**
 * `Contact` represents the payload being sent to the API.
 */
export interface Contact {
  business_name?: string;
  description: string;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  reason: string;
  type: string;
}

/**
 * Convert the `contact` into a complete `Contact` if possible.
 *
 * @param contact Partial input from the UI.
 * @returns `undefined` if incomplete.
 */
export const toContact = (contact: Partial<Contact>): Contact | undefined => {
  if (
    !contact.description ||
    !contact.email ||
    !contact.first_name ||
    !contact.last_name ||
    !contact.phone ||
    !contact.reason ||
    !contact.type
  ) {
    return undefined;
  } else if (
    !contact.business_name &&
    contact.type === 'business' &&
    contact.reason !== 'create'
  ) {
    return undefined;
  }

  return {
    business_name:
      contact.type === 'business' && contact.reason !== 'create'
        ? contact.business_name
        : undefined,
    description: contact.description,
    email: contact.email,
    first_name: contact.first_name,
    last_name: contact.last_name,
    phone: contact.phone,
    reason: contact.reason,
    type: contact.type,
  };
};

/**
 * Submit the `contact` to the API.
 *
 * @param contact The contact to submit.
 * @throws `Error` if the request fails.
 */
export const submitContact = async (contact: Contact): Promise<void> => {
  const response = await fetch(
    `https://api.earle.law/contact/${contact.type}`,
    {
      body: JSON.stringify(contact),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );

  if (!response.ok) {
    let message = undefined;

    if (response.headers.get('content-type')?.startsWith('application/json')) {
      const json = await response.json();
      message = json?.error?.message;
    }

    throw createHttpError(
      response.status,
      message ||
        `[${response.status}] An unexpected error occurred while processing the request.`
    );
  }
};
