import {
  EuiButton,
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiForm,
  EuiLink,
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiPageTemplate,
  EuiProgress,
  EuiSpacer,
  EuiSuperSelect,
  EuiTextAlign,
  EuiTextArea,
  useEuiI18n,
} from '@elastic/eui';
import React, { ReactNode, useState } from 'react';
import { useParams } from 'react-router';
import { Locale } from '../../components';
import { BusinessServices, IndividualServices } from '../../constants';
import { Contact, submitContact, toContact } from './contact';
import { FormRow } from './form_row';
import { HelpFormRow } from './help_form_row';

interface Props {
  /**
   * The type of page referring the request.
   */
  type?: string;
  /**
   * The reason (subset of type) referring the request.
   */
  reason?: string;
}

const types = ['individual', 'business'];
const typeTokens = types.map((type) => `page.contact.form.type.${type}`);

/**
 * For a `string`-based `error`, included it in a note that allows the user to
 * send an email in case the backend is down.
 *
 * @param error The error, if any.
 * @returns A user workaround, or `undefined`.
 */
const errorBypass = (error?: boolean | string): ReactNode => {
  if (typeof error === 'string') {
    return (
      <Locale
        token="page.contact.request.error"
        values={{
          error,
          link: (
            <EuiLink href="mailto:contact@earle.law">contact@earle.law</EuiLink>
          ),
        }}
      />
    );
  }

  return undefined;
};

/**
 * Display a Modal upon successfully sending the contact to the backend.
 *
 * @param display `true` to show it.
 * @returns Modal or `undefined`.
 */
const renderModal = (display: boolean, close: () => void): ReactNode => {
  if (!display) {
    return undefined;
  }

  return (
    <EuiModal onClose={close}>
      <EuiModalHeader>
        <EuiModalHeaderTitle>
          <Locale token="page.contact.request.success.header" />
        </EuiModalHeaderTitle>
      </EuiModalHeader>
      <EuiModalBody>
        <Locale token="page.contact.request.success.body" />
      </EuiModalBody>
      <EuiModalFooter>
        <EuiButton onClick={close}>
          <Locale token="page.contact.request.success.button" />
        </EuiButton>
      </EuiModalFooter>
    </EuiModal>
  );
};

const typeFromProp = (type?: string): string | undefined => {
  if (type && types.includes(type)) {
    return type;
  }

  return undefined;
};

const reasonFromProp = (
  individualReasons: string[],
  businessReasons: string[],
  type?: string,
  reason?: string
): string | undefined => {
  const validType = typeFromProp(type);

  if (validType && reason) {
    let reasons;

    if (validType === 'individual') {
      reasons = individualReasons;
    } else {
      reasons = businessReasons;
    }

    if (reasons?.includes(reason)) {
      return reason;
    }
  }

  return undefined;
};

/**
 * `ContactPage` provides a form that users can use to submit to the firm.
 */
