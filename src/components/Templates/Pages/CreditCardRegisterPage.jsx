import * as Components from '../../../components';

function CreditCardRegisterPage() {

  return (
      <div className="flex object-fill">
        <div className="">
          <img src="./visa-platinum-recto-800x450.webp" alt="credit card picture" className="w-auto h-auto max-h-96" />
        </div>
        <div className="w-auto">
          <div className="flex justify-start px-5 py-5">
            <Components.CreditCardRegistrationForm />
          </div>
        </div>
      </div>
  )
}

export default CreditCardRegisterPage;
