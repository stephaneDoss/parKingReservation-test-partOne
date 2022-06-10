/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteInvoice, getInvoice } from "./data";

/** Represents an invoice */
const Invoice: FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const invoice = getInvoice(parseInt(params.invoiceId!, 10));

  return (
    <main style={{ padding: "1rem" }}>
      {/* <h2>Total Due: {invoice?.amount}</h2>
      <p>
        {invoice?.name}: {invoice?.number}
      </p>
      <p>Due Date: {invoice?.due}</p> */}
      {/* <button
        onClick={() => {
          deleteInvoice(invoice?.number!);
          navigate("/invoices");
        }}>
        Delete
      </button> */}
    </main>
  );
};

export default Invoice;