export const ContactPage: React.VFC = () => {
  const { type, reason } = useParams<Props>();
  const individualReasons = IndividualServices.map((service) => service.id);
  const individualReasonTokens = individualReasons.map(
    (reason) => `page.contact.form.reason.individual.${reason}`
  );
  const businessReasons = BusinessServices.map((service) => service.id);
  const businessReasonTokens = businessReasons.map(
    (reason) => `page.contact.form.reason.business.${reason}`
  );
  const typeOptions = useEuiI18n(typeTokens, typeTokens).map(
    (label, index) => ({
      inputDisplay: label,
      value: types[index],
    })
  );
  const individualOptions = useEuiI18n(
    individualReasonTokens,
    individualReasonTokens
  ).map((label, index) => ({
    inputDisplay: label,
    value: individualReasons[index],
  }));
  const businessOptions = useEuiI18n(
    businessReasonTokens,
    businessReasonTokens
  ).map((label, index) => ({
    inputDisplay: label,
    value: businessReasons[index],
  }));
  const [contact, setContact] = useState<Partial<Contact>>({
    type: typeFromProp(type),
    reason: reasonFromProp(individualReasons, businessReasons, type, reason),
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean | string>(false);
  const updateContact = (part: Partial<Contact>) =>
    setContact({ ...contact, ...part });
  const isError = (invalid: boolean) => !!error && invalid;
  const askForBusinessName =
    contact.type === 'business' &&
    contact.reason &&
    contact.reason !== 'create';

  return (
    <EuiPageTemplate
      pageBodyProps={{
        className: 'pageBody',
      }}
      pageHeader={{
        iconType: 'email',
        pageTitle: <Locale token="page.contact.title" />,
      }}
    >
      {renderModal(success, () => setSuccess(false))}
      <EuiForm error={errorBypass(error)} isInvalid={!!error}>
        {loading && <EuiProgress color="primary" position="fixed" size="xs" />}
        <EuiFlexGroup>
          <EuiFlexItem>
            <FormRow
              error={isError(!contact.first_name)}
              token="page.contact.form.first_name"
            >
              <EuiFieldText
                disabled={loading}
                onChange={(e) => updateContact({ first_name: e.target.value })}
                value={contact.first_name ?? ''}
              />
            </FormRow>
            <FormRow
              error={isError(!contact.last_name)}
              token="page.contact.form.last_name"
            >
              <EuiFieldText
                disabled={loading}
                onChange={(e) => updateContact({ last_name: e.target.value })}
                value={contact.last_name ?? ''}
              />
            </FormRow>
            <FormRow
              error={isError(!contact.email)}
              token="page.contact.form.email"
            >
              <EuiFieldText
                disabled={loading}
                onChange={(e) => updateContact({ email: e.target.value })}
                type="email"
                value={contact.email ?? ''}
              />
            </FormRow>
            <FormRow
              error={isError(!contact.phone)}
              token="page.contact.form.phone"
            >
              <EuiFieldText
                disabled={loading}
                onChange={(e) => updateContact({ phone: e.target.value })}
                type="tel"
                value={contact.phone ?? ''}
              />
            </FormRow>
          </EuiFlexItem>
          <EuiFlexItem>
            <FormRow
              error={isError(!contact.type)}
              token="page.contact.form.type"
            >
              <EuiSuperSelect
                disabled={loading}
                onChange={(type) =>
                  updateContact({
                    business_name: undefined,
                    reason: undefined,
                    type,
                  })
                }
                options={typeOptions}
                valueOfSelected={contact.type ?? ''}
              />
            </FormRow>
            <FormRow
              error={isError(!contact.reason)}
              token="page.contact.form.reason"
            >
              <EuiSuperSelect
                disabled={!contact.type || loading}
                onChange={(reason) => updateContact({ reason })}
                options={
                  contact.type === 'individual'
                    ? individualOptions
                    : businessOptions
                }
                valueOfSelected={contact.reason ?? ''}
              />
            </FormRow>
            {askForBusinessName && (
              <FormRow
                error={isError(!contact.business_name)}
                token="page.contact.form.business"
              >
                <EuiFieldText
                  disabled={loading}
                  onChange={(e) =>
                    updateContact({ business_name: e.target.value })
                  }
                  value={contact.business_name ?? ''}
                />
              </FormRow>
            )}
            <HelpFormRow
              error={isError(!contact.description)}
              token="page.contact.form.info"
            >
              <EuiTextArea
                disabled={loading}
                onChange={(e) => updateContact({ description: e.target.value })}
                value={contact.description ?? ''}
              />
            </HelpFormRow>
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiSpacer />
        <EuiTextAlign textAlign="center">
          <EuiButton
            className="contact"
            isLoading={loading}
            onClick={() => {
              const fullContact = toContact(contact);

              if (fullContact) {
                setError(false);
                setLoading(true);

                submitContact(fullContact)
                  .then(() => {
                    setContact({});
                    setSuccess(true);
                  })
                  .catch((err) => setError(err.message))
                  .then(() => setLoading(false));
              } else {
                setError(true);
              }
            }}
          >
            <Locale token="page.contact.form.submit" />
          </EuiButton>
        </EuiTextAlign>
      </EuiForm>
    </EuiPageTemplate>
  );
};
