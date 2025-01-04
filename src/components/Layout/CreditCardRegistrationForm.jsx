import * as Components from '../../components';

function CreditCardRegistrationForm() {

  return (
    <>
      <form action="submit" method='post'>
      <div className="flex flex-col justify-center align-middle">
        <div className="flex justify-center">
          <span className="text-3xl text-gray-700 font-sans">Payment Details</span>
        </div>
        <div>
          <Components.TextInput label="CARDHOLDER NAME" id="cardholderName" placeholder="Type your name here" type="text" required />
          <Components.TextInput label="CREDIT CARD NUMBER" id="cardNumber" placeholder="1234 5678 9012 3456" type="number" required maxLength="19" />
          <div className="flex gap-6">
            <div className="flex flex-col text-gray-600 my-2">
              <label>EXPIRY DATE (MM/YY)</label>
              <div className="flex gap-2 px-2 py-1">
                <input className="border-b-2 w-12" placeholder='MM' type="number" maxLength="2" id="monthEXP" required />
                <span>/</span>
                <input className="border-b-2 w-12" placeholder='YY' type="number" maxLength="2" id="yearEXP" required />
              </div>
            </div>
            <div className="w-16">
            <Components.TextInput label="CVV" type="number" id="CVV" placeholder="123" required />
            </div>
          </div>
          <Components.TextInput label="BILLING ADDRESS" type="text" placeholder="Billing Address" required />
        </div>
        <div className="gap-2 flex">
            <input type="checkbox" /><label className="text-gray-600">Remember this card</label>
        </div>
        <div className="flex gap-2 justify-center">
          <button type="submit" className="px-3 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-xl my-4">Submit</button>
          <button type="button" className="px-3 py-2 border rounded-xl my-4 bg-white hover:bg-gray-200 text-gray-600">Cancel</button>
        </div>
      </div>
      </form>
    </>
  )
}

export default CreditCardRegistrationForm;
