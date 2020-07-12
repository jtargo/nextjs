export const Input = ({ ...inputProps }) => (
  <>
    <input {...inputProps} className="input" />
    <style jsx>
      {`
        .input {
          text-align: center;
          padding: 1.5rem;
          border: 1px solid #5EDDC6;
          outline: none;
          border-radius: 4px;
        }
        .input:hover:active:focus {
          border: 1px solid #329D8A;
      }
      `}
    </style>
  </>
);
