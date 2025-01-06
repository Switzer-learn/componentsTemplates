import * as Components from '../../../components';

function RegisterPage() {
  return (
    <>
      <div className="flex justify-center gap-2">
        <div className="w-auto py-3">
        <Components.RegisterForm />
        </div>
        <div className="flex flex-col text-gray-800 align-middle justify-center w-auto">
          <img src="" className="w-80 h-80 self-center" />
          <span className="text-xl text-center">Register Today!</span>
          <span className="text-center">Don't missout on the sale!</span>
        </div>
      </div>
    </>
  )
}

export default RegisterPage;
