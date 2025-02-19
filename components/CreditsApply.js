import React from 'react';

const CreditsApply = () => {
  return (
    <div className="pb-2">
      <h4 className="h4">Apply for the Azure credits for open source projects program</h4>
      <p>
        You can use this page to apply for the Azure credits for open source projects program.
      </p>
      <p>
        Applications to the program will be reviewed and you will receive a notification of the decision within 3-4 weeks.
      </p>
      <div className="ul mt-4">
        <iframe
          title="Azure Credits Application"
          width="640px"
          height="480px"
          src="https://forms.office.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR90vS-jx9TxHvDhlVnIdXodUQUZMWE1BNVZXVTgxWEVGMk8zNEtNWDZKQSQlQCN0PWcu&embed=true"
          frameBorder="0"
          marginWidth="0"
          marginHeight="0"
          style={{ border: 'none', maxWidth: '100%', maxHeight: '100vh' }}
          allowFullScreen
          webkitAllowFullScreen
          mozAllowFullScreen
          msAllowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default CreditsApply;
