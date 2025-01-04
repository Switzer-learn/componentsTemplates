import * as Components from '../../../components';

function CreditCardRegisterPage() {

  return (
      <div className="flex justify-center align-middle h-auto shadow-lg border">
        <div className="w-auto flex justify-end align-middle px-5 py-5">
          <img src="./public/visa-platinum-recto-800x450.webp" alt="" className="w-auto h-96" />
        </div>
        <div className="px-5 py-5 w-auto">
          <div className="flex justify-start px-5 py-5">
            <Components.CreditCardRegistrationForm />
          </div>
        </div>
      </div>
  )
}

export default CreditCardRegisterPage;
