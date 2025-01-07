/* eslint-disable jsx-a11y/role-supports-aria-props */
import { Invoice } from '@/type';
import React from 'react';

interface Props {
  invoice: Invoice;
  setInvoice: (invoice: Invoice) => void;
}

const InvoiceInfo: React.FC<Props> = ({ invoice, setInvoice }) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string,
  ) => {
    setInvoice({ ...invoice, [field]: e.target.value });
  };

  console.log(invoice);

  return (
    <div className="mb-4 flex h-fit flex-col rounded-xl bg-base-200 p-5 md:mb-0">
      <div className="space-y-4">
        <h2 className="badge badge-accent">Émetteur</h2>
        <input
          type="text"
          value={invoice?.issuerName}
          placeholder="Nom de l'entreprise émettrice"
          className="input input-bordered w-full resize-none"
          required
          onChange={e => handleInputChange(e, 'issuerName')}
        />

        <textarea
          value={invoice?.issuerAddress}
          placeholder="Adresse de l'entreprise émettrice"
          className="textarea textarea-bordered h-40 w-full resize-none"
          rows={5}
          required
          onChange={e => handleInputChange(e, 'issuerAddress')}
        >
          {''}
        </textarea>

        <h2 className="badge badge-accent">Client</h2>
        <input
          type="text"
          value={invoice?.clientName}
          placeholder="Nom de l'entreprise cliente"
          className="input input-bordered w-full resize-none"
          required
          onChange={e => handleInputChange(e, 'clientName')}
        />

        <textarea
          value={invoice?.clientAddress}
          placeholder="Adresse de l'entreprise cliente"
          className="textarea textarea-bordered h-40 w-full resize-none"
          aria-rowcount={5}
          required
          onChange={e => handleInputChange(e, 'clientAddress')}
        ></textarea>

        <h2 className="badge badge-accent">Date de la Facture</h2>
        <input
          type="date"
          value={invoice?.invoiceDate}
          className="input input-bordered w-full resize-none"
          required
          onChange={e => handleInputChange(e, 'invoiceDate')}
        />

        <h2 className="badge badge-accent">Date d&#39échéance</h2>
        <input
          type="date"
          value={invoice?.dueDate}
          className="input input-bordered w-full resize-none"
          required
          onChange={e => handleInputChange(e, 'dueDate')}
        />
      </div>
    </div>
  );
};

export default InvoiceInfo;
